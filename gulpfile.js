var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();
var concatCss = require('gulp-concat-css');

gulp.task('concat', function () {
    return gulp.src('app/assets/css/*.css')
        .pipe(concatCss("bundle.css"))
        .pipe(gulp.dest('app/styles'));
});

gulp.task('sass', function () {
    return gulp.src('app/assets/scss/main.scss').pipe(sass().on('error', sass.logError)).pipe(autoprefixer()).pipe(gulp.dest('app/assets/css')).pipe(browserSync.reload({
        stream: true
    }));
});
gulp.task('browserSync', function () {
    browserSync.init({
        server: {
            baseDir: 'app'
        },
    })
})
gulp.task('watch', ['browserSync', 'sass', 'concat'], function () {
    gulp.watch('app/assets/scss/**/*.scss', ['sass']);
    gulp.watch('app/views/**/*.html', browserSync.reload);
});