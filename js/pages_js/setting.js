import { initFontSizeSelector } from '../modules/fontsettings.js';
import { initUserForm } from '../modules/userform.js';
import { initLanguageSelector } from '../modules/languagesettings.js';

document.addEventListener("DOMContentLoaded", () => {
    initFontSizeSelector();
    initLanguageSelector();
    initUserForm();
});