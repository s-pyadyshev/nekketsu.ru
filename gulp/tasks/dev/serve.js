var gulp = require('gulp'),
    config = require('../../config'),
    browsersync = require('browser-sync');

gulp.task('serve', function() {
    browsersync(config.browsersync);
});
