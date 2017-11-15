// SASS -> CSS
var gulp = require('gulp'),
config = require('../../config'),
$ = require('gulp-load-plugins')(),
postcss = require('gulp-postcss'),
syntax = require('postcss-scss'),
gcmq = require('gulp-group-css-media-queries');

gulp.task('concat-layout', function() {
return gulp.src(config.styles.stylesLayout + '/*.' + config.styles.prep) // destination + extension
    .pipe($.concat('_layout.' + config.styles.prep)) // destination + extension
    .pipe(gulp.dest(config.styles.concatStyles))
});


gulp.task('concat-components', function() {
return gulp.src(config.styles.stylesComponents + '/*.' + config.styles.prep) // destination + extension
    .pipe($.concat('_components.' + config.styles.prep)) // destination + extension
    .pipe(gulp.dest(config.styles.concatStyles))
});

gulp.task('styles', ['concat-layout', 'concat-components'], config.wrapPipe(function(success, error) {
return gulp.src(config.styles.src)
    // .pipe($.sourcemaps.init())
    .pipe($.sass({outputStyle: 'nested'}).on('error', $.sass.logError))
    // .pipe($.sourcemaps.write())
    .pipe($.postcss(config.postcss))
    .pipe($.autoprefixer())
    .pipe(gcmq()) // combine media queries
    // .pipe($.csso()) // CSS minification
    .pipe(gulp.dest(config.styles.dest))
}));
