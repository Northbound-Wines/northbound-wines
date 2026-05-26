# Northbound Editorial Companion

Private editorial workbench for regions, producers, grapes, and wines.

## Setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Copy `.env.example` to `.env.local` and fill in your Sanity project ID:

   ```bash
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
   NEXT_PUBLIC_SANITY_DATASET=production
   NEXT_PUBLIC_SANITY_API_VERSION=2026-05-26
   ```

3. Start the app:

   ```bash
   npm run dev
   ```

The app uses sample editorial data until a Sanity project ID is configured.

If the browser shows unstyled HTML during local development, stop the dev server and run:

```bash
npm run clean
npm run dev
```

Avoid running `npm run build` while `npm run dev` is still running, because both commands write to
Next.js' `.next` directory.

## Sanity Rule

Only store editorial-safe content in Sanity while using the free public dataset. Anything in Sanity should be content that could become public without harming the business.

## Render Deployment

The root `render.yaml` deploys this directory as a free Render Node web service.

Render uses:

```bash
npm ci && npm run build
npm run start -- -p $PORT
```

After deployment, add the Render URL to Sanity CORS origins with credentials enabled, otherwise
Studio writes can fail in the browser.

The intended public review URL is:

```text
https://companion.northboundwines.com
```
