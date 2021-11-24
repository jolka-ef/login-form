const config = require('../config.json');
const gulp = require('gulp');

gulp.task('images', function() {
    return gulp.src('dev/img/**/*')
        .pipe(gulp.dest(config.publicDir + config.imgPath));
});
