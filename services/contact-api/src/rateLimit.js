// Minimal in-memory sliding-window rate limiter — no external store needed
// for a single-replica contact endpoint. Resets on container restart, which
// is an acceptable tradeoff for a low-volume portfolio contact form.
const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 5;

const hits = new Map();

function rateLimit(req, res, next) {
  const ip = req.ip || req.socket.remoteAddress || "unknown";
  const now = Date.now();
  const timestamps = (hits.get(ip) || []).filter((t) => now - t < WINDOW_MS);

  if (timestamps.length >= MAX_REQUESTS) {
    return res.status(429).json({ ok: false, error: "Too many messages sent. Please try again later." });
  }

  timestamps.push(now);
  hits.set(ip, timestamps);
  next();
}

module.exports = { rateLimit };
