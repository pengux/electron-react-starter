'use strict';

var gulp   = require('gulp');
var config = require('../config');
var electron = require('electron-connect').server.create();

gulp.task('watch', function() {

  // Scripts are automatically watched by Watchify inside Browserify task
  gulp.watch(config.styles.src,                 ['sass', 'electronReload']);
  gulp.watch(config.images.src,                 ['imagemin', 'electronReload']);
  gulp.watch(config.sourceDir + 'index.html',   ['copyIndex', 'electronReload']);

});