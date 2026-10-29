# Bible History Map

Static site (HTML + CSS + vanilla JS). No build step.

## Run locally
Open `index.html` in a browser, or run `python -m http.server 8000` in this folder.

## Structure
- `index.html` map page; `characters.html`, `timeline.html` placeholders
- `js/regions.js` region data (summaries, details, passages, SVG paths) - edit here
- `js/app.js` map interaction (hover, click, pan, zoom, theme)
- `css/styles.css` styling

## Known limits
- Region shapes are hand-drawn illustrations, not surveyed boundaries. Next step: real GeoJSON (e.g. OpenBible Bible-Geocoding-Data, CC BY).
- Scholarly citations are TODO placeholders.
