# Credits Game — Play-Money Starter (Next.js 14 + Tailwind + Supabase + Prisma)

This is a **starter** for a credits-based, head‑to‑head card game app.
It ships with:
- Next.js App Router + TypeScript + Tailwind
- Supabase auth (magic link) placeholders
- Prisma schema for a **double-entry ledger** (credits) and **match escrow**
- Pages: Home, Login, Dashboard, Matches, Match Detail, Admin
- Server Actions stubs for crediting users and creating/settling matches
- Feature flags for disabling real-money deposits

> ⚠️ Deposits are **disabled** by default. Turn on only after compliance approvals.

## Quickstart

1) **Install prerequisites**
   - Node LTS, pnpm, Git

2) **Create Supabase project** (https://supabase.com/)
   - Copy the `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY` and `SUPABASE_SERVICE_ROLE_KEY`.

3) **Set env vars**
   - Copy `.env.example` → `.env.local` and fill values.
   - For local Postgres, you can use Supabase Postgres `DATABASE_URL` directly.

4) **Install & run**
```bash
pnpm install
pnpm dlx prisma generate
pnpm dlx prisma migrate dev --name init
pnpm dev
```

5) **Deploy to Vercel**
   - Push to GitHub, import in Vercel, add env vars, and deploy.

## Notes
- Auth is set up with client-side Supabase helpers for magic link login.
- Ledger uses double-entry via `journal_entries` and `journal_lines`. All balance changes must be recorded through balanced entries.
- Real-time gameplay is stubbed; connect Ably/Pusher later.
- Replace stubs in `app/(protected)/*/actions.ts` with your logic as you go.

