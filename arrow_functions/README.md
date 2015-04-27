# Arrow Functions

## Lambda-like Syntax

```javascript
let square = x => x * x;
let add = (a, b) => a + b;

square(2);
add(2, 3);
```

## Maintains Context

```javascript
let foo = {
	value: 0,
	
	next() {
		return new Promise((resolve, reject) => {
			resolve(++this.value);
		});
	},
	
	bar() {
		setInterval(() => {
			this.next().then((value) => {
				console.log(value, this.value);
			});
		}, 500);
	},
};

foo.bar();

```
