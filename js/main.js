/* Entry point — module scripts are deferred by default,
   so the DOM is ready when this executes. */
import { initTheme } from './modules/theme.js';
import { initNavigation } from './modules/navigation.js';
import { initScrollspy } from './modules/scrollspy.js';
import { initReveals } from './modules/animations.js';
import { initContactForm } from './modules/contact.js';
import { initFooter } from './modules/footer.js';

initTheme();
initNavigation();
initScrollspy();
initReveals();
initContactForm();
initFooter();
