const uglify   = require('gulp-uglifyjs'),
    concat = require('gulp-concat');

module.exports = function (gulp, plugins) {
    return function () {
        return gulp.src(['./src/js/main.js'])
            .pipe(concat('main.min.js'))
            .pipe(uglify())
            .pipe(gulp.dest('public/js'));
    }
};