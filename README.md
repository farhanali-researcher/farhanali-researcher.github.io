# Farhan Ali - Professional Academic Portfolio

Welcome to the repository for my professional academic and clinical portfolio. I am a Medical Laboratory Technologist specializing in clinical pathology, molecular diagnostics, and the integration of computational biology (genomics and bioinformatics) into modern healthcare.

🌐 **Live Website:** [farhanali-researcher.github.io](https://farhanali-researcher.github.io)

---

## 🏗️ Website Architecture

This portfolio is built with a strictly decoupled, frontend-only architecture designed for maximum speed, security, and ease of maintenance:
* **UI/UX Layer:** Vanilla HTML5, CSS3, and JavaScript. Zero framework bloat.
* **Data Layer:** JSON-driven components. All dynamic content (projects, publications, and credentials) is managed entirely via `.json` files.

---

## 📁 Repository Structure

```text
├── index.html                  # Main layout and semantic structure
├── css/
│   └── style.css               # Premium typography, layout, and theme
├── js/
│   └── app.js                  # Fetches data and handles interactive modal logic
├── data/
│   ├── certificates.json       # Database for the Credential Library
│   ├── projects.json           # Database for Research & Projects
│   └── publications.json       # Database for Publications & Manuscripts
└── assets/
    ├── documents/              # Contains the master CV PDF
    └── certificates/           # Categorized folders for credential PDFs
