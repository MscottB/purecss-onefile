[![NPM version](https://badge.fury.io/js/purecss-onefile.svg)](https://badge.fury.io/js/purecss-onefile)
[![GitHub version](https://badge.fury.io/gh/skotvarg%2Fpurecss-onefile.svg)](https://badge.fury.io/gh/skotvarg%2Fpurecss-onefile)
[![David](https://img.shields.io/david/dev/expressjs/express.svg)](https://github.com/skotvarg/purecss-onefile)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/skotvarg/purecss-onefile)

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
```
./purecss-onefile/onefile-pure.css
```

**Minified**:
```
./purecss-onefile/onefile-pure.min.css
```

**Compound**, in this compilation select the modules to compile, include the custom folder.

_Deliver the following files:_


**Original**:
```
./purecss-onefile/onefile-compound.css
```

**Minified**:
```
./purecss-onefile/onefile-compound.min.css
```

**Sass Pure**, Includes compilation in the compilation process of pure.

**Sass Compound**, Includes compilation in the compilation process of compound.

## Add in angular

```
"styles": [
        "../purecss-onefile/onefile-pure.min.css"
      ],
```  
# License
===========

Copyright (c) 2017 Michael Scott B

Licensed under MIT license