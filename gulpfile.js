/* eslint-disable */
/* jshint esnext: true */
const babel = require('babelify');
var gulp = require('gulp');
var browserSync = require('browser-sync');
var browserify = require('browserify');
const source = require('vinyl-source-stream');

gulp.task("browserSync", function(){
	browserSync.init({
		server: {
			baseDir: './public'
		}
	})
})

gulp.task('browserify', () => {
	browserify('./spec/createIndexTest.js', { debug: true }).transform(babel, {presets: ["es2015"]})
	.bundle()
        .pipe(source('app-test.js'))
        .pipe(gulp.dest('./spec'))
})


gulp.task('watch', ['browserSync','browserify'], function(){
	gulp.watch('./public/index.html', browserSync.reload)
	gulp.watch('./public/css/*.css', browserSync.reload);
	gulp.watch('./public/jss/*.js', browserSync.reload)
});
