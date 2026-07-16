import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  async rewrites() {
    // Lets `npm run dev` talk to a contact-api running outside of the gateway
    // (e.g. `docker compose up contact-api`) without needing the Nginx gateway.
    // In production behind the gateway this rewrite is unused — the gateway
    // already routes /api/* to contact-api at the network edge.
    const contactApiUrl = process.env.CONTACT_API_URL;
    if (!contactApiUrl) return [];
    return [{ source: "/api/:path*", destination: `${contactApiUrl}/:path*` }];
  },
};

export default nextConfig;
