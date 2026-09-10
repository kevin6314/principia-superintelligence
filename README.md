# Principia Superintelligence

Public company website built with React, Vinext and Tailwind CSS.

Live: https://kevin6314.github.io/principia-superintelligence/

## Development

Use Node.js 22.13 or newer. Install with `npm ci`, then run `npm run dev`.

The static homepage uses a generated engraving with Newton-inspired working marks, not historical transcriptions. No analytics or contact-form backend is installed; inquiry links open an email client.

## GitHub Pages

Run `npm run build:pages` for the static export. Pages serves the compiled `gh-pages` branch. After signing in with GitHub CLI, publish with `bash scripts/deploy-pages.sh`. Commit and push source changes to `main` separately.

The script stages only the homepage, runtime assets, favicon and selected background, preserving deployment branch history. It does not upload the local design archive. The ordinary `npm run build` retains the existing Sites-compatible build.

## Publication boundary

Only this website directory belongs to the repository. Internal strategy, private documents, credentials and local design iterations must not be added. Prior visual explorations remain on the author's workstation and are excluded from Git and deployment.
