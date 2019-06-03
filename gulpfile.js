var gulp = require('gulp');
var browser-sync = require('browser-sync').create();
var sass = require('gulp-sass');

gulp.task('serve', ['sass'], function(){

  browserSync.init({
    server : "./src";
  });

  gulp.watch();
  gulp.watch().on();
});

gulp.task('default', ['js', 'serve']);
