#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."
npm run build:pages
pages_stage=$(mktemp -d)
cp dist/client/index.html dist/client/index.rsc public/favicon.svg public/newton-notebook-engraving-v3.png "$pages_stage/"
cp -R dist/client/_next "$pages_stage/_next"
cp public/CNAME "$pages_stage/CNAME"
cp scripts/pages.nojekyll "$pages_stage/.nojekyll"
git -C "$pages_stage" init -b gh-pages
git -C "$pages_stage" add .
git -C "$pages_stage" -c user.name='Kevin Omwega' -c user.email='kevin6314@users.noreply.github.com' commit -m 'Publish Principia website'
# Preserve the remote branch history on subsequent releases.
if git -C "$pages_stage" -c credential.helper='!gh auth git-credential' fetch https://github.com/kevin6314/principia-superintelligence.git gh-pages; then
  pages_tree=$(git -C "$pages_stage" rev-parse HEAD^{tree})
  pages_commit=$(git -C "$pages_stage" -c user.name='Kevin Omwega' -c user.email='kevin6314@users.noreply.github.com' commit-tree "$pages_tree" -p FETCH_HEAD -m 'Publish Principia website')
  git -C "$pages_stage" update-ref refs/heads/gh-pages "$pages_commit"
fi
git -C "$pages_stage" -c credential.helper='!gh auth git-credential' push https://github.com/kevin6314/principia-superintelligence.git gh-pages
