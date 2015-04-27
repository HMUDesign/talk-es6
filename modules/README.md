# Modules

## Named Exports

named_lib.js:
```javascript
export const sqrt = Math.sqrt;

export function square(x) {
	return x * x;
}

export function hypotenuse(x, y) {
	return sqrt(square(x) + square(y));
}
```

named.js:
```javascript
import { square, hypotenuse } from 'named_lib.js';

console.log('2 ^ 2 =', square(2));
console.log('3 ^ 2 + 4 ^ 2 = ', hypotenuse(3, 4), '^ 2');
```

## Default Exports

default_foobar.js:
```javascript
export default class Foobar {
	constructor() {
		this.foo = 'bar';
	}
}
```

default.js
```javascript
import FooBar from 'default_foobar.js';

let foobar = new FooBar();

console.log(foobar, foobar.constructor.name);
```
