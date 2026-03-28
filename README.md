# AI Automation Portfolio

Professional portfolio website showcasing AI automation services and projects. Built with Next.js 15 and deployed on Cloudflare Pages.

**Live:** [https://tuth.site](https://tuth.site)

## Tech Stack

- Next.js 15 (App Router, static export)
- React 19, TypeScript
- Tailwind CSS v4
- Cloudflare Pages

## Pages

- **Home** — Hero, services, stats, how it works
- **Portfolio** — 4 project showcases with metrics
- **Contact** — Contact form and booking CTA

## Development

```bash
npm install
npm run dev     # http://localhost:3000
```

## Deploy

```bash
npm run build                                          # builds to out/
wrangler pages deploy out --project-name portfolio-site # deploy to Cloudflare
```

## License

MIT
