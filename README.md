# PureCSS-OneFile
Concatenation of the files that are in the "build" folder, to generate a single file and work in a more comfortable way.

## Based on [PureCSS](https://purecss.io/) 0.6.2

## Install NPM

```
npm install purecss-onefile --save-dev
```

## Install Yarn

```
yarn add -D purecss-onefile
```

## Commands gulp

```
>gulp pure

>gulp compound
```
## Two ways to compile Pure CSS:

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


## Add in angular

```
"styles": [
        "../purecss-onefile/onefile-pure.min.css"
      ],
```  
# MIT License
===========

Copyright (c) 2017 Michael Scott Bravo

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.