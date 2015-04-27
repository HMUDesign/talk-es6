# Generators

## Basic

```javascript
function *Bar() {
	yield 0;
	yield 1;
	yield 2;
}

let foo = Bar();

console.log(foo.next());
console.log(foo.next());
console.log(foo.next());
console.log(foo.next());
```

## Range

```javascript
function * range(start, end, step = 1) {
	while (start < end) {
		yield start;
		
		start += step;
	}
}
 
for (let i of range(0, 10)) {
	console.log('(0, 10)', i);
}

for (let i of range(0, 10, 2)) {
	console.log('(0, 10, 2)', i);
}
```

## Fibonacci

```javascript
function *Fibonacci() {
	let fn1 = 0;
	let fn2 = 1;
	
	yield fn2;
	
	while(true) {
		let fn = fn1 + fn2;
		yield fn;
		
		fn1 = fn2;
		fn2 = fn;
	}
}

let sequence = Fibonacci();
for(let i = 0; i < 11; i++) {
	console.log(sequence.next().value);
}
```
