/* Mobile navigation — open/close, ARIA sync, outside click,
   Escape, resize-to-desktop handling, and link-click dismissal. */
import { $, $all } from '../utils/dom.js';
import { DESKTOP_QUERY } from '../config/constants.js';

export function initNavigation() {
    const button = $('mobileMenuButton');
    const menu = $('mobileMenu');
    if (!button || !menu) return;

    function setMenuOpen(open) {
        menu.classList.toggle('hidden', !open);
        button.setAttribute('aria-expanded', String(open));
        button.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
        button.innerHTML = open
            ? '<i class="fas fa-times" aria-hidden="true"></i>'
            : '<i class="fas fa-bars" aria-hidden="true"></i>';
    }

    const closeMenu = () => setMenuOpen(false);

    button.addEventListener('click', () => {
        setMenuOpen(menu.classList.contains('hidden'));
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
        if (menu.classList.contains('hidden')) return;
        if (!menu.contains(e.target) && !button.contains(e.target)) {
            closeMenu();
        }
    });

    // Close on Escape and return focus to the toggle
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !menu.classList.contains('hidden')) {
            closeMenu();
            button.focus();
        }
    });

    // Close when the viewport grows to desktop width
    const desktopQuery = window.matchMedia(DESKTOP_QUERY);
    const onDesktopChange = (e) => { if (e.matches) closeMenu(); };
    if (desktopQuery.addEventListener) {
        desktopQuery.addEventListener('change', onDesktopChange);
    } else if (desktopQuery.addListener) {
        desktopQuery.addListener(onDesktopChange);
    }

    // Close after any nav link is chosen
    $all('a.nav-link').forEach((link) => {
        link.addEventListener('click', () => {
            if (!menu.classList.contains('hidden')) closeMenu();
        });
    });
}
