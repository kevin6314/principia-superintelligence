# Principia landing page

Public-facing company site, separate from the internal company workspace. Built with Vinext/React and the Sites starter. Uses the existing Principia prism artwork.

## Edit

- `app/page.tsx`: public copy and page structure.
- `app/globals.css`: shared theme, responsive layout and typography.
- `app/layout.tsx`: site metadata.
- `public/`: publishable assets only.
- `.openai/hosting.json`: stable Sites project identity. Reuse it on updates.

Install with `npm ci`, preview with `npm run dev`, and build with `npm run build`. Keep the package lock. Use the Sites hosting workflow to publish the exact validated build. No browser testing was requested; the first release received a production build and successful route response check.

## Publication boundary

Only this directory belongs to the site repository. Never copy internal strategy, investor notes, transcripts, partner terms, credentials or private source documents into this tree. The first deployment is owner-only. A public release or custom-domain change needs an explicit publishing instruction.

Public copy describes an early product under development. It anonymizes application areas, does not claim measured performance and includes only Kevin and Nick. Links go to their supplied LinkedIn profiles. Add a dedicated inquiry destination when the founder provides one. No data-collection form or analytics is installed.

The prism is a conceptual brand illustration reused from `../assets/principia-cover.png`, not a photograph of scientific results. All other visible graphics are typography and layout. No generated social-preview image.
