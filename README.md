# minamicode.com

My personal website built with Next.js, TypeScript, and Tailwind CSS.

## Tech Stack

- [Next.js](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [IBM Plex Mono](https://www.ibm.com/plex/) - Typography
- [Lucide React](https://lucide.dev/) - Icons

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load IBM Plex Mono, a custom monospace font.

## Project Structure

```
app/
├── _components/           # Reusable components
│   ├── JournalEntries.tsx # Journal entries component
│   ├── MemoryGame.tsx     # Memory card game component
│   └── Message.tsx        # Random ASCII art message component
├── journal/              # Journal page
│   └── page.tsx          # Journal page component
├── game/                 # Game page
│   └── page.tsx          # Game page component
├── globals.css          # Global styles
├── layout.tsx           # Root layout
└── page.tsx            # Home page
```

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## License

MIT License - feel free to use this code as inspiration for your own personal website!
