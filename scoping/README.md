# Scoping

## Let

```javascript
function foo() {
	{
		var a = 0;
		let b = 1;
		
		console.log(a);
		console.log(b);
	}
	
	console.log(a);
	console.log(b);
}

foo();
```

## Const

```javascript
function foo() {
	let foo = 1;
	const bar = 2;
	
	console.log(foo, bar);
}

function foo() {
	let foo = 1;
	const bar = 2;
	
	foo = 3;
	bar = 4;
	
	console.log(foo, bar);
}
```
