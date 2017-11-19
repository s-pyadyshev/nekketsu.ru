var gulp = require('gulp');

gulp.task('build', [
    'pug',
    'styles',
    'js',
    'fonts',
    'images',
    'svg',
    // 'iconfont',
    // 'favicons'
]);
