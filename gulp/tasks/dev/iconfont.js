// Iconfont generation
var gulp = require('gulp'),
    config = require('../../config'),
    browserSync = require('browser-sync'),
    iconfont = require('gulp-iconfont'),
    consolidate  = require('gulp-consolidate'),
    iconfontCss = require('gulp-iconfont-css');

gulp.task('iconfont', config.wrapPipe(function(success, error) {

    return gulp.src(config.svg.src)
        .pipe(iconfontCss(config.iconfontCss.options))
        .pipe(iconfont(config.iconfont.options))
        .pipe(gulp.dest(config.fonts.dest));
}));
