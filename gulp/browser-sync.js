const gulp = require('gulp'),
    browserSync = require('browser-sync');

// Static server
module.exports = function (gulp) {
    return function () {
        browserSync.init({
            server: {
                baseDir: ["./public", "./"]
            }
        });

        gulp.watch("./src/less/*.less", ['less-watch']);
        gulp.watch("./src/**/*.html").on('change', browserSync.reload);
        gulp.watch("./src/js/**/*.js", ['js-watch']);
    };
};

gulp.task('less-watch', ['less'], function (done) {
    browserSync.reload({stream: true});
    done();
});

gulp.task('js-watch', ['scripts'], function (done) {
    browserSync.reload({stream: true});
    done();
});
