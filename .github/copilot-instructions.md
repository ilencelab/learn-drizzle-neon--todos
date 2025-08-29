# Copilot Instructions for learn-drizzle-neon--todos

## Project Overview

- This is a Next.js (App Router) project using TypeScript, React, and Drizzle ORM for Neon/Postgres.

## Key Patterns & Conventions

- Use arrow function when defining functions
- Use functional React components and hooks
- Use TypeScript for all code, with interfaces for data and props.
- Styling is done with TailwindCSS (see `globals.css`).
- Use Drizzle ORM for all database access; schema is defined in `db/schema.ts`.
- Use Next.js server actions for mutations (see `actions/`).
- Auth logic is in `lib/auth.ts` and `actions/auth.ts`.

## Developer Workflows

- Use `pnpm` for dependency management (see `package.json`).
- To run the dev server: `pnpm dev`
- To run Drizzle migrations: `pnpm drizzle-kit push` (see Drizzle docs)
- Linting: `pnpm lint`

## Integration Points

- Database: Neon/Postgres via Drizzle ORM (`db/`, `drizzle/` migrations)
- Auth: Custom logic in `lib/auth.ts`, integrated with Next.js API routes

## Examples

- To add a new feature, create a folder under `app/dashboard/` and add a `page.tsx` for the route.
- To add a new DB table, update `db/schema.ts` and run Drizzle migration.
- To add a new server action, add a function in `actions/` and call it from a component.

## References

- See `README.md` for project-level info (currently empty).
