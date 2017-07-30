var gulp = require('gulp');
var less = require('gulp-less');
var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('less', function() {
  gulp.src('./less/*.less')
    .pipe(less())
    .pipe(gulp.dest('./css'));
});

gulp.task('less:watch', function() {
  gulp.watch('./less/*.less', ['less']);
});

// Configure the browserSync task
gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: ''
    },
  })
})

// Dev task with browserSync
gulp.task('dev', ['browserSync'], function() {
  gulp.watch('./**/*.html', browserSync.reload);
  gulp.watch('css/**/*.css', browserSync.reload);
  gulp.watch('js/**/*.js', browserSync.reload);
});