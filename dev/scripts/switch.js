/**
 * Adds event handlers to the document.
 */
export function init() {
    document.addEventListener('click', toggleVisibility, false);
    document.addEventListener('touchend', toggleVisibility, false);
}


/**
 * Switches forms visibility.
 * @param {!Event} event The event associated with the click.
 */
function toggleVisibility(event) {
    const target = event.target;
    if (target.matches('[href*="Form"]')) {
        event.preventDefault();
        const href = target.getAttribute('href');
        target.closest('.Form').classList.toggle('Form--hidden');

        const form = document.querySelector(href);
        form.classList.toggle('Form--hidden');
        form.reset();
    }
}
