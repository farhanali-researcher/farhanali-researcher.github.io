# Farhan Ali | Academic & Clinical Portfolio

[![Live Website](https://img.shields.io/badge/Live_Website-View_Portfolio-0ea5e9?style=for-the-badge&logo=github)](https://farhanali-researcher.github.io)

A dynamic digital portfolio and credential library for **Farhan Ali**, a Medical Laboratory Technologist specializing in the intersection of clinical pathology, molecular diagnostics, and computational biology. 

This repository hosts the source code and decentralized data layer for the portfolio, designed to showcase research projects, clinical deployments, and professional certifications for prospective international Master's and MPhil programs.

---

## 🧬 Core Focus Areas
* **Clinical Diagnostics:** Wet lab protocols, molecular diagnostics (PCR), and transfusion medicine.
* **Computational Biology:** Genomic sequence analysis, multi-omics, and bioinformatics workflows.
* **Data Science in Healthcare:** Applying Python, R, and statistical modeling (SPSS) to clinical datasets.

---

## 🏗️ System Architecture 

This platform was engineered using a strictly **decoupled, frontend-only architecture**. It is designed for maximum performance, security, and maintainability without relying on heavy frameworks.

* **Presentation Layer (UI/UX):** Vanilla HTML5 and CSS3, styled for modern academic prestige (clean, rigorous, and highly legible).
* **Logic Layer:** Vanilla JavaScript (`app.js`) handles DOM manipulation, event listening, and asynchronous data fetching.
* **Data Layer (Decoupled JSON):** All dynamic content (projects, publications, and credentials) acts as a local database managed entirely via independent `.json` files.

---

## 📁 Repository Structure

```text
├── index.html                  # Semantic UI skeleton
├── css/
│   └── style.css               # Academic prestige styling (Light Theme)
├── js/
│   └── app.js                  # Asynchronous data fetching and modal logic
├── data/
│   ├── certificates.json       # Master database of 25+ credentials & memberships
│   ├── projects.json           # Computational and clinical project database
│   └── publications.json       # Academic manuscript and publication tracking
└── assets/
    ├── documents/              # Contains the master CV PDF
    ├── images/                 # Profile and UI assets
    └── certificates/           # Categorized credential PDFs (Bioinformatics, Lab, etc.)
