
// Dark Mode Toggle
const darkModeToggle = document.getElementById('darkModeToggle');
const darkModeToggleMobile = document.getElementById('darkModeToggleMobile');
const htmlElement = document.documentElement;
const moonIcon = '<i class="fas fa-moon"></i>';
const sunIcon = '<i class="fas fa-sun"></i>';

// Function to apply theme
function applyTheme(theme) {
    if (theme === 'dark') {
        htmlElement.classList.add('dark');
        if (darkModeToggle) darkModeToggle.innerHTML = sunIcon;
        if (darkModeToggleMobile) darkModeToggleMobile.innerHTML = sunIcon;
    } else {
        htmlElement.classList.remove('dark');
        if (darkModeToggle) darkModeToggle.innerHTML = moonIcon;
        if (darkModeToggleMobile) darkModeToggleMobile.innerHTML = moonIcon;
    }
}

const savedTheme = localStorage.getItem('theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (savedTheme) {
    applyTheme(savedTheme);
} else if (prefersDark) {
    applyTheme('dark');
} else {
    applyTheme('light'); 
}


const toggleDarkMode = () => {
    const isDark = htmlElement.classList.toggle('dark');
    const newTheme = isDark ? 'dark' : 'light';
    localStorage.setItem('theme', newTheme);
    applyTheme(newTheme);
};

if (darkModeToggle) darkModeToggle.addEventListener('click', toggleDarkMode);
if (darkModeToggleMobile) darkModeToggleMobile.addEventListener('click', toggleDarkMode);

// Mobile Menu Toggle
const mobileMenuButton = document.getElementById('mobileMenuButton');
const mobileMenu = document.getElementById('mobileMenu');
if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', () => {
        const isHidden = mobileMenu.classList.toggle('hidden');
        mobileMenuButton.innerHTML = isHidden ? '<i class="fas fa-bars"></i>' : '<i class="fas fa-times"></i>';
    });
}

document.querySelectorAll('a.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            const navbarHeight = document.getElementById('navbar').offsetHeight;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
        if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
            mobileMenuButton.innerHTML = '<i class="fas fa-bars"></i>';
        }
    });
});

document.getElementById('currentYear').textContent = new Date().getFullYear();

const sections = document.querySelectorAll('.fade-in-section');
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => { 
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
        }
    });
}, observerOptions);

sections.forEach(section => {
    observer.observe(section);
});

const adjustScrollForNavbar = () => {
    if (window.location.hash) {
        const targetId = window.location.hash.substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            const navbarHeight = document.getElementById('navbar').offsetHeight;
            setTimeout(() => {
                const elementTop = targetElement.getBoundingClientRect().top + window.pageYOffset;
                if (elementTop < (navbarHeight + window.innerHeight * 0.2) && elementTop > navbarHeight) {
                } else if (elementTop <= navbarHeight + 10) {
                    window.scrollTo({
                        top: elementTop - navbarHeight - 10,
                        behavior: 'auto'
                    });
                }
            }, 100);
        }
    }
};
window.addEventListener('load', adjustScrollForNavbar);
window.addEventListener('hashchange', adjustScrollForNavbar);
