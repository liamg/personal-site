var gulp = require('gulp');
var less = require('gulp-less');
var minifyCSS = require('gulp-csso');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('html', function(){
  return gulp.src('html/*.html')
    .pipe(gulp.dest('dist'))
});

gulp.task('fonts', function(){
  return gulp.src('node_modules/@fortawesome/fontawesome-free/webfonts/*.*')
    .pipe(gulp.dest('dist/webfonts'))
});

gulp.task('css', function(){
  return gulp.src(['node_modules/@fortawesome/fontawesome-free/css/all.min.css', 'node_modules/bulma/css/bulma.css', 'css/*.css'])
    .pipe(less())
    .pipe(minifyCSS())
    .pipe(concat('main.css'))
    .pipe(gulp.dest('dist'))
});

gulp.task('js', function(){
  return gulp.src(['node_modules/particles.js/particles.js', 'js/*.js'])
    .pipe(sourcemaps.init())
    .pipe(sourcemaps.write())
    .pipe(concat('app.js'))
    .pipe(gulp.dest('dist'))
});

gulp.task('default', [ 'html', 'css', 'js', 'fonts' ]);