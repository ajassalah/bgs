import { NextResponse } from "next/server";
import { escapeHtml, getMailSettings, isMissingEmailConfig } from "@/lib/email";

export const runtime = "nodejs";

type ApplyPayload = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  awardingBody: string;
  program: string;
  contactMethod: string;
  subject: string;
  message: string;
};

function asString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function buildTextEmail(payload: ApplyPayload) {
  return [
    payload.subject || "New application enquiry",
    "",
    `Name: ${payload.firstName} ${payload.lastName}`,
    `Email: ${payload.email}`,
    `Phone: ${payload.phone}`,
    `Awarding Body: ${payload.awardingBody}`,
    `Program: ${payload.program}`,
    `Preferred Contact Method: ${payload.contactMethod || "Not specified"}`,
    "",
    "Message:",
    payload.message || "No message provided.",
  ].join("\n");
}

function buildHtmlEmail(payload: ApplyPayload) {
  const rows = [
    ["Subject", payload.subject || "New application enquiry"],
    ["Name", `${payload.firstName} ${payload.lastName}`],
    ["Email", payload.email],
    ["Phone", payload.phone],
    ["Awarding Body", payload.awardingBody],
    ["Program", payload.program],
    ["Preferred Contact Method", payload.contactMethod || "Not specified"],
  ];

  return `
    <h2>${escapeHtml(payload.subject || "New application enquiry")}</h2>
    <table cellpadding="8" cellspacing="0" style="border-collapse:collapse">
      ${rows
        .map(
          ([label, value]) => `
            <tr>
              <td style="border:1px solid #ddd;font-weight:bold">${escapeHtml(label)}</td>
              <td style="border:1px solid #ddd">${escapeHtml(value)}</td>
            </tr>
          `
        )
        .join("")}
    </table>
    <h3>Message</h3>
    <p>${escapeHtml(payload.message || "No message provided.").replace(/\n/g, "<br>")}</p>
  `;
}

function buildConfirmationText(payload: ApplyPayload) {
  return [
    `Dear ${payload.firstName},`,
    "",
    "Thank you for contacting British Graduate School. We have received your enquiry and our admissions team will review it shortly.",
    "",
    "Your enquiry summary:",
    `Subject: ${payload.subject || "Application enquiry"}`,
    `Awarding Body: ${payload.awardingBody}`,
    `Program: ${payload.program}`,
    "",
    "Kind regards,",
    "British Graduate School",
  ].join("\n");
}

function buildConfirmationHtml(payload: ApplyPayload) {
  return `
    <p>Dear ${escapeHtml(payload.firstName)},</p>
    <p>Thank you for contacting British Graduate School. We have received your enquiry and our admissions team will review it shortly.</p>
    <h3>Your enquiry summary</h3>
    <p><strong>Subject:</strong> ${escapeHtml(payload.subject || "Application enquiry")}</p>
    <p><strong>Awarding Body:</strong> ${escapeHtml(payload.awardingBody)}</p>
    <p><strong>Program:</strong> ${escapeHtml(payload.program)}</p>
    <p>Kind regards,<br>British Graduate School</p>
  `;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const payload: ApplyPayload = {
      firstName: asString(body.firstName),
      lastName: asString(body.lastName),
      email: asString(body.email),
      phone: asString(body.phone),
      awardingBody: asString(body.awardingBody),
      program: asString(body.program),
      contactMethod: asString(body.contactMethod),
      subject: asString(body.subject),
      message: asString(body.message),
    };

    if (
      !payload.firstName ||
      !payload.lastName ||
      !payload.email ||
      !payload.phone ||
      !payload.awardingBody ||
      !payload.program
    ) {
      return NextResponse.json(
        { error: "Please complete all required fields." },
        { status: 400 }
      );
    }

    const { from, notificationEmail, transporter } = getMailSettings();
    const subject = payload.subject || `New BGS application enquiry - ${payload.firstName} ${payload.lastName}`;

    await transporter.sendMail({
      from,
      to: notificationEmail,
      replyTo: payload.email,
      subject,
      text: buildTextEmail(payload),
      html: buildHtmlEmail(payload),
    });

    await transporter.sendMail({
      from,
      to: payload.email,
      subject: "We received your British Graduate School enquiry",
      text: buildConfirmationText(payload),
      html: buildConfirmationHtml(payload),
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Apply form submission failed:", error);
    const message = error instanceof Error ? error.message : "";
    const isMissingConfig = isMissingEmailConfig(error);
    const isDevelopment = process.env.NODE_ENV === "development";

    return NextResponse.json(
      {
        error: isMissingConfig
          ? "Email notifications are not configured yet."
          : isDevelopment && message
            ? `Email send failed: ${message}`
            : "Unable to submit your application right now. Please try again.",
      },
      { status: isMissingConfig ? 503 : 500 }
    );
  }
}
