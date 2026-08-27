# Farhan Ali | Elite Research Portfolio & Digital CV

[![Live Website](https://img.shields.io/badge/Live-Website-blue?style=for-the-badge&logo=github)](https://farhanali-researcher.github.io/)
[![View Portfolio](https://img.shields.io/badge/View-Portfolio-007acc?style=for-the-badge)](https://farhanali-researcher.github.io/)

A dynamic, high-performance digital portfolio engineered to showcase the intersection of **clinical pathology, molecular diagnostics, and computational biology**. 

This repository hosts the source code and decentralized data layer for the portfolio of Farhan Ali, a Medical Laboratory Technologist dedicated to advancing precision medicine and translational hematology. The platform is specifically designed to transparently document clinical deployments, computational bioinformatics projects, and a comprehensive credential library for prospective international Master's and MPhil research programs.

---

## 🧬 Core Competencies & Research Focus

* **Translational Hematology:** Investigating chronic hemoglobinopathies (e.g., transfusion-dependent beta-thalassemia) through rigorous clinical data collection and biostatistical analysis.
* **Computational Biology & Multi-Omics:** Developing automated Python and R pipelines for genomic variant annotation, sequence manipulation, and laboratory workflow simulation.
* **Clinical Diagnostics:** Independent execution of high-complexity wet lab assays, utilizing automated chemistry analyzers (URIT-810), molecular diagnostics (PCR), and stringent quality control protocols.

---

## 💻 Computational Portfolio Highlights

This repository acts as a gateway to my computational work, including:
1. **Clinical NGS Variant Annotator:** A Python/Ensembl API pipeline to filter benign SNPs and map disease-causing variants.
2. **Genomic Sequence Analysis Pipeline:** Biopython and BLAST integration for precise gene-finding and R (ggplot2) visualization.
3. **COVID-19 Laboratory Workflow Simulation:** A discrete-event simulation model built with R and the `simmer` package to optimize testing turn-around times.
4. **DNA/RNA Sequence Processing:** Automated processing scripts utilizing R and the `Biostrings` package for downstream transcriptomic analysis.

---

## 🧩 System Architecture & Tech Stack

This platform is built on a strictly decoupled, front-end-only architecture, ensuring maximum performance, rapid load times, and seamless maintainability without the overhead of heavy JavaScript frameworks.

* **Presentation Layer:** Vanilla HTML5 and modern CSS3, utilizing a dark-mode "glassmorphism" aesthetic tailored for academic and scientific prestige.
* **Logic Layer:** Vanilla JavaScript (`js/app.js`) handles dynamic DOM manipulation, modal rendering, and asynchronous data fetching.
* **Data Layer:** All professional credentials, memberships, publications, and projects are managed independently via structured JSON files in the `data/` directory, acting as a lightweight, decentralized database.

---

## **Connect & Collaborate**
Actively seeking Master's and MPhil research opportunities where clinical pathology and bioinformatics meet.

Email: farhanali.mlt010@gmail.com

LinkedIn: linkedin.com/in/farhanali010

Live Site: farhanali-researcher.github.io

---

## 📁 Repository Structure

```text
├── assets/
│   ├── certificates/      # Categorized PDF credentials (Bioinformatics, Genomics, etc.)
│   ├── documents/         # Downloadable CV
│   └── images/            # Profile and UI assets
├── css/
│   └── style.css          # Core stylesheet (Custom properties, grid layouts)
├── data/
│   ├── certificates.json  # Credential library data layer
│   ├── projects.json      # Computational portfolio data layer
│   └── publications.json  # Academic research data layer
├── js/
│   └── app.js             # Data fetching and UI interaction logic
├── index.html             # Main application entry point
└── README.md              # Project documentation
