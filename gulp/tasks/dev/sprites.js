var gulp = require('gulp'),
    config = require('../../config'),
    $ = require('gulp-load-plugins')();

gulp.task('sprites', function() {

    var spriteData = gulp.src(config.sprites.src)
        .pipe($.spritesmith(config.sprites.options));

        spriteData.img.pipe(gulp.dest(config.sprites.dest.img));
        spriteData.css.pipe(gulp.dest(config.sprites.dest.css));
});
