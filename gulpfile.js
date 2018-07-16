var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');

gulp.task('build-sass', function () {
    gulp.src('./public/sass/main.scss')
        .pipe(plumber())
        .pipe(sass())
        .pipe(gulp.dest('./public/css'))
})

gulp.task('watch', ['build-sass'], function () {
    gulp.watch('./public/sass/**/*.scss', ['build-sass']);
});