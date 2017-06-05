const gulp = require('gulp'),
    less = require('gulp-less'),
    concat = require('gulp-concat'),
    browserSync = require('browser-sync');

module.exports = function (gulp, plugins) {
    return function () {
        gulp.src('./src/less/main.less')
            .pipe(less())
            .pipe(concat('main.css'))
            .pipe(gulp.dest('./public/css'))
            .pipe(browserSync.stream());
    };
};
