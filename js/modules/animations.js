/* Scroll reveal — IntersectionObserver adds .is-visible to
   .fade-in-section elements. Falls back to showing everything
   when IO is unavailable or the user prefers reduced motion. */
import { $all } from '../utils/dom.js';
import { prefersReducedMotion } from '../utils/accessibility.js';

export function initReveals() {
    const sections = $all('.fade-in-section');
    if (!sections.length) return;

    if (prefersReducedMotion() || !('IntersectionObserver' in window)) {
        sections.forEach((el) => el.classList.add('is-visible'));
        return;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        root: null,
        rootMargin: '0px 0px -10% 0px',
        threshold: 0.1
    });

    sections.forEach((el) => observer.observe(el));
}
