var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var cleanCSS = require('gulp-clean-css');

gulp.task('build-sass', function () {
    gulp.src('./public/sass/main.scss')
        .pipe(plumber())
        .pipe(sass())
        .pipe(gulp.dest('./public/css'))
})

gulp.task('clean-css', () => {
    return gulp.src('./public/css/main.css')
        .pipe(cleanCSS({
            debug: true,
            rebase: false
        }, (details) => {
            console.log(`${details.name}: ${details.stats.originalSize}`);
            console.log(`${details.name}: ${details.stats.minifiedSize}`);
        }))
        .pipe(gulp.dest('./dist/css'));
});

gulp.task('watch', ['build-sass'], function () {
    gulp.watch('./public/sass/**/*.scss', ['build-sass']);
});