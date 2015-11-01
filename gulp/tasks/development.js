'use strict';

var gulp        = require('gulp');
var gutil = require('gulp-util');
var runSequence = require('run-sequence');

gulp.task('dev', function(callback) {
	gutil.log('test');

  callback = callback || function() {};

  global.isProd = false;

  // Run all tasks once
  return runSequence(['sass', 'imagemin', 'browserify', 'copyFonts', 'copyIndex', 'copyIcons'], 'watch', 'electronStart', callback);

});