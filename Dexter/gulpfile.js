var gulp = require('gulp');
var webserver = require('gulp-webserver');
 
gulp.task('serve', function() {
  gulp.src('app')
    .pipe(webserver({
    	root: 'app/',
    	port: 8082,
      livereload: true,
      fallback: 'app/index.html',
      open: true
    }));
});