/// <binding Clean='clean' ProjectOpened='moveToLibs' />
"use strict";

var gulp = require("gulp"),
    rimraf = require("rimraf"),
    concat = require("gulp-concat"),
    cssmin = require("gulp-cssmin"),
    uglify = require("gulp-uglify"),
    Builder = require('systemjs-builder'),
    ts = require('gulp-typescript'),
    sourcemaps = require('gulp-sourcemaps'),
    rename = require("gulp-rename"),
    sass = require('gulp-sass');

var paths = {
    webroot: "./wwwroot/"
};

paths.js = paths.webroot + "js/**/*.js";
paths.minJs = paths.webroot + "js/**/*.min.js";
paths.css = paths.webroot + "css/**/*.css";
paths.minCss = paths.webroot + "css/**/*.min.css";
paths.concatJsDest = paths.webroot + "js/site.min.js";
paths.concatCssDest = paths.webroot + "css/site.min.css";
paths.npmSrc = "./node_modules/";
paths.npmLibs = paths.webroot + "lib/npmlibs/";

gulp.task("clean:js", function (cb) {
    rimraf(paths.concatJsDest, cb);
});

gulp.task("clean:css", function (cb) {
    rimraf(paths.concatCssDest, cb);
});

gulp.task("clean", gulp.parallel("clean:js", "clean:css"));

gulp.task("min:js", function () {
    return gulp.src([paths.js, "!" + paths.minJs], { base: "." })
        .pipe(concat(paths.concatJsDest))
        .pipe(uglify())
        .pipe(gulp.dest("."));
});

gulp.task("min:css", function () {
    return gulp.src([paths.css, "!" + paths.minCss])
        .pipe(concat(paths.concatCssDest))
        .pipe(cssmin())
        .pipe(gulp.dest("."));
});

gulp.task("min", gulp.parallel("min:js", "min:css"));

gulp.task("copy-deps:angular2", function () {
    return gulp.src(paths.npmSrc + '/@angular/**/*.js', { base: paths.npmSrc + '/@angular/' })
         .pipe(gulp.dest(paths.npmLibs + '/@angular/'));
});


gulp.task("copy-deps:rxjs", function () {
    return gulp.src(paths.npmSrc + '/rxjs/**/*.js', { base: paths.npmSrc + '/rxjs/' })
         .pipe(gulp.dest(paths.npmLibs + '/rxjs/'));
});

gulp.task("copy-deps:systemjs", function () {
    return gulp.src(paths.npmSrc + '/systemjs/dist/**/*.*', { base: paths.npmSrc + '/systemjs/dist/' })
         .pipe(gulp.dest(paths.npmLibs + '/systemjs/'));
});

gulp.task("copy-deps:zone.js", function () {
    return gulp.src(paths.npmSrc + '/zone.js/dist/**/*.*', { base: paths.npmSrc + '/zone.js/dist/' })
         .pipe(gulp.dest(paths.npmLibs + '/zone.js/'));
});

gulp.task("copy-deps:reflect-metadata", function () {
    return gulp.src(paths.npmSrc + '/reflect-metadata/**/*.*', { base: paths.npmSrc + '/reflect-metadata/' })
         .pipe(gulp.dest(paths.npmLibs + '/reflect-metadata/'));
});

gulp.task("copy-deps:moment", function () {
    return gulp.src(paths.npmSrc + '/moment/**/*.*', { base: paths.npmSrc + '/moment/' })
         .pipe(gulp.dest(paths.npmLibs + '/moment/'));
});

gulp.task("copy-deps:es6-shim", function () {
    return gulp.src([paths.npmSrc + '/es6-shim/**/*.js', paths.npmSrc + '/es6-shim/**/*.map'], { base: paths.npmSrc + '/es6-shim/' })
        .pipe(gulp.dest(paths.npmLibs + '/es6-shim/'));
});

gulp.task("moveToLibs", gulp.parallel(
    'copy-deps:angular2',
    'copy-deps:systemjs',
    'copy-deps:zone.js',
    'copy-deps:reflect-metadata',
    'copy-deps:moment',
    'copy-deps:rxjs'
));
