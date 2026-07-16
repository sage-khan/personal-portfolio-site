const fs = require("fs");
const path = require("path");
const nodemailer = require("nodemailer");

const LOG_DIR = process.env.MESSAGE_LOG_DIR || "/data";
const LOG_FILE = path.join(LOG_DIR, "messages.log");

function smtpConfigured() {
  return Boolean(process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS);
}

function buildTransport() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 587),
    secure: process.env.SMTP_SECURE === "true",
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
  });
}

function logToFile(entry) {
  try {
    fs.mkdirSync(LOG_DIR, { recursive: true });
    fs.appendFileSync(LOG_FILE, JSON.stringify(entry) + "\n", "utf8");
  } catch (err) {
    // Local/dev fallback if the volume isn't writable — never let logging
    // failure block a contact-form submission from succeeding.
    console.error("Failed to write message log:", err.message);
  }
}

async function deliverMessage({ name, email, subject, message }) {
  const toAddress = process.env.CONTACT_TO_EMAIL || "sagekhanofficial@gmail.com";
  const fromAddress = process.env.CONTACT_FROM_EMAIL || `"Sage Force Site" <no-reply@sagekhan.dev>`;
  const entry = { receivedAt: new Date().toISOString(), name, email, subject, message };

  if (!smtpConfigured()) {
    logToFile(entry);
    console.log(`[contact-api] SMTP not configured — logged message from ${email} to ${LOG_FILE}`);
    return { mode: "logged" };
  }

  const transport = buildTransport();
  await transport.sendMail({
    to: toAddress,
    from: fromAddress,
    replyTo: email,
    subject: subject ? `[Portfolio Contact] ${subject}` : `[Portfolio Contact] New message from ${name}`,
    text: `${message}\n\n—\n${name} <${email}>`,
  });

  // Keep a durable record even when email delivery succeeds.
  logToFile({ ...entry, delivered: true });
  return { mode: "email" };
}

module.exports = { deliverMessage, smtpConfigured };
