'use strict';

var DEBUG = process.env.NODE_ENV === 'debug';
var CI = process.env.CI === 'true';

var gulp   = require('gulp');
var plugins = require('gulp-load-plugins')({
  rename: {
    'gulp-spawn-mocha': 'mocha',
  },
});

var paths = {
  lint: ['./gulpfile.js', './lib/**/*.js'],
  watch: ['./gulpfile.js', './lib/**', './test/**/*.js', '!test/{temp,temp/**}'],
  tests: ['./test/**/*.js', '!test/{temp,temp/**}']
};

var plumberConf = {};

if (CI) {
  plumberConf.errorHandler = function(err) {
    throw err;
  };
}

gulp.task('lint', function () {
  return gulp.src(paths.lint)
    .pipe(plugins.jshint('.jshintrc'))
    .pipe(plugins.jshint.reporter('jshint-stylish'));
});

gulp.task('unitTest', function () {
  gulp.src(paths.tests, {cwd: __dirname})
    .pipe(plugins.plumber(plumberConf))
    .pipe(plugins.mocha({
      istanbul: !DEBUG,
      reporter: 'spec',
    }));
});

gulp.task('watch', ['test'], function () {
  gulp.watch(paths.watch, ['test']);
});

gulp.task('test', ['lint', 'unitTest']);

gulp.task('default', ['test']);
