# Bible History Map

Static site (HTML + CSS + vanilla JS). No build step.

## Run locally
Open `index.html` in a browser, or run `python -m http.server 8000` in this folder.

## Deploy on GitHub Pages
1. Create a repo (e.g. `bible-history-map`) on GitHub.
2. Push this folder's contents:
   git init && git add . && git commit -m "Initial map page"
   git branch -M main
   git remote add origin https://github.com/YOUR_USER/bible-history-map.git
   git push -u origin main
3. Repo Settings > Pages > Source: "Deploy from a branch", branch `main`, folder `/ (root)`.
4. The site appears at https://YOUR_USER.github.io/bible-history-map/

## Structure
- `index.html` map page; `characters.html`, `timeline.html` placeholders
- `js/regions.js` region data (summaries, details, passages, SVG paths) - edit here
- `js/app.js` map interaction (hover, click, pan, zoom, theme)
- `css/styles.css` styling

## Known limits
- Region shapes are hand-drawn illustrations, not surveyed boundaries. Next step: real GeoJSON (e.g. OpenBible Bible-Geocoding-Data, CC BY).
- Scholarly citations are TODO placeholders.
