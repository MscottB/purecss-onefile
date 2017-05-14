# PureCSS-OneFile
Concatenation of the files that are in the "build" folder, to generate a single file and work in a more comfortable way.

## Based on [PureCSS](https://purecss.io/) 0.6.2

## Add custom code

Every new CSS file is added to the **purecss-custom** folder, and then run the gulp command to get a new **_Onefile.css_**.

## Add in angular

```
"styles": [
        "../purecss-onefile/onefile.min.css"
      ],
```  
