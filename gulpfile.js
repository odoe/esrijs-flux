var gulp = require('gulp');
var babel = require('gulp-babel');

gulp.task('es6-dev', function() {
  return gulp.src([
    'src/*.js', 'src/**/*.js', 'src/**/**/*.js',
  ])
  .pipe(babel({ modules: 'amd' }))
  .pipe(gulp.dest('dist'));
});

gulp.task('copy', function() {
  gulp.src([
    'src/views/templates/*.html'
  ], { base: 'src'  })
  .pipe(gulp.dest('dist'));
});

gulp.task('default', ['es6-dev', 'copy']);

gulp.task('watch', function() {
    gulp.watch('src/**/*.*', ['default']);
});
