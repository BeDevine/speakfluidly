# Speak Fluidly

Affordable one-to-one English fluency coaching. Same technical foundation as
TRIELTS (auth, blog, contact form) but a separate site, database, and brand.

## Run it locally

```bash
npm install
cp .env.example .env
```

Fill in `.env` with:
- `SESSION_SECRET` — generate with `openssl rand -hex 32`
- `POSTGRES_PRISMA_URL` / `POSTGRES_URL_NON_POOLING` — from your Supabase project's Connect > Prisma tab
- `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL` — from resend.com

Then:

```bash
npm run db:push
npm run db:seed
npm run dev
```

Visit `http://localhost:3000`, log in at `/login` with the account you just created.
