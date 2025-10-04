// Ensure page loads at the top
if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
}

window.addEventListener('beforeunload', function() {
    window.scrollTo(0, 0);
});

document.addEventListener('DOMContentLoaded', function() {
    // Scroll to top on page load
    window.scrollTo(0, 0);

    // --- CONFIGURATION ---

    // 1. Social Media Links Configuration
    const socialLinks = [
        {
            name: 'GitHub',
            url: 'https://github.com/habeebullahtabrez',
            icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>`
        },
        {
            name: 'LinkedIn',
            url: 'https://linkedin.com/in/theopcoder',
            icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>`
        },
        {
            name: 'Twitter',
            url: 'https://x.com/TheOpCoder',
            icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-twitter"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>`
        },
        // Youtube
        {
            name: 'YouTube',
            url: 'https://www.youtube.com/@TheOpCoder',
            icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-youtube"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2A29 29 0 0 0 23 11.75a29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>`
        },
    ];

    // 2. Projects Configuration
    const projects = [
        {
            title: 'WinningSon-inator',
            description: 'A web app where users can log their daily wins and create a knowledge base of their contributions over time. Also helps them setup goals and analyze their progress using AI.',
            tech: ['Go', 'React.js', 'PostgreSQL'],
            githubUrl: null, // Optional
            demoUrl: 'https://www.winningsoninator.com' // Optional: Replace with live demo URL
        },
        {
            title: 'E-Commerce Store',
            description: 'An e-commerce platform built from the ground up, featuring user authentication, product listings, and a complete shopping cart flow.',
            tech: ['Node.js', 'Express.js', 'MongoDB'],
            githubUrl: 'https://github.com/habeebullahtabrez/e-commerce', // Optional
            demoUrl: null // Optional: Replace with live demo URL
        },
        {
            title: 'Chatrooms App',
            description: 'A real-time chat application that supports multiple rooms and live communication between users, built with WebSockets.',
            tech: ['Node.js', 'Socket.io', 'React.js', 'HarperDB'],
            githubUrl: 'https://github.com/habeebullahtabrez/chat-app', // Optional
            demoUrl: null // No live demo for this one
        },
        {
            title: 'Meetup Organizer',
            description: 'An event management application that allows users to create, publish, and manage online events, using a real-time database for live updates.',
            tech: ['JavaScript', 'Svelte.js', 'Firebase'],
            githubUrl: 'https://github.com/habeebullahtabrez/meetup-organizer', // Optional
            demoUrl: null // Optional: Replace with live demo URL
        },
        {
            title: 'Wave Portal (dApp)',
            description: 'A decentralized application (dApp) demonstrating the basic functionalities of the Ethereum Blockchain, allowing users to interact with a smart contract.',
            tech: ['Solidity', 'React.js', 'Ethereum', 'Hardhat'],
            githubUrl: 'https://github.com/habeebullahtabrez/wave-portal', // Optional
            demoUrl: null
        }
    ];


    // --- DYNAMIC CONTENT GENERATION ---

    // Generate Social Links in Footer
    const socialContainer = document.getElementById('footer-social-links');
    if (socialContainer) {
        socialLinks.forEach(link => {
            const a = document.createElement('a');
            a.href = link.url;
            a.target = '_blank';
            a.rel = 'noopener noreferrer';
            a.title = link.name;
            a.innerHTML = link.icon;
            socialContainer.appendChild(a);
        });
    }

    // Generate Project Cards
    const projectsGrid = document.getElementById('projects-grid');
    if (projectsGrid) {
        projects.forEach(project => {
            const card = document.createElement('div');
            card.className = 'project-card';

            let techList = project.tech.map(t => `<li>${t}</li>`).join('');

            let linksHtml = '';
            if (project.githubUrl) {
                linksHtml += `<a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" title="GitHub">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                              </a>`;
            }
            if (project.demoUrl) {
                linksHtml += `<a href="${project.demoUrl}" target="_blank" rel="noopener noreferrer" title="Live Demo">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                              </a>`;
            }

            card.innerHTML = `
                <div>
                    <div class="project-header">
                        <h3 class="project-title">${project.title}</h3>
                        <div class="project-links">${linksHtml}</div>
                    </div>
                    <p class="project-description">${project.description}</p>
                </div>
                <ul class="project-tech-list">${techList}</ul>
            `;
            projectsGrid.appendChild(card);
        });
    }


    // --- INTERACTIVITY ---

    // Mobile Menu Toggle
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('mainNav');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu when a link is clicked
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    // Hide Header on Scroll Down
    let lastScrollTop = 0;
    const header = document.getElementById('mainHeader');
    if(header) {
        window.addEventListener('scroll', function() {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            if (scrollTop > lastScrollTop && scrollTop > header.offsetHeight) {
                // Scroll Down
                header.style.top = '-80px';
            } else {
                // Scroll Up
                header.style.top = '0';
            }
            lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
        });
    }
});
