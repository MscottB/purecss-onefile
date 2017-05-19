[![NPM version](https://badge.fury.io/js/purecss-onefile.svg)](https://badge.fury.io/js/purecss-onefile)
[![GitHub version](https://badge.fury.io/gh/skotvarg%2Fpurecss-onefile.svg)](https://badge.fury.io/gh/skotvarg%2Fpurecss-onefile)
[![David](https://img.shields.io/david/dev/expressjs/express.svg)](https://github.com/skotvarg/purecss-onefile)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/skotvarg/purecss-onefile)

## Stats

[![NPM](https://nodei.co/npm/purecss-onefile.png?downloads=true)](https://nodei.co/npm/purecss-onefile/)


# PureCSS-OneFile
Concatenation of the files that are in the "build" folder, to generate a single file and work in a more comfortable way. It also includes the sass precompiler.

## Dependencies

 * Based on [PureCSS](https://purecss.io/)
 * Includes precompiler [Sass](http://sass-lang.com/)


## Install NPM

```sh
npm install purecss-onefile --save-dev
```

## Install Yarn

```sh
yarn add -D purecss-onefile
```

## Commands gulp

```
>gulp pure

>gulp compound

>gulp sass-p

>gulp sass-c
```
## Four ways to compile Pure CSS:

**Pure**, which contains the main(pure.css), plus the files included in the purecss-custom folder.

_Deliver the following files:_


**Original**:
```json
./purecss-onefile/onefile-pure.css
```

**Minified**:
```json
./purecss-onefile/onefile-pure.min.css
```

**Compound**, in this compilation select the modules to compile, include the custom folder.

Modules available:
```javascript
return gulp.src([
      "node_modules/purecss/build/base.css",
      "node_modules/purecss/build/base-context.css",
      "node_modules/purecss/build/buttons.css",
      "node_modules/purecss/build/buttons-core.css",
      "node_modules/purecss/build/forms.css",
      "node_modules/purecss/build/forms-nr.css",
      "node_modules/purecss/build/grids.css",
      "node_modules/purecss/build/grids-core.css",
      "node_modules/purecss/build/grids-responsive.css",
      "node_modules/purecss/build/grids-responsive-old-ie.css",
      "node_modules/purecss/build/grids-units.css",
      "node_modules/purecss/build/menus.css",
      "node_modules/purecss/build/menus-core.css",
      "node_modules/purecss/build/menus-dropdown.css",
      "node_modules/purecss/build/menus-horizontal.css",
      "node_modules/purecss/build/menus-scrollable.css",
      "node_modules/purecss/build/menus-skin.css",
      "node_modules/purecss/build/tables.css",
      "purecss-custom/*.css"
    ])
```

_Deliver the following files:_

**Original**:
```json
./purecss-onefile/onefile-compound.css
```

**Minified**:
```json
./purecss-onefile/onefile-compound.min.css
```

**Sass Pure**, Includes compilation in the compilation process of pure.

**Sass Compound**, Includes compilation in the compilation process of compound.

## Add in angular

```json
"styles": [
        "../purecss-onefile/onefile-pure.min.css"
      ],
```  
# License MIT
===========

Copyright (c) 2017 Michael Scott B

For more information see the [LICENSE file][]

[LICENSE file]: https://github.com/skotvarg/purecss-onefile/blob/master/LICENSE.md