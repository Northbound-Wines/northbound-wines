# Northbound Wines

A simple static landing page for Northbound Wines, ready for GitHub and Netlify.

## Files

- `index.html` contains the page markup and copy.
- `styles.css` contains the responsive styling.
- `assets/` contains the vineyard photography used on the page.
- `companion/` contains the Next.js + Sanity editorial companion workbench.

## Editorial Companion

The companion app is separate from the interim static site. It starts with sample content until
Sanity project variables are configured in `companion/.env.local`.

```bash
cd companion
npm install
npm run dev
```

Open `http://localhost:3000` for the workbench and `http://localhost:3000/studio` for Sanity Studio.

## Deploy Companion On Render

This repo includes a Render Blueprint at `render.yaml`. It deploys only the `companion/` app as a
free Node web service in Frankfurt.

1. Push the repo to GitHub.
2. In Render, choose **New > Blueprint**.
3. Select this repo and apply the Blueprint.
4. Render will attach the custom domain `companion.northboundwines.com`.
5. In your DNS provider, add the records Render shows for `companion.northboundwines.com`.
6. In Sanity, add these as allowed CORS origins with credentials enabled:
   - `https://companion.northboundwines.com`
   - the assigned `https://...onrender.com` URL, if you want to use it directly for testing

The companion app is a Next.js web service, not a static site, because it serves Sanity Studio and
dynamic content routes.

## Deploy On Netlify

1. Push this folder to a GitHub repository.
2. In Netlify, choose **Add new site** and **Import an existing project**.
3. Connect the GitHub repository.
4. Use these build settings:
   - Build command: leave empty
   - Publish directory: `.`
5. Deploy.

## Updating Contact Details

The current contact address is `hello@northboundwines.com`. Update the `mailto:` link and visible email text in `index.html` if that changes.
