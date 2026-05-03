import nodemailer from "nodemailer";

export function requireEnv(name: string) {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing ${name}`);
  }
  return value;
}

export function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export function getMailSettings() {
  const smtpHost = requireEnv("SMTP_HOST");
  const smtpPort = Number(process.env.SMTP_PORT || 587);
  const smtpUser = requireEnv("SMTP_USER");
  const smtpPass = requireEnv("SMTP_PASS");
  const from = process.env.SMTP_FROM || smtpUser;
  const notificationEmail =
    process.env.APPLY_NOTIFICATION_EMAIL || "info@britishgraduateschool.co.uk";

  return {
    from,
    notificationEmail,
    transporter: nodemailer.createTransport({
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
    }),
  };
}

export function isMissingEmailConfig(error: unknown) {
  return error instanceof Error && error.message.startsWith("Missing SMTP_");
}
