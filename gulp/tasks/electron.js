'use strict';

var gulp   = require('gulp');
var electron = require('electron-connect').server.create();

gulp.task('electronStart', function() {
	// Start browser process
	electron.start();
});

gulp.task('electronReload', function() {
	electron.reload();
});
