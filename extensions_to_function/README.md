# Extensions to Function

## Default Parameters

```javascript
function foo(a, b = 1) {
	console.log(a, b);
}

foo(2);
foo(2, 3);
```

### with Array Destructuring

```javascript
function foo([ a, b = 1 ]) {
	console.log(a, b);
}

foo([ 2 ]);
foo([ 2, 3 ]);
```

### with Object Destructuring

```javascript
function foo({ a, b = 1 }) {
	console.log(a, b);
}

foo({ a: 2 });
foo({ a: 2, b: 3 });
```

## Rest Parameters

```javascript
function foo( a, ...bc ) {
	console.log( a, bc );
}

foo(1, 2, 3);
```

## Spread Operator

```javascript
function foo( a, b, c ) {
	console.log( a, b, c );
}

let bc = [ 1, 2 ];
foo(1, ...bc);
```
