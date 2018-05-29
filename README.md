[![NPM version](https://badge.fury.io/js/purecss-onefile.svg)](https://badge.fury.io/js/purecss-onefile)
[![GitHub version](https://badge.fury.io/gh/skotvarg%2Fpurecss-onefile.svg)](https://badge.fury.io/gh/skotvarg%2Fpurecss-onefile)
[![David](https://img.shields.io/david/dev/expressjs/express.svg)](https://github.com/skotvarg/purecss-onefile)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/skotvarg/purecss-onefile)

## Stats

[![NPM](https://nodei.co/npm/purecss-onefile.png?downloads=true)](https://nodei.co/npm/purecss-onefile/)


# PureCSS-OneFile

Work with PureCss and Sass, from one place, with a single file for your projects.
Using Gulp, Babel and ES6.

# Installation before using PureCss-OneFile

If you have problems, you may need to install one of these dependencies in your global environment.

* [Yarn](https://yarnpkg.com/)
* [Gulp-Cli](https://gulpjs.com/)
* [node-notifier-cli](node-notifier-cli)

## Dependencies

 * Based on [PureCSS](https://purecss.io/).
 * Precompiler [Sass](http://sass-lang.com/).
 * Use [Gulp](https://gulpjs.com/).
 * ECMAScript 6 con [Babel](https://babeljs.io/).

## Install Yarn

```sh
yarn add -D purecss-onefile
```

## Commands gulp

| Command | description |
| :---: | :---:|
| gc  | compiles the gulp file, written in Es6 to Es5. |
| sassC | compiles the Sass/Scss files to Css, from their respective folders. |
| concatC | concatenates the PureCss files, selected from the files-purecss.js file. |
| miniC | minimizes the file created with the concatC command. |
| pureC | concatenates the pure-min file with the sass/scss/css files that the developer creates. |
| miniP | Minimizes the file created with pureC. |
| completeSC | compiles the gulp file, concatenates and minimizes the selected purecss files into the files-purecss.js file and notifies. |
| completeSP | compiles the gulp file, concatenates and minimizes the selected Purecss and Sass" files, and notifies. |

# How to use completeSC

The files available for occupancy are found in files-purecss.js, which will be added to the concatCompound task found in gulpfilesEs6.js in the gulp.src section.

# License MIT
===========

Copyright (c) 2017 Michael Scott B

For more information see the [LICENSE file][]

[LICENSE file]: 