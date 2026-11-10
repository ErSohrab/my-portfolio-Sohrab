/* Contact form — AJAX submission to Formspree via Fetch API.
   Prevents the default redirect, shows inline success/error
   states, disables the button while a request is in flight,
   and preserves user input on failure. Native HTML5 validation
   still runs before the submit event fires. */
import { $ } from '../utils/dom.js';

const SUCCESS_MSG = $('formStatusSuccess');
const ERROR_MSG = $('formStatusError');

function showStatus(showEl, hideEl) {
    if (hideEl) hideEl.hidden = true;
    if (!showEl) return;
    showEl.hidden = false;
    // Move focus for keyboard/screen-reader users without
    // disrupting pointer users.
    showEl.setAttribute('tabindex', '-1');
    showEl.focus({ preventScroll: false });
}

export function initContactForm() {
    const form = document.querySelector('form.contact-form');
    if (!form) return;

    const submitBtn = form.querySelector('button[type="submit"]');
    const endpoint = form.getAttribute('action');
    if (!endpoint || !submitBtn) return;

    const defaultBtnText = submitBtn.textContent;
    let isSubmitting = false;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        if (isSubmitting) return;
        isSubmitting = true;

        // Mutually exclusive states: hide both before submitting.
        if (SUCCESS_MSG) SUCCESS_MSG.hidden = true;
        if (ERROR_MSG) ERROR_MSG.hidden = true;

        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending…';
        submitBtn.setAttribute('aria-busy', 'true');

        try {
            const response = await fetch(endpoint, {
                method: 'POST',
                body: new FormData(form),
                headers: { 'Accept': 'application/json' }
            });

            if (response.ok) {
                showStatus(SUCCESS_MSG, ERROR_MSG);
                form.reset();
            } else {
                // Formspree validation errors / rate limits / 5xx
                showStatus(ERROR_MSG, SUCCESS_MSG);
            }
        } catch (err) {
            // Network failure
            showStatus(ERROR_MSG, SUCCESS_MSG);
        } finally {
            submitBtn.disabled = false;
            submitBtn.textContent = defaultBtnText;
            submitBtn.removeAttribute('aria-busy');
            isSubmitting = false;
        }
    });
}
