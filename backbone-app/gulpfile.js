// Gulp Dependencies
var gulp = require('gulp');
var rename = require('gulp-rename');

// Build Dependencies
var browserify = require('gulp-browserify');
var uglify = require('gulp-uglify');

// Style Dependencies
var less = require('gulp-less');
var prefix = require('gulp-autoprefixer');
var minifyCSS = require('gulp-minify-css');

// Development Dependencies
var jshint = require('gulp-jshint');

// Test Dependencies
var mochaPhantomjs = require('gulp-mocha-phantomjs');



// Lint

gulp.task('lint-client', function() {
  return gulp.src('./assets/js/client/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});


//gulp.task('lint-test', function() {
//  return gulp.src('./test/**/*.js')
//    .pipe(jshint())
//    .pipe(jshint.reporter('default'));
//});


// Browserify
gulp.task('browserify-client', ['lint-client'], function() {
  return gulp.src('./assets/js/client/index.js')
    .pipe(browserify({
      insertGlobals: true
    }))
    .pipe(rename('backbone-app.js'))
    .pipe(gulp.dest('build'))
    .pipe(gulp.dest('public/javascripts'));
});

