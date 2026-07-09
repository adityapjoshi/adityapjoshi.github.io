# My Personal Website

A clean, modern **Personal Portfolio** website built to showcase my journey
starting as a Developer with IBM GBS and Syntel, then moving into Testing with
Infosys Technologies and Westpac New Zealand.

It is focused on the skills I acquired over 18+ years of experience, including
delivering digital products as part of insurance solutions, testing enterprise
transformation programs in banking, and the core development and maintenance
work completed during my earlier career.

# Sections

* About Me
* Projects
* Skills
* Achievements
* Certifications
* Contact

## Features

- Responsive portfolio layout for desktop and mobile.
- Header button to download the portfolio as a Word document.
- Simple theme toggle for Light and Dark modes.
- Mobile navigation menu.
- Contact links with Font Awesome icons.

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

## Files in the Repository

- `index.html` contains the page content and structure.
- `css/styles.css` controls the visual design, layout, colors, responsive behavior, and theme styles.
- `js/script.js` controls the mobile navigation menu, Word document download, and Light/Dark theme toggle.
- `assets/images/` can store profile photos and project images.
- `assets/resume/` can store a resume or supporting document if added later.
- `README.md` explains this project on GitHub.

## Word Download

The `Download Word` button in the site header creates a Word-compatible `.doc`
file from the portfolio page content.

The generated document keeps relevant hyperlinks, including Contact links and
the Certifications link.

## Theme Toggle

The header includes a simple theme button that toggles between:

- `Light`: uses the light portfolio theme.
- `Dark`: uses the dark portfolio theme.

The selected theme is saved in the browser using `localStorage`, so the
preference remains when the visitor comes back.

## Preview Locally

From the project folder, run:

```bash
python -m http.server 8000
```

Then open:

```text
http://127.0.0.1:8000/
```

## How Do I Access This GitHub Pages Site?

You can find it here:

[https://adityapjoshi.github.io/](https://adityapjoshi.github.io/)

## How Did I Build This Website?

I used a mixture of OpenAI Codex - Codex Windows Destop App, Codex Integrated in IntelliJ, Codex CLI, Codex Cloud to generate the HTML, CSS, and JavaScript code for the website and heavily customized it to create a clean, modern personal
portfolio website to showcase my skills as a Sr. Test Manager and Product Owner.

Basic knowledge of how HTML, CSS, and JavaScript work is helpful for light troubleshooting and improvements. Feel free to fork it and make something ofyour own.
