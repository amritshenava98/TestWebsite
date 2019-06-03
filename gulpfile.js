var gulp = require('gulp');
var browser-sync = require('browser-sync').create();
var sass = require('gulp-sass');


gulp.task('js', function(){

  return gulp.src(['node_modules/bootstrap/scss/bootstrap.scss', 'src/scss/*.scss'])
        .pipe(sass())
        .pipe(gulp.dest("src/css"))
        .pipe(browserSync.stream(
});

gulp.task('serve', ['sass'], function(){

  browserSync.init({
    server : "./src";
  });

  gulp.watch(['node_modules/bootstrap/scss/bootstrap.scss', 'src/scss/*.scss'], ['sass']);
  gulp.watch("src/*.html").on('change', browserSync.reload);
});

gulp.task('default', ['js', 'serve']);
