<div align="center">

# Farhan Ali — Portfolio

### Medical Laboratory Technologist × Computational Biology

*Bridging the bench and the terminal — from confirmatory diagnostics to genomic variant annotation.*

[![Live Site](https://farhanali-researcher.github.io/)](#)
[![License](https://img.shields.io/badge/license-MIT-1F5C54?style=for-the-badge)](#license)
[![Made with](https://img.shields.io/badge/stack-HTML%20%7C%20CSS%20%7C%20JS-8B2635?style=for-the-badge)](#tech-stack)

</div>

<br>

<div align="center">
<em>A single-page research portfolio built for one audience: professors and PIs evaluating a
Master's / MPhil applicant in five minutes or less.</em>
</div>

<br>

---

## Overview

This repository holds the source for my personal academic portfolio — a fast, dependency-light
site that presents my clinical laboratory background, computational biology projects, and
credential history in a format built for scanning, not scrolling.

The site is a **strictly decoupled, vanilla JavaScript application**. Markup and styling are
static; all dynamic content (projects, certificates) is fetched at runtime from local JSON and
rendered by `app.js`. No frameworks, no build step, no dependencies to install.

## Features

| | |
|---|---|
| 🧬 **Dynamic project gallery** | Computational biology projects rendered from `data/projects.json` |
| 📜 **Filterable credential library** | Certifications and memberships tagged by category (Genomics, Bioinformatics, Laboratory, Professional, Memberships) and filtered client-side |
| 🩺 **Clinical experience log** | Hospital and diagnostic-center rotations, hardcoded for accuracy |
| 📄 **One-click CV download** | Direct link to an up-to-date PDF, no gated forms |
| 🖥️ **Zero-build architecture** | Pure HTML / CSS / JS — clone and open, no `npm install` required |
| ♿ **Accessible by default** | Semantic landmarks, visible focus states, skip link, `prefers-reduced-motion` support |
| 📱 **Fully responsive** | Fluid down to 360px, no horizontal scroll, no layout shift |

## Tech Stack

<div align="center">

![HTML5](https://img.shields.io/badge/HTML5-14213D?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1F5C54?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-8B2635?style=flat-square&logo=javascript&logoColor=white)
![JSON](https://img.shields.io/badge/JSON-45526B?style=flat-square&logo=json&logoColor=white)

</div>

- **Markup:** semantic HTML5, no template engine
- **Styling:** hand-authored CSS with a custom design-token system (`:root` variables), CSS Grid, no framework
- **Behavior:** vanilla JavaScript (`app.js`) — fetches local JSON, injects DOM, handles credential filtering and the certificate modal
- **Data:** flat JSON files under `/data` — no backend, no database
- **Typography:** [Lora](https://fonts.google.com/specimen/Lora) (display), [Inter](https://fonts.google.com/specimen/Inter) (body), [IBM Plex Mono](https://fonts.google.com/specimen/IBM+Plex+Mono) (data labels)

## Project Structure

```
.
├── index.html                  # Page structure & content
├── style.css                   # Design system + layout
├── app.js                      # Fetches JSON → renders DOM, handles filters/modal
├── data/
│   ├── projects.json           # Computational biology projects
│   └── certificates.json       # Certifications, training, memberships
└── assets/
    ├── images/
    │   └── profile.jpg         # Hero portrait
    └── documents/
        └── Farhan_Ali_CV.pdf   # Downloadable CV
```

## Content Sections

1. **Profile** — introduction, research focus, and direct contact links
2. **Academic Foundation** — degree, CGPA, clinical wet-lab skills, computational tool stack
3. **Research** — computational biology projects, rendered dynamically
4. **Clinical** — laboratory rotations and diagnostic center placements
5. **Credentials** — filterable library of certifications, workshops, and professional memberships

## Running Locally

No build tools, no package manager. Because the page fetches local JSON via `fetch()`, it needs
to be served over HTTP rather than opened directly as a `file://` path.

```bash
git clone https://github.com/farhanali-researcher/portfolio.git
cd portfolio

# serve with any static server, e.g.:
python3 -m http.server 8000
```

Then open **http://localhost:8000** in a browser.

## Updating Content

| To change | Edit |
|---|---|
| Projects | `data/projects.json` |
| Certificates & memberships | `data/certificates.json` |
| Clinical rotations, degree info, skills | directly in `index.html` (hardcoded by design) |
| Colors, type scale, spacing | design tokens at the top of `style.css` |
| CV file | replace `assets/documents/Farhan_Ali_CV.pdf` |

## Research Focus

- **Translational Hematology & Molecular Diagnostics** — chronic hemoglobinopathies, transfusion-dependent β-thalassemia
- **Computational Biology & Bioinformatics** — variant annotation, sequence analysis, structural modeling
- **Clinical Epidemiology & Biopsychosocial Health** — HRQoL and caregiver burden in pediatric chronic disease
- **Advanced Laboratory Sciences** — diagnostic workflow optimization, QA/QC

## Contact

<div align="center">

[![Email](https://img.shields.io/badge/Email-farhanali.mlt010%40gmail.com-14213D?style=for-the-badge&logo=gmail&logoColor=white)](mailto:farhanali.mlt010@gmail.com)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-farhanali010-1F5C54?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/farhanali010)
[![GitHub](https://img.shields.io/badge/GitHub-farhanali--researcher-8B2635?style=for-the-badge&logo=github&logoColor=white)](https://github.com/farhanali-researcher)

**Malakand, Khyber Pakhtunkhwa, Pakistan**

</div>

## License

<a name="license"></a>
Code in this repository (`index.html`, `style.css`, `app.js`) is released under the [MIT License](LICENSE).
CV content, images, and personal data are © Farhan Ali and not covered by this license.

<br>

<div align="center">
<sub>Built for research collaboration, not decoration.</sub>
</div>
