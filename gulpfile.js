var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('build-sass', function () {
    gulp.src('./public/sass/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./public/css'))
})

gulp.task('watch', ['build-sass'], function () {
    gulp.watch('./public/sass/*.scss', ['build-sass']);
});