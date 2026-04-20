import { apiVersion, dataset, projectId } from "@/sanity/env";
import { createClient } from "next-sanity";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

const token =
  process.env.SANITY_API_WRITE_TOKEN ||
  process.env.SANITY_WRITE_TOKEN ||
  process.env.SANITY_TOKEN;

const writeClient = token
  ? createClient({
      apiVersion,
      dataset,
      projectId,
      token,
      useCdn: false,
    })
  : null;

function asString(value: FormDataEntryValue | null) {
  return typeof value === "string" ? value.trim() : "";
}

function normalizeUrl(value: string) {
  if (!value) return "";
  return /^https?:\/\//i.test(value) ? value : `https://${value}`;
}

export async function POST(request: Request) {
  try {
    if (!writeClient) {
      return NextResponse.json(
        {
          error:
            "Career applications are not configured yet. Add SANITY_API_WRITE_TOKEN or SANITY_TOKEN to enable submissions.",
        },
        { status: 503 }
      );
    }

    const formData = await request.formData();
    const fullName = asString(formData.get("fullName"));
    const email = asString(formData.get("email"));
    const jobId = asString(formData.get("jobId"));
    const jobTitle = asString(formData.get("jobTitle"));

    if (!fullName || !email || !jobTitle) {
      return NextResponse.json(
        { error: "Full name, email, and job title are required." },
        { status: 400 }
      );
    }

    const resume = formData.get("resume");
    let resumeAssetRef: string | undefined;

    if (resume instanceof File && resume.size > 0) {
      const uploaded = await writeClient.assets.upload("file", resume, {
        filename: resume.name,
        contentType: resume.type || undefined,
      });
      resumeAssetRef = uploaded._id;
    }

    const linkedinProfile = normalizeUrl(asString(formData.get("linkedinProfile")));
    const portfolioUrl = normalizeUrl(asString(formData.get("portfolioUrl")));

    const application: any = {
      _type: "jobApplication",
      jobTitle,
      fullName,
      email,
      phone: asString(formData.get("phone")),
      coverLetter: asString(formData.get("coverLetter")),
      status: "submitted",
      appliedAt: new Date().toISOString(),
    };

    if (linkedinProfile) application.linkedinProfile = linkedinProfile;
    if (portfolioUrl) application.portfolioUrl = portfolioUrl;

    if (jobId && !jobId.startsWith("sample-")) {
      application.job = {
        _type: "reference",
        _ref: jobId,
      };
    }

    if (resumeAssetRef) {
      application.resume = {
        _type: "file",
        asset: {
          _type: "reference",
          _ref: resumeAssetRef,
        },
      };
    }

    const created = await writeClient.create(application);

    return NextResponse.json({ ok: true, id: created._id });
  } catch (error) {
    console.error("Career application submission failed:", error);
    const message = error instanceof Error ? error.message : "";
    const isPermissionError = message.includes('permission "create"');

    return NextResponse.json(
      {
        error: isPermissionError
          ? "Career applications are not writable yet. Please configure a Sanity token with create permissions."
          : message || "Unable to submit application. Please try again.",
      },
      { status: isPermissionError ? 403 : 500 }
    );
  }
}
