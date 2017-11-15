// Copy favicons from development dir to production dir
var gulp = require('gulp'),
    config = require('../../config'),
    $ = require('gulp-load-plugins')();

gulp.task('favicons', function() {
    gulp.src(config.paths.favicons.src)
    .pipe($.newer(config.paths.favicons.dest))
    .pipe(gulp.dest(config.paths.favicons.dest))
});
