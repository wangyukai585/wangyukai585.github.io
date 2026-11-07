# Yukai Wang · Academic Homepage

An academic website using the Jon Barron template hosted on [GitHub Pages](https://wangyukai585.github.io/).

## Editing

- `index.html`: biography, publications, research experience, education, awards, and links.
- `assets/style.css`: desktop, mobile, and print layouts.
- `assets/images/portrait.jpg`: portrait; replace this file to update the photo.
- `assets/documents/Yukai_Wang_CV.pdf`: downloadable CV.
- `assets/SOURCES.md`: provenance for images and research information.

No framework, package installation, build step, or external font service is required. All essential content is available without JavaScript. The Page Views section uses the owner’s original MapMyVisitors counter; `assets/visitors.js` loads it only on the public GitHub Pages hostname, so local previews do not count as visits.

## Local preview

Run `python3 -m http.server 8000 --bind 127.0.0.1` from this directory, then open `http://127.0.0.1:8000`.

## Deployment

GitHub Pages serves the root of the `main` branch. Commit and push changes to publish. Keep `.nojekyll` in the repository.

## Content

Education, contributions, publication status, and dates follow the owner's November 2026 CV. Scholarship amounts and the 2024 Class B award follow the owner's corrections. Public paper pages supply figures and resource links. The personal statement is not included in this repository.

Template: [Jon Barron](https://jonbarron.info/), whose repository allows cloning for personal use. The Lato fonts are hosted locally under the SIL Open Font License; see `assets/fonts/OFL.txt`.
