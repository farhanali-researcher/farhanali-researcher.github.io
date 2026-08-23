document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Load Publications ---
    fetch('data/publications.json')
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('publications-container');
            container.innerHTML = data.map(pub => `
                <div class="card" style="margin-bottom: 1.5rem;">
                    <span class="card-category">${pub.status} | ${pub.year}</span>
                    <h3 class="card-title">${pub.title}</h3>
                    <p class="card-meta"><strong>Authors:</strong> ${pub.authors}<br><strong>Journal:</strong> ${pub.journal}</p>
                    <p class="card-desc">${pub.summary}</p>
                </div>
            `).join('');
        }).catch(err => console.log('Publications pending data setup.'));

    // --- 2. Load Projects ---
    fetch('data/projects.json')
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('projects-container');
            container.innerHTML = data.map(project => `
                <div class="card">
                    <span class="card-category">${project.date}</span>
                    <h3 class="card-title">${project.title}</h3>
                    <p class="card-desc">${project.problem}</p>
                    <div class="tag-group" style="margin-bottom: 1.5rem;">
                        ${project.tools.map(tool => `<span class="tag">${tool}</span>`).join('')}
                    </div>
                    ${project.githubLink ? `<a href="${project.githubLink}" target="_blank" class="card-link">View Repository <i class="fa-solid fa-arrow-right"></i></a>` : ''}
                </div>
            `).join('');
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
        if(certs.length === 0) {
            container.innerHTML = '<p style="color: var(--slate-400);">No credentials found in this category.</p>';
            return;
        }
        
        container.innerHTML = certs.map(cert => `
            <div class="card cert-card">
                <span class="card-category">${cert.category}</span>
                <h3 class="card-title" style="font-size: 1.1rem; margin-bottom: 0.5rem;">${cert.title}</h3>
                <p class="card-meta">${cert.issuer} | ${cert.date}</p>
                <div style="margin-top: auto; padding-top: 1rem;">
                    ${cert.file ? `<button class="card-link view-cert-btn" data-id="${cert.id}" style="background:none; border:none; cursor:pointer; padding:0;">View Document <i class="fa-solid fa-file-pdf"></i></button>` : ''}
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

    function openModal(cert) {
        modalBody.innerHTML = `
            <h3 style="margin-bottom: 0.5rem; font-family: var(--font-serif);">${cert.title}</h3>
            <p style="color: var(--slate-600); margin-bottom: 1.5rem;">Issued by: ${cert.issuer} | Date: ${cert.date}</p>
            <iframe src="${cert.file}" width="100%" height="500px" style="border: 1px solid var(--border); border-radius: 4px;">
                This browser does not support PDFs. Please download the PDF to view it: <a href="${cert.file}">Download PDF</a>.
            </iframe>
            <div style="margin-top: 1rem; text-align: right;">
                <a href="${cert.file}" target="_blank" class="btn btn-outline">Open in New Tab</a>
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
});
