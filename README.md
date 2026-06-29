# Personal CV Page

A personal CV / portfolio website for **Felföldi Szabolcs** (fullstack developer), built as a single-page app with an AI chat assistant that answers visitors' questions about him.

The site is a server-driven SPA: Laravel renders pages through Inertia, React handles the client, and Tailwind handles styling. A public chat widget streams answers from an "About Me" AI agent so recruiters can ask questions in natural language.

## Features

- **Single-page CV** rendered via Inertia + React (no separate API layer).
- **AI chat assistant** — a Gemini-backed agent (`laravel/ai`) answers questions about Szabolcs, grounded only in a curated knowledge file. Replies stream token-by-token and match the visitor's language (defaults to Hungarian).
- **Abuse protection** — per-client request throttling plus a global daily message cap. Conversations are never stored server-side; messages live only in the client.
- **SEO ready** — structured data, server-side rendering (SSR), `sitemap.xml`, and `robots.txt`.
- **Privacy page** for data/usage disclosure.

## Tech Stack

| Layer    | Tooling                                              |
| -------- | ---------------------------------------------------- |
| Backend  | PHP 8.3+, Laravel 13                                  |
| Frontend | React 19, Inertia.js v3, TypeScript, Tailwind CSS v4 |
| Build    | Vite 8, Laravel Wayfinder                            |
| AI       | `laravel/ai` (Google Gemini `gemini-2.5-flash`)      |
| Database | SQLite (default)                                     |
| Testing  | Pest 4, PHPUnit 12, Larastan, Pint, ESLint, Prettier |
| Local    | Laravel Herd                                         |

## Requirements

- PHP 8.3+
- Composer
- Node.js 20+ and npm
- A Google Gemini API key (for the chat assistant)

## Getting Started

```bash
# 1. Install dependencies, copy env, generate key, migrate, build assets
composer setup

# 2. Add your Gemini API key to .env
#    GEMINI_API_KEY=your-key-here

# 3. Start the dev environment (server + queue + Vite)
composer dev
```

`composer setup` runs `composer install`, copies `.env.example` to `.env`, generates an app key, runs migrations, and builds the frontend.

With **Laravel Herd**, the site is served automatically at `https://personal-page.test` — no need to run `php artisan serve`.

## Configuration

The AI assistant requires a provider API key in `.env`:

```env
GEMINI_API_KEY=
```

The agent's behavior and the facts it can use are defined in:

- `app/Ai/Agents/AboutMeAgent.php` — provider, model, system prompt, rules.
- `resources/ai/about-knowledge.md` — the knowledge base the agent answers from.

To change the answers, edit the knowledge file. To change the model or provider, edit the attributes on `AboutMeAgent`.

## Routes

| Method | Path           | Description                       |
| ------ | -------------- | --------------------------------- |
| GET    | `/`            | CV / home page                    |
| GET    | `/privacy`     | Privacy page                      |
| POST   | `/chat`        | Streams a chat reply (throttled)  |
| GET    | `/sitemap.xml` | XML sitemap                       |
| GET    | `/robots.txt`  | Robots file                       |

## Development

```bash
composer dev          # server + queue worker + Vite (concurrently)
npm run dev           # Vite dev server only
npm run build         # production assets
npm run build:ssr     # production assets + SSR bundle
```

## Testing & Quality

```bash
composer test         # config clear + lint + types + Pest suite
php artisan test      # run the test suite
vendor/bin/pint       # format PHP
npm run lint          # ESLint (with --fix)
npm run types:check   # TypeScript type check
composer ci:check     # full CI gate (lint, format, types, tests)
```

## Project Structure

```
app/
  Ai/Agents/AboutMeAgent.php   # AI chat agent definition
  Http/Controllers/            # Chat, Sitemap controllers
  Http/Requests/ChatRequest.php
resources/
  ai/about-knowledge.md        # knowledge base for the AI agent
  js/pages/                    # Inertia React pages (cv, privacy)
routes/web.php                 # route definitions
tests/                         # Pest feature & unit tests
```

## License

MIT.
