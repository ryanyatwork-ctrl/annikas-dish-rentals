# Dishes by Annika

Public website for Dishes by Annika, a dish and tea set rental business serving Coeur d’Alene, Hayden, Post Falls, and Rathdrum.

## Tech stack

- Vite
- React
- Cloudflare Workers/Pages deployment
- Formspree rental request form
- Cloudflare Email Routing for `info@dishesbyannika.com`

## Local development

```powershell
cd D:\projects\dishes
npm install
npm run dev
```

Local site:

```text
http://localhost:5173/
```

## Production build

```powershell
npm run build
```

## Cloudflare build settings

```text
Framework preset: Vite
Build command: npm run build
Build output directory: dist
Production branch: main
Root directory: /
```

## Formspree

Rental requests post to:

```text
https://formspree.io/f/xnjwlnpg
```

Formspree form name:

```text
Dishes by Annika Rental Requests
```

## Email

Public contact address:

```text
info@dishesbyannika.com
```

This is routed through Cloudflare Email Routing to Gmail.

## Deployment

After making changes:

```powershell
npm run build
git add .
git commit -m "Update Dishes by Annika site"
git push origin main
```

Cloudflare redeploys from the `main` branch.
