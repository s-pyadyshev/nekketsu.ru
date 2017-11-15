// SVG sprite generation
var gulp = require('gulp'),
  config = require('../../config'),
  $ = require('gulp-load-plugins')();

gulp.task('svg', function () {
  return gulp
    .src(config.svg.src)
    .pipe($.svgmin({
      plugins: [
        {
          removeAttrs: {
            attrs: ['fill']
          }
        }
      ]
    }))
    .pipe($.svgstore({inlineSvg: true}))
    .pipe($.svg2string())
    .pipe(gulp.dest(config.svgSprite.dest));
});
