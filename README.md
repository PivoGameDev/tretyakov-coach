# Next.js Application

## Prerequisites
- Node.js 18+ 
- npm or yarn
- Git

## Getting Started

```bash
# 1. Clone the repository
git clone <repo-url>
cd <repo-name>

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env
# Edit .env with your credentials

# 4. Set up the database
npx prisma generate
npx prisma db push

# 5. Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts
- `npm run dev` — start development server
- `npm run build` — build for production
- `npm run start` — start production server
- `npm run lint` — run ESLint
- `npm run typecheck` — run TypeScript check

## Database
This project uses SQLite with Prisma ORM.
- Schema: `prisma/schema.prisma`
- Studio: `npx prisma studio`

## Environment Variables
See `.env.example` for all required variables. Make sure to set:
- Database URL (SQLite by default)
- Any API keys for external services
- Authentication secrets

## Tech Stack
- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Database:** SQLite (via Prisma)
- **API:** tRPC
- **Styling:** Tailwind CSS
- **Auth:** (add if applicable)
