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
