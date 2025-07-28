# Dev Showcase

A modern web app for discovering, sharing, and exploring side projects built by developers. Browse a gallery of projects, view rich details, and get inspired!

## Features

- 🏷️ **Project Gallery:** Search, filter, and sort a collection of developer side projects.
- 📄 **Project Details:** Each project has a dedicated page with:
  - Rich formatted descriptions (powered by Tiptap)
  - Video demos and image galleries
  - Tech stack, ratings, and categories
- 🔍 **Search & Sort:** Find projects by keyword, category, or sort by newest/rating.
- 💻 **Modern UI:** Responsive, accessible, and visually appealing interface using Tailwind CSS and custom UI components.
- ❌ **Custom 404 Page:** Friendly error page for missing routes.

## Tech Stack

- [Next.js 15](https://nextjs.org/) (App Router, React 19)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Tiptap Editor](https://tiptap.dev/product/editor) (for rich text content)
- [Lucide React](https://lucide.dev/)
- Custom UI components (Card, Badge, Button, Input, Select)
- Project data from local JSON

## Getting Started

1. **Install dependencies:**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

2. **Run the development server:**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

3. **Open your browser:**

   Visit [http://localhost:3000](http://localhost:3000) to view the app.

## Project Structure

- `src/app/` — Main app pages and layout
- `src/components/` — UI and feature components
- `src/data/projects.json` — Project data source
- `src/assets/` — Static assets and images

## External Libraries

- [Tiptap Editor](https://tiptap.dev/product/editor) — Rich text editor for project details

## License

This project is for learning and demonstration purposes.