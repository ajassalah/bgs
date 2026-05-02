import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

type ApplyPayload = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  awardingBody: string;
  program: string;
  contactMethod: string;
  message: string;
};

function asString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function requireEnv(name: string) {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing ${name}`);
  }
  return value;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function buildTextEmail(payload: ApplyPayload) {
  return [
    "New application enquiry",
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
    ["Name", `${payload.firstName} ${payload.lastName}`],
    ["Email", payload.email],
    ["Phone", payload.phone],
    ["Awarding Body", payload.awardingBody],
    ["Program", payload.program],
    ["Preferred Contact Method", payload.contactMethod || "Not specified"],
  ];

  return `
    <h2>New application enquiry</h2>
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

    const smtpHost = requireEnv("SMTP_HOST");
    const smtpPort = Number(process.env.SMTP_PORT || 587);
    const smtpUser = requireEnv("SMTP_USER");
    const smtpPass = requireEnv("SMTP_PASS");
    const from = process.env.SMTP_FROM || smtpUser;
    const to = process.env.APPLY_NOTIFICATION_EMAIL || "info@britishgraduateschool.co.uk";

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      requireTLS: smtpPort === 587,
      tls: {
        rejectUnauthorized: process.env.SMTP_TLS_REJECT_UNAUTHORIZED !== "false",
      },
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    await transporter.sendMail({
      from,
      to,
      replyTo: payload.email,
      subject: `New BGS application enquiry - ${payload.firstName} ${payload.lastName}`,
      text: buildTextEmail(payload),
      html: buildHtmlEmail(payload),
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Apply form submission failed:", error);
    const message = error instanceof Error ? error.message : "";
    const isMissingConfig = message.startsWith("Missing SMTP_");
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
