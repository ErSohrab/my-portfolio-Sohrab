/* Scrollspy — marks the active section's nav links with
   aria-current="location" in both desktop and mobile menus.
   Positions are remeasured on load/resize so late-loading images
   or viewport changes don't leave stale offsets. */
import { $, $all } from '../utils/dom.js';
import { SECTION_IDS } from '../config/constants.js';

export function initScrollspy() {
    const sections = SECTION_IDS.map((id) => $(id)).filter(Boolean);
    if (!sections.length) return;

    const navLinks = $all('a.nav-link');
    const linkMap = {};
    navLinks.forEach((link) => {
        const href = link.getAttribute('href');
        if (href && href.startsWith('#')) {
            const id = href.substring(1);
            (linkMap[id] = linkMap[id] || []).push(link);
        }
    });

    function setActiveSection(id) {
        SECTION_IDS.forEach((sid) => {
            const links = linkMap[sid];
            if (!links) return;
            const isActive = sid === id;
            links.forEach((link) => {
                if (isActive) {
                    link.setAttribute('aria-current', 'location');
                } else {
                    link.removeAttribute('aria-current');
                }
            });
        });
    }

    let sectionTops = [];
    let ticking = false;

    function measureSections() {
        sectionTops = sections.map((s) => ({ id: s.id, top: s.offsetTop }));
    }

    function updateActiveSection() {
        ticking = false;
        if (!sectionTops.length) return;
        const probe = window.scrollY + window.innerHeight * 0.3;
        let current = sectionTops[0].id;
        sectionTops.forEach((s) => {
            if (s.top <= probe) current = s.id;
        });
        setActiveSection(current);
    }

    function onScroll() {
        if (!ticking) {
            ticking = true;
            window.requestAnimationFrame(updateActiveSection);
        }
    }

    measureSections();
    updateActiveSection();
    window.addEventListener('load', () => {
        measureSections();
        updateActiveSection();
    });
    window.addEventListener('resize', () => {
        measureSections();
        updateActiveSection();
    }, { passive: true });
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('hashchange', updateActiveSection);
}
