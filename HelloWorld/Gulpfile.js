/* Gulpfile.js */

var gulp = require('gulp'); //1
var browserify = require('browserify'); //2
var babelify = require('babelify'); //3
var source = require('vinyl-source-stream'); //4

var paths = {
    main_js : [ 'client/app.jsx']
};

gulp.task('js', function(){
    // Browserify bundles the JS.
    return browserify(paths.main_js)
        .transform(babelify) // ------> transpiles es6 to es5
        .bundle()
        .on('error', (err) => {
            console.log("JS Error", err);
        })
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('static/js'));
});