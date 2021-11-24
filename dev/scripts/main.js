import * as switchForms from './switch';
import * as validation from './validation';

/**
 * The main script entry point for the site.
 */
const main = () => {
    validation.init();
    switchForms.init();
};

main();
