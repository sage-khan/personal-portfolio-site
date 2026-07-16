const express = require("express");
const cors = require("cors");
const { deliverMessage, smtpConfigured } = require("./mailer");
const { rateLimit } = require("./rateLimit");

const app = express();
const PORT = process.env.PORT || 4000;
const ALLOWED_ORIGIN = process.env.ALLOWED_ORIGIN || "*";

app.disable("x-powered-by");
app.set("trust proxy", true); // gateway sits in front, needed for accurate req.ip
app.use(express.json({ limit: "20kb" }));
app.use(cors({ origin: ALLOWED_ORIGIN }));

app.get("/healthz", (req, res) => {
  res.json({ status: "ok", service: "contact-api", smtpConfigured: smtpConfigured() });
});

app.post("/contact", rateLimit, async (req, res) => {
  const { name, email, subject, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ ok: false, error: "name, email, and message are required." });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ ok: false, error: "Please provide a valid email address." });
  }
  if (String(message).length > 5000) {
    return res.status(400).json({ ok: false, error: "Message is too long." });
  }

  try {
    const result = await deliverMessage({
      name: String(name).slice(0, 200),
      email: String(email).slice(0, 200),
      subject: subject ? String(subject).slice(0, 200) : "",
      message: String(message).slice(0, 5000),
    });
    res.json({ ok: true, mode: result.mode });
  } catch (err) {
    console.error("[contact-api] Failed to deliver message:", err);
    res.status(502).json({ ok: false, error: "Could not send your message right now. Please try again shortly." });
  }
});

app.use((req, res) => {
  res.status(404).json({ ok: false, error: "Not found" });
});

app.listen(PORT, () => {
  console.log(`[contact-api] listening on :${PORT} (SMTP configured: ${smtpConfigured()})`);
});
