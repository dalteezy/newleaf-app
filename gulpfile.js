'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var ignore = require('gulp-ignore');

var path = ['./app/frontend/scss/*.scss','./app/frontend/scss/**/*.scss'];

gulp.task('default', ['watch']);
 
gulp.task('sass', function () {
  return gulp.src(path)
    .pipe(sass({outputStyle: 'expanded', errorLogToConsole: true}).on('error', sass.logError))
	.pipe(gulp.dest('./app/frontend/css'))
	.pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css' }))
	.pipe(gulp.dest('./app/frontend/css'));
});
 
gulp.task('watch', function () {
  gulp.watch(path, ['sass']);
});