var gulp  = require('gulp'),
    config = require('../../config'),
    browsersync = require('browser-sync'),
    watch = require('gulp-watch');

gulp.task('pug-watch', ['pug'], function (done) {
    browsersync.reload();
    done();
});

gulp.task('styles-watch', ['styles'], function (done) {
    browsersync.reload();
    done();
});

gulp.task('js-watch', ['js'], function (done) {
    browsersync.reload();
    done();
});

gulp.task('images-watch', ['images'], function (done) {
    browsersync.reload();
    done();
});

gulp.task('svg-watch', ['svg'], function (done) {
    browsersync.reload();
    done();
});

gulp.task('iconfont-watch', ['iconfont'], function (done) {
    browsersync.reload();
    done();
});

// https://www.browsersync.io/docs/gulp
gulp.task('watch', function() {
    browsersync(config.browsersync);
    gulp.watch(config.watch.styles, ['styles-watch']);
    gulp.watch(config.watch.js, ['js-watch']);
    gulp.watch(config.watch.img, ['images']);
    gulp.watch(config.watch.svg, ['svg-watch']);
    // gulp.watch(config.watch.iconfont, ['iconfont-watch']);
    gulp.watch(config.watch.pug, ['pug-watch']);
});

// https://habrahabr.ru/post/250569
