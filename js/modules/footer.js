/* Footer — dynamic copyright year */
import { $ } from '../utils/dom.js';

export function initFooter() {
    const yearEl = $('currentYear');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }
}
