/* Theme toggle — light/dark with localStorage persistence.
   The inline <head> script in index.html applies the theme class
   before first paint; this module only syncs UI and handles clicks. */
import { $ } from '../utils/dom.js';

const moonIcon = '<i class="fas fa-moon" aria-hidden="true"></i>';
const sunIcon = '<i class="fas fa-sun" aria-hidden="true"></i>';

function syncThemeUI(toggle, html) {
    const isDark = html.classList.contains('dark');
    if (!toggle) return;
    toggle.innerHTML = isDark ? sunIcon : moonIcon;
    toggle.setAttribute('aria-pressed', String(isDark));
    toggle.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
}

export function initTheme() {
    const html = document.documentElement;
    const toggle = $('darkModeToggle');
    if (!toggle) return;

    toggle.addEventListener('click', () => {
        const isDark = html.classList.toggle('dark');
        try {
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
        } catch (e) { /* storage unavailable (e.g. private mode) */ }
        syncThemeUI(toggle, html);
    });

    syncThemeUI(toggle, html);
}
