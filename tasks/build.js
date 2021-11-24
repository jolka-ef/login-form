const gulp = require('gulp');

require('./clean.js');
require('./css.js');
require('./content.js');
require('./images.js');
require('./javascript.js');

gulp.task('build', gulp.series(
    'clean',
    gulp.parallel('css', 'images'),
    'javascript',
    'content'));