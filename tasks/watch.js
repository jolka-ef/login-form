const connect = require('gulp-connect');
const gulp = require('gulp');
const watch = require('gulp-watch');

gulp.task('webserver', function() {
    connect.server({
        livereload: true,
        root: ['./public'],
    });
});

gulp.task('livereload', function() {
    gulp.src(['./public/*.css', './public/*.js', './public/*.html'])
        .pipe(watch(['./public/*.css', './public/*.js', './public/*.html']))
        .pipe(connect.reload());
});

gulp.task('watch', function() {
    gulp.watch('dev/css/**/*.css', gulp.parallel('css'));
    gulp.watch('dev/img/**/*', gulp.parallel('images'));
    gulp.watch('dev/scripts/*.js', gulp.parallel('javascript'));
    gulp.watch('templates/**/*.html', gulp.parallel('content'));
});

gulp.task('default', gulp.series(
    'build',
    gulp.parallel('webserver', 'livereload', 'watch'))
);
