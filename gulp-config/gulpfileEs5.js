'use strict';

var _gulp = require('gulp');

var _gulp2 = _interopRequireDefault(_gulp);

var _gulpConcatCss = require('gulp-concat-css');

var _gulpConcatCss2 = _interopRequireDefault(_gulpConcatCss);

var _gulpCleanCss = require('gulp-clean-css');

var _gulpCleanCss2 = _interopRequireDefault(_gulpCleanCss);

var _gulpRename = require('gulp-rename');

var _gulpRename2 = _interopRequireDefault(_gulpRename);

var _gulpSass = require('gulp-sass');

var _gulpSass2 = _interopRequireDefault(_gulpSass);

var _filesPurecss = require('./files-purecss');

var _filesPurecss2 = _interopRequireDefault(_filesPurecss);

var _pathDirectory = require('./path-directory.json');

var _pathDirectory2 = _interopRequireDefault(_pathDirectory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * purecss plus custom files css
 * pure-min file plus purecss-custom css files
 */
_gulp2.default.task('pureCustom', function () {
    return _gulp2.default.src([_filesPurecss2.default.pure, _filesPurecss2.default.cssCustom]).pipe((0, _gulpConcatCss2.default)("onefile-pure.css")).pipe(_gulp2.default.dest(_pathDirectory2.default.pureCustom.dest));
});

_gulp2.default.task('minicssPure', function () {
    return _gulp2.default.src(_pathDirectory2.default.minicssPure.src).pipe((0, _gulpCleanCss2.default)({ debug: true }, function (details) {
        console.log(details.name + ': ' + details.stats.originalSize);
        console.log(details.name + ': ' + details.stats.minifiedSize);
    })).pipe((0, _gulpRename2.default)({ suffix: ".min" })).pipe(_gulp2.default.dest(_pathDirectory2.default.minicssPure.dest));
});

/**
 * concatenate miniaturized purecss files
 * concatenate the available purecss files, to have a single file, with the necessary dependencies.
 */
_gulp2.default.task('concatCompound', function () {
    return _gulp2.default.src([_filesPurecss2.default.base, _filesPurecss2.default.baseC, _filesPurecss2.default.botton, _filesPurecss2.default.cssCustom]).pipe((0, _gulpConcatCss2.default)("onefile-compound.css")).pipe(_gulp2.default.dest(_pathDirectory2.default.concatCompound.dest));
});

/**
 * minimize onefile-compound
 * reduces onefile-compound, pre-generated file size.
 */
_gulp2.default.task('minicssCompound', function () {
    return _gulp2.default.src(_pathDirectory2.default.minicssCompound.src).pipe((0, _gulpCleanCss2.default)({ debug: true }, function (details) {
        console.log(details.name + ': ' + details.stats.originalSize);
        console.log(details.name + ': ' + details.stats.minifiedSize);
    })).pipe((0, _gulpRename2.default)({ suffix: ".min" })).pipe(_gulp2.default.dest(_pathDirectory2.default.minicssCompound.dest));
});

/**
 * Sass compiler
 * convert sass/*.scss|sass files to purecss-custom/*.css
 */

_gulp2.default.task('sassCompilation', function () {
    return _gulp2.default.src(_pathDirectory2.default.sassCompilation.src).pipe((0, _gulpSass2.default)().on('error', _gulpSass2.default.logError)).pipe(_gulp2.default.dest(_pathDirectory2.default.sassCompilation.dest));
});
