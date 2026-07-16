# Dan Sage Khan — Personal Dossier

A personal portfolio site for Dan Sage Khan (Muhammad Danyal "Sage" Khan) — Marie Skłodowska-Curie PhD
Scholar, AI & Cybersecurity researcher, ex-Naval Officer, published author, and founder of Veritas AI DB.

Built with Next.js 16 (App Router), TypeScript, and Tailwind CSS v4. The visual language is a
"ship's-log / field-dossier" aesthetic in the teal/mint palette of the Sage Force emblem — tables are
styled as manifests/ledgers rather than crowding everything onto one page.

## Structure

- `/` — Home
- `/about` — Bio, languages, full skills manifest, Sage Force
- `/service-record` — Employment, freelance work, teaching, education, certifications, awards
- `/projects` — Veritas AI DB, CogTwins, CodeGuardian, Ascon, and other engineering work
- `/books` — Published books, novels in progress, forthcoming titles
- `/blog` — 60+ articles (mostly on Medium), searchable/filterable by tag
- `/publications` — Research papers, thesis, TV/podcast media appearances
- `/services` — What can be hired/commissioned
- `/contact` — Contact form (POSTs to the `contact-api` microservice; falls back to `mailto:` if it's
  unreachable) + direct links

All content lives as structured data in `src/data/*.ts` — edit those files to update copy, add a new
blog post, project, or service without touching any page markup.

## Architecture

The stack is split into three containers, each with a distinct responsibility — the frontend is pure
presentation, the one genuine backend concern (owning and delivering contact-form submissions, with its
own SMTP secrets) is isolated in its own service, and a gateway is the single point where routing,
domain, and TLS get decided:

```
                 ┌────────────────────────┐
   visitor ───▶  │   gateway (Nginx)      │  :8080 (host) → :80
                 │   single entry point   │
                 └───────────┬────────────┘
                     /api/*  │  everything else
                 ┌───────────┴────────────┐
                 ▼                        ▼
       ┌───────────────────┐   ┌───────────────────────┐
       │  contact-api       │   │  web (Next.js)         │
       │  Express service   │   │  standalone build      │
       │  :4000              │   │  :3000                 │
       │  → SMTP or          │   └───────────────────────┘
       │    /data/messages   │
       │    .log (volume)    │
       └───────────────────┘
```

- **`web`** — the Next.js app (`Dockerfile` at repo root), built with `output: "standalone"` for a
  minimal production image. Exposes `GET /api/health` for its container healthcheck.
- **`contact-api`** (`services/contact-api/`) — a small standalone Express service that owns contact-form
  delivery: `POST /contact` validates the payload, rate-limits by IP, and either emails the message via
  SMTP or appends it to a Docker volume (`contact-data`) as `messages.log` when no SMTP credentials are
  configured — so the whole stack works end-to-end with zero secrets. `GET /healthz` for its healthcheck.
- **`gateway`** (`gateway/nginx.conf`) — Nginx routes `/api/*` to `contact-api` and everything else to
  `web`. It's the only container that publishes a host port, and the place a real domain + TLS certs get
  attached later (see below).

`ContactForm.tsx` POSTs to the same-origin `/api/contact` path, so it never needs to know the
`contact-api` container's address directly — the gateway resolves it.

## Running locally with Docker (full microservices stack)

```bash
cp .env.example .env   # optional — works with defaults, see below
docker compose up --build
```

Open [http://localhost:8080](http://localhost:8080). Change the published port via `GATEWAY_PORT` in
`.env`.

With no SMTP settings in `.env`, contact-form submissions are written to the `contact-data` volume
instead of emailed — inspect them with:

```bash
docker compose exec contact-api cat /data/messages.log
```

To actually send email, fill in `SMTP_HOST` / `SMTP_USER` / `SMTP_PASS` / etc. in `.env` (see the
comments in `.env.example` for a Gmail App Password example) and restart `contact-api`:

```bash
docker compose up -d --build contact-api
```

Tear down with `docker compose down` (add `-v` to also drop the `contact-data` volume).

## Running locally without Docker (frontend only)

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The contact form will try `/api/contact`, fail
(nothing's listening), and transparently fall back to opening a pre-filled `mailto:` link — so the site
is still fully usable without the microservices stack running. To exercise the real API from `next dev`,
run `contact-api` on its own (`cd services/contact-api && npm install && npm run dev`) and set
`CONTACT_API_URL=http://localhost:4000` before starting `next dev` — a rewrite in `next.config.ts` picks
it up automatically.

## Production build (single container, no Docker)

```bash
npm run build
npm start
```

## Pointing a custom domain at this site later

1. **Keep the Docker Compose architecture, add TLS at the gateway** — point your domain's A record at
   the server running `docker compose up`, then either:
   - Swap the `gateway` service's image for `nginx` + certbot (or a `jwilder/nginx-proxy` /
     `caddy` setup) to terminate HTTPS before proxying to `web`/`contact-api`, or
   - Put the whole stack behind Cloudflare (proxied DNS) for free TLS termination.
2. **Vercel (simplest for just the frontend)** — push to GitHub, import at
   [vercel.com/new](https://vercel.com/new), point DNS at Vercel. You'd then run `contact-api` separately
   (any small VPS or container host) and set `CONTACT_API_URL`/rewrite the `/api/contact` path to it, or
   swap it for a Vercel serverless function.
3. **Your own server, no Docker** — `npm run build && npm start` behind Caddy/Nginx, which will also
   handle HTTPS automatically for a real domain.

## Updating content

- New blog post → add an entry to `src/data/blogs.ts`
- New project → add an entry to `src/data/projects.ts`
- Résumé changes (roles, education, certifications, awards) → `src/data/experience.ts`,
  `src/data/education.ts`, `src/data/certifications.ts`, `src/data/awards.ts`
- Update the logo → replace `public/images/logo.png` (also used as the favicon via `src/app/icon.png`)
- Update the résumé PDF linked from the homepage → replace `public/resume.pdf`
- Contact form delivery behavior → `services/contact-api/src/mailer.js`
