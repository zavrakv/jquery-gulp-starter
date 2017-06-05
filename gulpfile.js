const gulp = require('gulp'),
    plugins = require('gulp-load-plugins')();

function getTask(task) {
    return require('./gulp/' + task)(gulp, plugins);
}

gulp.task('less', getTask('less'));
gulp.task('browser-sync', getTask('browser-sync', ['less']));
gulp.task('scripts', getTask('scripts'));
gulp.task('scripts-vendor', getTask('scripts-vendor'));
gulp.task('css-vendor', getTask('css-vendor'));
gulp.task('build', ['less', 'scripts', 'scripts-vendor', 'browser-sync']);
