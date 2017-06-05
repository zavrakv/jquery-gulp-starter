const uglify   = require('gulp-uglifyjs'),
    concat = require('gulp-concat');

module.exports = function (gulp, plugins) {
    return function () {
        return gulp.src([])
            .pipe(concat('vendor.min.js'))
            .pipe(uglify())
            .pipe(gulp.dest('public/js'));
    }
};