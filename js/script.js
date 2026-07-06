const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
const downloadWordButton = document.querySelector("#download-word");
const themeToggle = document.querySelector("#theme-toggle");
const themeStorageKey = "portfolio-theme";

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");

    navToggle.classList.toggle("is-open", isOpen);
    navToggle.setAttribute("aria-expanded", String(isOpen));
    navToggle.setAttribute(
      "aria-label",
      isOpen ? "Close navigation menu" : "Open navigation menu"
    );
  });

  navLinks.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      navLinks.classList.remove("is-open");
      navToggle.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
      navToggle.setAttribute("aria-label", "Open navigation menu");
    }
  });
}

const createWordDocument = () => {
  const content = document.querySelector("main")?.cloneNode(true);

  if (!content) {
    return;
  }

  content.querySelectorAll("i").forEach((icon) => icon.remove());

  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>Aditya Prakash Joshi Portfolio</title>
      <style>
        body {
          color: #17201d;
          font-family: Arial, sans-serif;
          line-height: 1.5;
        }

        h1 {
          color: #0d4f45;
          font-size: 32px;
          line-height: 1.05;
          margin-bottom: 12px;
        }

        h2 {
          border-bottom: 1px solid #cdd7d1;
          color: #0d4f45;
          font-size: 22px;
          padding-bottom: 8px;
        }

        h3 {
          color: #17201d;
          font-size: 16px;
        }

        a {
          color: #0d4f45;
          text-decoration: underline;
        }

        .section {
          margin-bottom: 28px;
        }

        .section-label,
        .eyebrow,
        .project-type {
          color: #146c5f;
          font-size: 11px;
          font-weight: bold;
          text-transform: uppercase;
        }

        .hero-actions,
        .proof-points,
        .project-tags,
        .skill-list,
        .contact-links {
          list-style: none;
          padding-left: 0;
        }

        .highlight-box,
        .project-card {
          border: 1px solid #cdd7d1;
          margin: 12px 0;
          padding: 14px;
        }

        .project-tags li,
        .skill-list li,
        .contact-links li {
          display: inline-block;
          margin: 3px 8px 3px 0;
        }
      </style>
    </head>
    <body>
      <h1>Aditya Prakash Joshi</h1>
      <p><strong>Quality Engineering, Test Management, and Delivery Assurance</strong></p>
      ${content.innerHTML}
    </body>
    </html>
  `;

  const blob = new Blob(["\ufeff", html], { type: "application/msword" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");

  link.href = url;
  link.download = "Aditya-Prakash-Joshi-Portfolio.doc";
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
};

if (downloadWordButton) {
  downloadWordButton.addEventListener("click", () => {
    createWordDocument();
  });
}

const setTheme = (theme) => {
  const isDark = theme === "dark";

  document.documentElement.setAttribute("data-theme", isDark ? "dark" : "light");

  if (themeToggle) {
    const icon = themeToggle.querySelector("i");
    const label = themeToggle.querySelector("span");

    themeToggle.setAttribute(
      "aria-label",
      isDark ? "Switch to light mode" : "Switch to dark mode"
    );

    if (icon) {
      icon.className = isDark ? "fa-solid fa-sun" : "fa-solid fa-moon";
    }

    if (label) {
      label.textContent = isDark ? "Light Mode" : "Dark Mode";
    }
  }
};

const savedTheme = localStorage.getItem(themeStorageKey) || "light";
setTheme(savedTheme);

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const selectedTheme = currentTheme === "dark" ? "light" : "dark";

    localStorage.setItem(themeStorageKey, selectedTheme);
    setTheme(selectedTheme);
  });
}
