"use strict";

const gulp = require('gulp'); //build system
const source = require('vinyl-source-stream'); //converts reatable stream from webpack into the gulp compatible stream
const sass = require('gulp-sass'); //css preprocessor
const notifier = require('node-notifier'); //desktop notifications on error
const del = require('del'); // remove files
const runSequence = require('run-sequence'); // run tasks in order
const flatten = require('gulp-flatten'); // removes folder structure from wilcard searches
const Imagemin = require('imagemin'); // compress images in dist task
const path = require('path');
const shell = require('gulp-shell')

/* variables for use in gulp tasks */
const RAW_PATH = './app/';
const COMPONENT_PATH = './app/js/components/';
const RAW_IMG_PATH = RAW_PATH + 'images/';
const RAW_FONTS_PATH = RAW_PATH + 'fonts/';
const RAW_JS_PATH = RAW_PATH + 'js/';
const RAW_SCSS_PATH = RAW_PATH + 'scss/';
const SCRIPTS_FILENAME = 'app.js';
var DEV_PATH = './dev/'
var DIST_PATH = './www/'
var destPath;
var destImgPath;
var destJsPath;
var destCssPath;
var destFontsPath;

gulp.task('buildGlobalStyles', function() {
  return gulp.src(RAW_SCSS_PATH + '**/*.scss')
    .pipe(sass().on('error', function(err){
      notifier.notify({title:'ERROR', message:'CSS'});
      sass.logError.bind(this)(err);
    }))
    .pipe(gulp.dest(RAW_PATH + 'css/'));
});

gulp.task('buildComponentStyles', function() {
  return gulp.src(COMPONENT_PATH + '**/styles.scss')
  .pipe(sass())
  .pipe(gulp.dest(COMPONENT_PATH));
});

/* basic server for development */
gulp.task('devServer', shell.task([
  'webpack-dev-server --colors --hot --inline --content-base dev/'
]));

/* basic server for development */
gulp.task('writeBundle', shell.task([
  'webpack --config webpack.production.config.js -p'
]));


/* copy images from App to www */
gulp.task('copyImages', function() {
  return gulp.src(RAW_IMG_PATH + '**/*')
    .pipe(gulp.dest(destImgPath));
});

gulp.task('copyFonts', function() {
  return gulp.src(RAW_FONTS_PATH + '**/*')
    .pipe(gulp.dest(destFontsPath));
});
gulp.task('updateIndexFile', function() {
  gulp.src(RAW_PATH + 'index.html')
    .pipe(gulp.dest(destPath));
});

/* Image tasks */
gulp.task('cleanImages', function() {
  del([
    destImgPath + '**/*'
  ]);
});
gulp.task('optimizeImages', function() {
  new Imagemin()
    .src(destImgPath + '*.{gif,jpg,png,svg}')
    .dest(destImgPath)
    .use(Imagemin.jpegtran({progressive: true}))
    .use(Imagemin.gifsicle({interlaced: true}))
    .use(Imagemin.optipng({optimizationLevel: 3}))
    .run();
});

/* bring component images into one image folder inside "App" */
gulp.task('gatherComponentImages', function() {
  return gulp.src(COMPONENT_PATH + '**/*.{gif,jpg,png,svg}')
    .pipe(flatten())
    .pipe(gulp.dest(RAW_IMG_PATH));
});

/* Watchers */
gulp.task('watch', function() {
  gulp.watch([RAW_SCSS_PATH + '**/*.scss'],['buildGlobalStyles']);
  gulp.watch([COMPONENT_PATH + '**/*.scss'],['buildComponentStyles']);
  gulp.watch([RAW_IMG_PATH + '**/*'],['copyImages']);
  gulp.watch([RAW_FONTS_PATH + '**/*'],['copyFonts']);
  gulp.watch([COMPONENT_PATH + '**/*.{gif,jpg,png,svg}'],['gatherComponentImages']);
});

/* work on project */
gulp.task('dev', function () {
  destPath = DEV_PATH;
  destImgPath = DEV_PATH + 'images/';
  destJsPath = DEV_PATH + 'js/';
  destCssPath = DEV_PATH + 'css/';
  destFontsPath = DEV_PATH + 'fonts/';
  runSequence('updateIndexFile', 'buildComponentStyles', 'buildGlobalStyles', 'gatherComponentImages', 'cleanImages', 'copyFonts', 'copyImages', 'watch', 'devServer');
});

/* prepare project for production evironemnt */
gulp.task('dist', function () {
  destPath = DIST_PATH;
  destImgPath = DIST_PATH + 'images/';
  destJsPath = DIST_PATH + 'js/';
  destCssPath = DIST_PATH + 'css/';
  destFontsPath = DIST_PATH + 'fonts/';
  runSequence('updateIndexFile', 'buildComponentStyles', 'buildGlobalStyles', 'gatherComponentImages', 'cleanImages', 'copyImages', 'copyFonts', 'optimizeImages', 'writeBundle');
});

/* Run 'dev' task as default gulp task */
gulp.task('default', function () {
  gulp.tasks.dev.fn();
});

