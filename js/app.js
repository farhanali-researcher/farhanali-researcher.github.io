document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Load Publications ---
    fetch('data/publications.json')
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('publications-container');
            if(container) {
                container.innerHTML = data.map(pub => `
                    <div class="card" style="margin-bottom: 1.5rem;">
                        <span class="card-category">${pub.status} | ${pub.year}</span>
                        <h3 class="card-title">${pub.title}</h3>
                        <p class="card-meta"><strong>Authors:</strong> ${pub.authors}<br><strong>Journal:</strong> ${pub.journal}</p>
                        <p class="card-desc">${pub.summary}</p>
                    </div>
                `).join('');
            }
        }).catch(err => console.log('Publications pending data setup.'));

    // --- 2. Load Projects ---
    fetch('data/projects.json')
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('projects-container');
            if(container) {
                container.innerHTML = data.map(project => `
                    <div class="card">
                        <span class="card-category">${project.date}</span>
                        <h3 class="card-title">${project.title}</h3>
                        <p class="card-desc">${project.problem}</p>
                        <div class="tag-group" style="margin-bottom: 1.5rem;">
                            ${project.tools.map(tool => `<span class="pill">${tool}</span>`).join('')}
                        </div>
                        ${project.githubLink ? `<a href="${project.githubLink}" target="_blank" class="card-link">View Repository <i class="fa-solid fa-arrow-right"></i></a>` : ''}
                    </div>
                `).join('');
            }
        }).catch(err => console.log('Projects pending data setup.'));

    // --- 3. Load Certificates & Filtering Logic ---
    let allCertificates = [];
    
    fetch('data/certificates.json')
        .then(response => response.json())
        .then(data => {
            allCertificates = data;
            renderCertificates(allCertificates);
        }).catch(err => console.log('Certificates pending data setup.'));

    function renderCertificates(certs) {
        const container = document.getElementById('certificates-container');
        if(!container) return;

        if(certs.length === 0) {
            container.innerHTML = '<p style="color: var(--text-muted);">No credentials found in this category.</p>';
            return;
        }
        
        container.innerHTML = certs.map(cert => `
            <div class="card track-card" style="margin-bottom: 1.5rem; display: flex; flex-direction: column;">
                <div class="track-header">
                    <h3 class="card-title" style="font-size: 1.2rem; color: var(--text-primary); margin-bottom: 0.2rem;">${cert.title}</h3>
                    <span class="track-date">${cert.date}</span>
                </div>
                <p class="card-meta" style="font-weight: 600; color: var(--primary-color); margin-bottom: 0.5rem; font-size: 0.9rem;">
                    ${cert.issuer} | <span style="text-transform: uppercase; letter-spacing: 1px;">${cert.category}</span>
                </p>
                ${cert.description ? `<p class="text-muted" style="margin-bottom: 1.5rem; line-height: 1.6; flex-grow: 1;">${cert.description}</p>` : ''}
                <div style="margin-top: auto;">
                    ${cert.file ? `<button class="btn btn-primary view-cert-btn" data-id="${cert.id}" style="padding: 0.5rem 1rem; font-size: 0.9rem; cursor: pointer; border: none; border-radius: 4px;">View Document <i class="fa-solid fa-file-pdf" style="margin-left: 5px;"></i></button>` : ''}
                </div>
            </div>
        `).join('');

        // Attach modal events to new buttons
        document.querySelectorAll('.view-cert-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const certId = e.target.closest('button').getAttribute('data-id');
                const certData = allCertificates.find(c => c.id === certId);
                openModal(certData);
            });
        });
    }

    // Filter Logic
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Update active state
            filterBtns.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            
            const filterValue = e.target.getAttribute('data-filter');
            if (filterValue === 'all') {
                renderCertificates(allCertificates);
            } else {
                const filtered = allCertificates.filter(cert => cert.category === filterValue);
                renderCertificates(filtered);
            }
        });
    });

    // Modal Logic
    const modal = document.getElementById('cert-modal');
    const closeBtn = document.querySelector('.close-modal');
    const modalBody = document.getElementById('modal-body');

    if(modal && closeBtn && modalBody) {
        function openModal(cert) {
            modalBody.innerHTML = `
                <h3 style="margin-bottom: 0.5rem; color: var(--text-primary);">${cert.title}</h3>
                <p style="color: var(--text-muted); margin-bottom: 1.5rem; font-weight: 500;">Issued by: ${cert.issuer} | Date: ${cert.date}</p>
                <iframe src="${cert.file}" width="100%" height="500px" style="border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; background: #fff;">
                    This browser does not support PDFs. Please download the PDF to view it: <a href="${cert.file}">Download PDF</a>.
                </iframe>
                <div style="margin-top: 1.5rem; text-align: right;">
                    <a href="${cert.file}" target="_blank" class="btn btn-primary" style="text-decoration: none;">Open in New Tab</a>
                </div>
            `;
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden'; // prevent background scrolling
        }

        closeBtn.onclick = () => {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
            modalBody.innerHTML = ''; // clear iframe memory
        }

        window.onclick = (event) => {
            if (event.target == modal) {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
                modalBody.innerHTML = '';
            }
        }
    }
});
