# Aditya Prakash Joshi Portfolio

A clean, modern personal portfolio website for Aditya Prakash Joshi, focused on
Test Management, Quality Engineering Leadership, Operational Readiness, and
enterprise technology delivery.

## Sections

- Home
- About
- Projects
- Skills
- Contact

## Project Structure

```text
adityapjoshi.github.io/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── script.js
├── assets/
│   ├── images/
│   └── resume/
└── README.md
```

## Files

- `index.html` contains the page content and structure.
- `css/styles.css` controls the visual design, layout, colors, and responsive behavior.
- `js/script.js` controls the mobile navigation menu.
- `assets/images/` can store profile photos and project images.
- `assets/resume/` can store a resume PDF if added later.

## Preview Locally

From the project folder, run:

```bash
python -m http.server 8000
```

Then open:

```text
http://127.0.0.1:8000/
```

## GitHub Pages Deployment

1. Push this project to the `adityapjoshi.github.io` GitHub repository.
2. Open the repository on GitHub.
3. Go to `Settings`.
4. Go to `Pages`.
5. Under `Build and deployment`, choose:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/root`
6. Save the settings.
7. GitHub Pages will publish the site at:

```text
https://adityapjoshi.github.io/
```
