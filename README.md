## Usage

The examples in this repo were created to be run using [Traceur](https://github.com/google/traceur-compiler), "a JavaScript.next-to-JavaScript-of-today compiler that allows you to use features from the future today".

To run the examples standalone, the easiest way is to install traceur then execute the files as you would with node (note that traceur does not auto-add the .js extension as node does).

```bash
npm install -g traceur
traceur script.js
```

Alternately, you can use traceur-repl to run live code.

```bash
npm install -g traceur-repl
traceur-repl
```

Finally, if you want to use es6 in production, I would suggest using [JSPM](http://jspm.io/) as it supports ES6 via traceur and ES5 via AMD and CommonJS. This last ability means it can import/require nodejs modules as well.

## Compatibility

Want to use ES6? Check the [compatibility table](https://kangax.github.io/compat-table/es6/).

## Features

### [Arrow Functions](arrow_functions)

### [Classes](classes)
