var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();
gulp.task('sass', function () {
    return gulp.src('app/styles/scss/main.scss').pipe(sass().on('error', sass.logError)).pipe(autoprefixer()).pipe(gulp.dest('app/styles/css')).pipe(browserSync.reload({
        stream: true
    }));
});
gulp.task('browserSync', function () {
    browserSync.init({
        server: {
            baseDir: 'app/views'
        },
    })
})
gulp.task('watch', ['browserSync', 'sass'], function () {
    gulp.watch('app/styles/scss/**/*.scss', ['sass']);
    gulp.watch('app/views/**/*.html', browserSync.reload);
});