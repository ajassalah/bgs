import { NextResponse } from "next/server";
import { escapeHtml, getMailSettings, isMissingEmailConfig } from "@/lib/email";

export const runtime = "nodejs";

type ContactPayload = {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
};

function asString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function buildTextEmail(payload: ContactPayload) {
  return [
    payload.subject,
    "",
    `Name: ${payload.firstName} ${payload.lastName}`,
    `Email: ${payload.email}`,
    "",
    "Message:",
    payload.message,
  ].join("\n");
}

function buildHtmlEmail(payload: ContactPayload) {
  return `
    <h2>${escapeHtml(payload.subject)}</h2>
    <p><strong>Name:</strong> ${escapeHtml(`${payload.firstName} ${payload.lastName}`)}</p>
    <p><strong>Email:</strong> ${escapeHtml(payload.email)}</p>
    <h3>Message</h3>
    <p>${escapeHtml(payload.message).replace(/\n/g, "<br>")}</p>
  `;
}

function buildConfirmationText(payload: ContactPayload) {
  return [
    `Dear ${payload.firstName},`,
    "",
    "Thank you for contacting British Graduate School. We have received your message and will get back to you shortly.",
    "",
    "Your message summary:",
    `Subject: ${payload.subject}`,
    "",
    "Kind regards,",
    "British Graduate School",
  ].join("\n");
}

function buildConfirmationHtml(payload: ContactPayload) {
  return `
    <p>Dear ${escapeHtml(payload.firstName)},</p>
    <p>Thank you for contacting British Graduate School. We have received your message and will get back to you shortly.</p>
    <p><strong>Subject:</strong> ${escapeHtml(payload.subject)}</p>
    <p>Kind regards,<br>British Graduate School</p>
  `;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const payload: ContactPayload = {
      firstName: asString(body.firstName),
      lastName: asString(body.lastName),
      email: asString(body.email),
      subject: asString(body.subject),
      message: asString(body.message),
    };

    if (
      !payload.firstName ||
      !payload.lastName ||
      !payload.email ||
      !payload.subject ||
      !payload.message
    ) {
      return NextResponse.json(
        { error: "Please complete all required fields." },
        { status: 400 }
      );
    }

    const { from, notificationEmail, transporter } = getMailSettings();

    await transporter.sendMail({
      from,
      to: notificationEmail,
      replyTo: payload.email,
      subject: `New BGS contact enquiry - ${payload.subject}`,
      text: buildTextEmail(payload),
      html: buildHtmlEmail(payload),
    });

    await transporter.sendMail({
      from,
      to: payload.email,
      subject: "We received your British Graduate School message",
      text: buildConfirmationText(payload),
      html: buildConfirmationHtml(payload),
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form submission failed:", error);
    const message = error instanceof Error ? error.message : "";
    const isMissingConfig = isMissingEmailConfig(error);
    const isDevelopment = process.env.NODE_ENV === "development";

    return NextResponse.json(
      {
        error: isMissingConfig
          ? "Email notifications are not configured yet."
          : isDevelopment && message
            ? `Email send failed: ${message}`
            : "Unable to submit your message right now. Please try again.",
      },
      { status: isMissingConfig ? 503 : 500 }
    );
  }
}
