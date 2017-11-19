// Copy fonts from development dir to production dir
var gulp = require('gulp'),
    config = require('../../config'),
    $ = require('gulp-load-plugins')();

gulp.task('fonts', function() {
    gulp.src(config.fonts.src)
    .pipe($.newer(config.fonts.dest))
    .pipe(gulp.dest(config.fonts.dest))
});
