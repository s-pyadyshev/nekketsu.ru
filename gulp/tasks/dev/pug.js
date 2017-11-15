// Pug -> HTML
var gulp = require('gulp'),
    config = require('../../config'),
    pug = require('gulp-pug'),
    changed = require('gulp-changed'),
    prettify = require('gulp-html-prettify');

gulp.task('pug', config.wrapPipe(function(success, error) {

    return gulp.src(config.pug.src)
        .pipe(changed(config.pug.dest, {
            extension: '.html'
        }))
        .pipe(pug())
        .pipe(prettify(config.htmlPrettify))
        .pipe(gulp.dest(config.pug.dest))
}));
