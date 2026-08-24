# Farhan Ali | Academic & Clinical Portfolio

[![Live Website](https://img.shields.io/badge/Live-Website-blue?style=for-the-badge&logo=github)](https://farhanali-researcher.github.io/)
[![View Portfolio](https://img.shields.io/badge/View-Portfolio-007acc?style=for-the-badge)](https://farhanali-researcher.github.io/)

A dynamic digital portfolio and credential library for Farhan Ali, a Medical Laboratory Technologist specializing in the intersection of clinical pathology, molecular diagnostics, and computational biology.

This repository hosts the source code and decentralized data layer for the portfolio, designed to showcase research projects, clinical deployments, and professional certifications for prospective international Master's and MPhil programs.

---

## 🧬 Core Focus Areas

* **Clinical Diagnostics:** Wet lab protocols, molecular diagnostics (PCR), and transfusion medicine.
* **Computational Biology:** Genomic sequence analysis, multi-omics, and bioinformatics workflows.
* **Data Science in Healthcare:** Applying Python, R, and statistical modeling (SPSS) to clinical datasets.

---

## 🧩 System Architecture

This platform was engineered using a strictly decoupled, front-end-only architecture designed for maximum performance, security, and maintainability without relying on heavy frameworks.

* **Presentation Layer (UI/UX):** Vanilla HTML5 and CSS3, styled for modern academic prestige (clean, rigorous, and highly legible).
* **Logic Layer:** Vanilla JavaScript (`js/app.js`) handles DOM manipulation, event listening, and asynchronous data fetching.
* **Data Layer (Decoupled JSON):** All dynamic content (projects, publications, certifications, and credentials) acts as a local data layer managed independently via JSON files in the `data/` directory.

---

## 📁 Repository Structure

```text
├── assets/         # Images, icons, and certification scans
├── css/            # Stylesheets (style.css)
├── data/           # Structured JSON data files
├── js/             # Interactive scripts (app.js)
├── index.html      # Main entry point
└── README.md       # Project documentation
