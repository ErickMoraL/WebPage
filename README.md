# Erick Morales — Portfolio

Static personal site to showcase my backend work (Laravel/Python), projects, and contact info. It’s a single-page app built with plain HTML, CSS, and a small bit of JavaScript for smooth scrolling and localization.

## Features
- Responsive layout with cards for hero, experience, skills, and selected work.
- Two languages (EN/ES) with a toggle that persists to `localStorage`.
- Smooth scrolling nav with active section highlighting.
- Direct links to project repositories and contact methods.

## Tech Stack
- HTML, vanilla JS, and custom CSS (no build tools or dependencies).
- Google Fonts: Space Grotesk.

## Getting Started
1) Clone or download the repo.  
2) Open `index.html` in your browser (double-click or serve with any static server, e.g. `npx serve .`).  
3) Use the language toggle (EN | ES) in the navbar to switch translations.

## Structure
- `index.html` — main page markup and data attributes for i18n keys.
- `styles.css` — theme, layout, responsive tweaks, and component styles.
- `translations-en.js` / `translations-es.js` — translation dictionaries exposed globally.
- `script.js` — language toggle, smooth scroll, and section observer.
- `Pictures/` — assets (profile image).

## Customization
- Update copy via the translation files and matching `data-i18n` keys in `index.html`.
- Replace project links inside the “Selected Work” section (`index.html`).
- Adjust colors or spacing in `styles.css` (CSS variables at the top).

## Contact
Email: erickmora0503@gmail.com  
LinkedIn: https://www.linkedin.com/in/erick-morales-ml
