'use strict';

import gulp from 'gulp';
import concatCss from 'gulp-concat-css';
import cleanCss from 'gulp-clean-css';
import rename from 'gulp-rename';
import sass from 'gulp-sass';

import purecss from './files-purecss';
import path from './path-directory.json';

/**
 * purecss plus custom files css
 * pure-min file plus purecss-custom css files
 */
gulp.task('pureCustom', () => {
    return gulp.src([
            purecss.pure, purecss.cssCustom
        ])
        .pipe(concatCss("onefile-pure.css"))
        .pipe(gulp.dest(path.pureCustom.dest))
});


gulp.task('minicssPure', () => {
    return gulp.src(path.minicssPure.src)
        .pipe(cleanCss({ debug: true }, function(details) {
            console.log(`${details.name}: ${details.stats.originalSize}`);
            console.log(`${details.name}: ${details.stats.minifiedSize}`);
        }))
        .pipe(rename({ suffix: ".min" }))
        .pipe(gulp.dest(path.minicssPure.dest))
});


/**
 * concatenate miniaturized purecss files
 * concatenate the available purecss files, to have a single file, with the necessary dependencies.
 */
gulp.task('concatCompound', () => {
    return gulp.src([
            purecss.base, purecss.baseC, purecss.botton, purecss.cssCustom
        ])
        .pipe(concatCss("onefile-compound.css"))
        .pipe(gulp.dest(path.concatCompound.dest))
});

/**
 * minimize onefile-compound
 * reduces onefile-compound, pre-generated file size.
 */
gulp.task('minicssCompound', () => {
    return gulp.src(path.minicssCompound.src)
        .pipe(cleanCss({ debug: true }, function(details) {
            console.log(`${details.name}: ${details.stats.originalSize}`);
            console.log(`${details.name}: ${details.stats.minifiedSize}`);
        }))
        .pipe(rename({ suffix: ".min" }))
        .pipe(gulp.dest(path.minicssCompound.dest))
});


/**
 * Sass compiler
 * convert sass/*.scss|sass files to purecss-custom/*.css
 */

gulp.task('sassCompilation', () => {
    return gulp.src(path.sassCompilation.src)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(path.sassCompilation.dest))

});