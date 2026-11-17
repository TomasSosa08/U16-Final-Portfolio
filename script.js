
// =========================================
// TOMAS SOSA — PORTFOLIO JAVASCRIPT
// =========================================

// PROJECT DATABASE

const projects = [
    {
        unit: "U01",
        title: "Primer Deploy",
        description: "My first published website. The starting point of my journey into web development.",
        category: "web",
        categoryName: "WEB DESIGN",
        tags: ["HTML", "CSS", "GitHub"],
        icon: "🌐",
        url: "https://tomassosa08.github.io/U1-Primer-Deploy/",
        color: "#183c70",
        glow: "#428bff"
    },
    {
        unit: "U02",
        title: "Landing Page",
        description: "A landing page focused on visual presentation, structure and user experience.",
        category: "web",
        categoryName: "WEB DESIGN",
        tags: ["HTML", "CSS", "Layout"],
        icon: "🖥️",
        url: "https://tomassosa08.github.io/U2-Landing-Page/",
        color: "#49316e",
        glow: "#a17aff"
    },
    {
        unit: "U03",
        title: "Style Product",
        description: "A product presentation project exploring modern styling and responsive design.",
        category: "web",
        categoryName: "WEB DESIGN",
        tags: ["HTML", "CSS", "Design"],
        icon: "🎨",
        url: "https://tomassosa08.github.io/U3-Style-Product/",
        color: "#743b46",
        glow: "#ff8b9c"
    },
    {
        unit: "U04",
        title: "GameHub",
        description: "A gaming-inspired website with a bold visual identity and interactive elements.",
        category: "interactive",
        categoryName: "INTERACTIVE",
        tags: ["HTML", "CSS", "Gaming"],
        icon: "🎮",
        url: "https://tomassosa08.github.io/U4-Gamehub/",
        color: "#263c6b",
        glow: "#578bff"
    },
    {
        unit: "U05",
        title: "Ecommerce",
        description: "An online store experience focused on product presentation and responsive galleries.",
        category: "web",
        categoryName: "E-COMMERCE",
        tags: ["HTML", "CSS", "Grid"],
        icon: "🛍️",
        url: "https://tomassosa08.github.io/U5-Ecommerce/",
        color: "#6c4b2d",
        glow: "#ffb45e"
    },
    {
        unit: "U07",
        title: "Calculadora de Snacks",
        description: "An interactive calculator project combining user input, calculations and JavaScript logic.",
        category: "javascript",
        categoryName: "JAVASCRIPT",
        tags: ["JavaScript", "Functions", "Logic"],
        icon: "🍿",
        url: "https://tomassosa08.github.io/U7-Calculadora-de-snacks/",
        color: "#69452e",
        glow: "#ffc16a"
    },
    {
        unit: "U08",
        title: "Jubilación",
        description: "A calculator that explores retirement planning through interactive inputs and calculations.",
        category: "javascript",
        categoryName: "JAVASCRIPT",
        tags: ["JavaScript", "Calculations", "Inputs"],
        icon: "📊",
        url: "https://tomassosa08.github.io/U8-Jubilacion/",
        color: "#23564e",
        glow: "#69d9b3"
    },
    {
        unit: "U09",
        title: "Torneo Algorítmico",
        description: "A rock, paper and scissors tournament with score tracking and game logic.",
        category: "interactive",
        categoryName: "INTERACTIVE",
        tags: ["JavaScript", "Functions", "Game"],
        icon: "🏆",
        url: "https://tomassosa08.github.io/U9-Torneo-Algoritmico/",
        color: "#5b3d72",
        glow: "#c08bff"
    },
    {
        unit: "U11",
        title: "Lista del Súper",
        description: "An interactive shopping list using arrays, functions and methods to manage products.",
        category: "javascript",
        categoryName: "JAVASCRIPT",
        tags: ["JavaScript", "Arrays", "Functions"],
        icon: "🛒",
        url: "https://tomassosa08.github.io/U11-Lista-del-super/",
        color: "#315d48",
        glow: "#78db9d"
    },
    {
        unit: "U14",
        title: "Color Game",
        description: "A colorful interactive game built around visual recognition and JavaScript functionality.",
        category: "interactive",
        categoryName: "INTERACTIVE",
        tags: ["JavaScript", "Game", "Colors"],
        icon: "🎨",
        url: "https://tomassosa08.github.io/U14-Color-Game/",
        color: "#673c70",
        glow: "#e17bff"
    }
];


// ELEMENTS

const projectsGrid = document.getElementById("projectsGrid");
const projectSearch = document.getElementById("projectSearch");
const filterButtons = document.querySelectorAll(".filter-button");
const visibleCount = document.getElementById("visibleCount");
const noResults = document.getElementById("noResults");

let activeFilter = "all";
let searchText = "";


// RENDER PROJECTS

function renderProjects() {

    const filteredProjects = projects.filter(project => {

        const matchesCategory =
            activeFilter === "all" || project.category === activeFilter;

        const searchableText = (
            project.title + " " +
            project.description + " " +
            project.tags.join(" ") + " " +
            project.unit
        ).toLowerCase();

        const matchesSearch = searchableText.includes(searchText);

        return matchesCategory && matchesSearch;
    });

    projectsGrid.innerHTML = "";

    visibleCount.textContent = filteredProjects.length;

    noResults.classList.toggle("hidden", filteredProjects.length !== 0);

    filteredProjects.forEach((project, index) => {

        const card = document.createElement("article");

        card.className = "project-card";
        card.style.animationDelay = `${index * 0.06}s`;

        const tagsHTML = project.tags
            .map(tag => `<span>${tag}</span>`)
            .join("");

        card.innerHTML = `
            <div class="project-preview"
                 style="--preview: ${project.color}; --preview-glow: ${project.glow};">

                <div class="preview-orb"></div>

                <span class="preview-icon">${project.icon}</span>

                <span class="preview-number">${project.unit} / 2026</span>

                <span class="preview-category">${project.categoryName}</span>
            </div>

            <div class="project-info">

                <div class="project-topline">
                    <span class="project-unit">${project.unit} — PROJECT</span>
                    <span class="project-status">● PUBLISHED</span>
                </div>

                <h3>${project.title}</h3>

                <p>${project.description}</p>

                <div class="project-tags">
                    ${tagsHTML}
                </div>

                <a class="project-link"
                   href="${project.url}"
                   target="_blank"
                   rel="noopener noreferrer">

                    <span>Explore project</span>
                    <span>↗</span>

                </a>

            </div>
        `;

        projectsGrid.appendChild(card);
    });
}


// FILTER BUTTONS

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => btn.classList.remove("active"));

        button.classList.add("active");

        activeFilter = button.dataset.filter;

        renderProjects();
    });
});


// SEARCH

projectSearch.addEventListener("input", () => {

    searchText = projectSearch.value.toLowerCase().trim();

    renderProjects();
});


// RESET FILTERS

document.getElementById("resetFilters").addEventListener("click", () => {

    activeFilter = "all";
    searchText = "";

    projectSearch.value = "";

    filterButtons.forEach(button => {
        button.classList.toggle("active", button.dataset.filter === "all");
    });

    renderProjects();
});


// DARK / LIGHT MODE

const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");

function updateThemeIcon() {

    const isLight = document.body.classList.contains("light-theme");

    themeIcon.textContent = isLight ? "☾" : "☀";
}

const savedTheme = localStorage.getItem("portfolio-theme");

if (savedTheme === "light") {
    document.body.classList.add("light-theme");
}

updateThemeIcon();

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light-theme");

    const isLight = document.body.classList.contains("light-theme");

    localStorage.setItem(
        "portfolio-theme",
        isLight ? "light" : "dark"
    );

    updateThemeIcon();
});


// MOBILE MENU

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("open");

    menuToggle.textContent =
        navLinks.classList.contains("open") ? "✕" : "☰";
});

document.querySelectorAll(".nav-link").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("open");
        menuToggle.textContent = "☰";
    });
});


// KEYBOARD SHORTCUT: CMD/CTRL + K

document.addEventListener("keydown", event => {

    if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {

        event.preventDefault();

        document.getElementById("projects").scrollIntoView({
            behavior: "smooth"
        });

        projectSearch.focus();
    }

    if (event.key === "Escape") {
        projectSearch.blur();
    }
});


// SCROLL REVEAL ANIMATIONS

const revealElements = document.querySelectorAll(
    ".section-heading, .about-main, .skills-panel, .contact-card, .stats-grid"
);

revealElements.forEach(element => {
    element.classList.add("reveal");
});

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("visible");

            observer.unobserve(entry.target);
        }
    });

}, {
    threshold: 0.12
});

revealElements.forEach(element => {
    observer.observe(element);
});


// NAVBAR ACTIVE LINK

const sections = document.querySelectorAll("main section[id]");
const navItems = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

    let currentSection = "home";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 160;

        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute("id");
        }
    });

    navItems.forEach(link => {

        link.classList.toggle(
            "active",
            link.getAttribute("href") === `#${currentSection}`
        );
    });
});


// INITIALIZE

renderProjects();

console.log("Portfolio successfully loaded.");
console.log(`${projects.length} projects available.`);
