const projectsData = [
    {
        title: "Food Blog",
        desc: "It is a mobile-friendly webpage",
        tags: ["HTML 5", "CSS", "Bootstrap"],
        image: "img/project_1.jpeg",
        link: "https://1-nicholas.ijewerenicholas.workers.dev/",
        buttonText: "View Project"
    },
    {
        title: "E-commerce Website",
        desc: "Website for shopping.",
        tags: ["HTML 5", "JavaScript", "CSS"],
        image: "img/project_2.jpeg",
        link: "https://code-review2.pages.dev/",
        buttonText: "View Project"
    },
    {
        title: "Architectural Website",
        desc: "A website showcasing architectural designs and projects.",
        tags: ["HTML 5", "JavaScript", "CSS", "SCSS"],
        image: "img/code-review3_konradoffice.netlify.app.jpeg",
        link: "https://konrad-agm.pages.dev/",
        buttonText: "View Architectural Website"
    },
    {
        title: "A Global Event Website",
        desc: "A website showing details of upcoming events.",
        tags: ["Symfony", "HTML 5", "CSS", "Bootstrap"],
        image: "img/project_4.jpeg",
        link: "https://ecochain-demo.netlify.app/",
        buttonText: "View Project"
    },
    {
        title: "A Toy Shop Website",
        desc: "Online store for selling toys and games.",
        tags: ["PHP", "Symfony", "HTML 5", "CSS", "Bootstrap"],
        image: "img/project_7.jpeg",
        link: "https://bloomhealth-demo.netlify.app/",
        buttonText: "View Project"
    },
    {
        title: "Pet Adoption Website",
        desc: "A website for connecting pets with loving families.",
        tags: ["Figma", "Storybook", "CSS"],
        image: "img/petAdoption.jpeg",
        link: "https://muse-ui-kit.netlify.app/",
        buttonText: "View Project"
    }
];

function renderProjects() {
    const container = document.getElementById('projectsContainer');
    if (!container) return;
    container.innerHTML = '';
    
    projectsData.forEach((proj, index) => {
        const projectDiv = document.createElement('div');
        projectDiv.classList.add('project-item');
        
        // Handle image with fallback
        const imageHtml = proj.image ? `
            <img src="${proj.image}" alt="${proj.title}" 
                 style="width: 100%; height: 100%; object-fit: cover;"
                 onerror="this.onerror=null; this.parentElement.innerHTML='<span style=\\'font-size: 4rem;\\'>📁</span>';">
        ` : `<span style="font-size: 4rem;">📁</span>`;
        
        projectDiv.innerHTML = `
            <div class="project-img" style="display: flex; align-items: center; justify-content: center; overflow: hidden;">
                ${imageHtml}
            </div>
            <div class="project-info">
                <h3>${proj.title}</h3>
                <p>${proj.desc}</p>
                <div class="project-tags">
                    ${proj.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
                <a href="${proj.link}" class="project-link" target="_blank" rel="noopener noreferrer">
                    ${proj.buttonText || 'View Project'} <i class="fas fa-arrow-right"></i>
                </a>
            </div>
        `;
        
        container.appendChild(projectDiv);
    });
}

// Optional: Add click tracking (uncomment if you want to track clicks)
function trackProjectClick(projectTitle, projectLink) {
    console.log(`🔗 Opening project: ${projectTitle} -> ${projectLink}`);
    // You can add Google Analytics here
    // if (typeof gtag !== 'undefined') {
    //     gtag('event', 'project_click', { project_name: projectTitle, project_url: projectLink });
    // }
}

// Call the function to render projects when page loads
renderProjects();
// Call renderProjects when the page loads
document.addEventListener('DOMContentLoaded', renderProjects);
    // Smooth scroll for anchor links + prevent default #
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === "#" || targetId === "") return;
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                // update url without jumping
                history.pushState(null, null, targetId);
            }
        });
    });

    // demo interactive contact: show alert with mail (simulated but real link preview)
    const emailBtn = document.getElementById('emailLink');
    if (emailBtn) {
        emailBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.href = "mailto:hello@alexmorgan.dev";
        });
    }
    // For github/linkedin/twitter we set demo links (just placeholder but open in new tab)
    const githubLink = document.getElementById('githubLink');
    const linkedinLink = document.getElementById('linkedinLink');
    const twitterLink = document.getElementById('twitterLink');
    if (githubLink) githubLink.href = "https://github.com/Nicotension";
    if (linkedinLink) linkedinLink.href = "https://www.linkedin.com/feed/";
    if (twitterLink) twitterLink.href = "https://x.com/home";
    // optional open in new tab for all external icons
    const allSocial = document.querySelectorAll('.contact-links a');
    allSocial.forEach(link => {
        if (link.getAttribute('href') && !link.getAttribute('href').startsWith('mailto')) {
            link.setAttribute('target', '_blank');
            link.setAttribute('rel', 'noopener noreferrer');
        }
    });

    // set current year in footer (dynamic)
    const footerYear = document.querySelector('footer p');
    if (footerYear) {
        const currentYear = new Date().getFullYear();
        footerYear.innerHTML = footerYear.innerHTML.replace('2025', currentYear);
    }

    // small console greeting
    console.log("✨ Portfolio ready — customise with your own data!");

    // call project render
    renderProjects();

    // also small animation on skill cards (simple entrance)
    const skillItems = document.querySelectorAll('.skill-card');
    if (skillItems.length) {
        skillItems.forEach((card, idx) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(8px)';
            setTimeout(() => {
                card.style.transition = 'all 0.3s ease';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, idx * 50);
        });
    }

    // dynamically update the hero image placeholder maybe with data? but it's fine.
    // making demo interactive project link "Case study" show a little toast (optional user-friendly)
    const projectLinks = document.querySelectorAll('.project-link');
    projectLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            if (link.getAttribute('href') === "#") {
                e.preventDefault();
                // subtle alert to showcase demo
                const projectTitle = link.closest('.project-info')?.querySelector('h3')?.innerText || 'Project';
                alert(`✨ "${projectTitle}" — full case study coming soon. This is a demo portfolio.`);
            }
        });
    });

    // Add a minimal active nav highlight on scroll
    const sections = document.querySelectorAll('section, #home');
    const navItems = document.querySelectorAll('.nav-links a');
    window.addEventListener('scroll', () => {
        let current = '';
        const scrollPos = window.scrollY + 150;
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        // also home detection
        if (!current && window.scrollY < 100) current = 'home';
        navItems.forEach(item => {
            item.style.fontWeight = '500';
            item.style.color = '#1f2937';
            const href = item.getAttribute('href').substring(1);
            if (href === current) {
                item.style.fontWeight = '700';
                item.style.color = '#2A3E8F';
            }
        });
    });
    // trigger initial
    window.dispatchEvent(new Event('scroll'));