const   gulp = require('gulp'),
    less = require('gulp-less'),
    concat = require('gulp-concat'),
    sourcemaps = require('gulp-sourcemaps');

module.exports = function (gulp, plugins) {
    return function () {
        gulp.src([])
            .pipe(sourcemaps.init())
            .pipe(less())
            .pipe(sourcemaps.write())
            .pipe(concat('vendor.min.css'))
            .pipe(gulp.dest('./public/css'));
    };
};