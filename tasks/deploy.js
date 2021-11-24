const gulp = require('gulp');
const ghpages = require('gh-pages');
const config = require('../config.json');

gulp.task('deploy', gulp.series(
    // 'build',
    async () => {
        await ghpages.publish(config.publicDir, function(err) {})
    }
));