// Copy images from development dir to production dir
var gulp = require('gulp'),
    config = require('../../config'),
    $ = require('gulp-load-plugins')(),
    imageminJpegRecompress = require('imagemin-jpeg-recompress'),
    imageminPngquant = require('imagemin-pngquant'),
    imageminGifsicle = require('imagemin-gifsicle'),
    imageminSvgo = require('imagemin-svgo');


gulp.task('webp', function () {
    return gulp.src(config.webp.src)
        .pipe($.cached('src/img'))
        .pipe($.webp())
        .pipe(gulp.dest(config.images.dest))
});

gulp.task('images', ['sprites', 'webp'], config.wrapPipe(function(success, error) {
    return gulp.src(config.images.src)
        .pipe($.newer(config.images.dest))
        .pipe($.imagemin([
            imageminGifsicle({
                interlaced: true,
                optimizationLevel: 3
            }),
            imageminJpegRecompress({
                progressive: true,
                max: 80,
                min: 70
            }),
            imageminPngquant({ quality: '75-85' }),
            imageminSvgo({
                plugins: [
                    { removeViewBox: false }
                ]
            })
        ]))
        .pipe(gulp.dest(config.images.dest))
}));
