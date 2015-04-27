# Extensions to Object

## Shorthand

```javascript
let foo = 'foo';
let bar = 'bar';

let foobar = { foo, bar };
console.log(foobar);
```

## Methods

```javascript
let foobar = {
	foo: function() {
		console.log('foo');
	},
	
	bar() {
		console.log('bar');
	},
}

foobar.foo();
foobar.bar();
```

## Dynamic Property Names

```javascript
let answer = 42;

let object = {
	['foo_' + answer]: 'foo',
	['bar_' + answer]: 'bar',
}

console.log(object);
```
