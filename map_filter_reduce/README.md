# Map, Filter, Reduce

## Map

```javascript
let values = [1, 2, 3, 4, 5];
let squared = values.map((value) => {
	return value * value;
});

console.log(squared);
```

### Lazily, with Generators!

```javascript
function *map(items, iterator) {
	for(let [ index, value ] of items.entries()) {
		yield iterator(value, index);
	}
}

let values = [1, 2, 3, 4, 5];
let squared = map(values, (value) => {
	return value * value;
});

while(true) {
	let result = squared.next();
	
	console.log(result);
	
	if(result.done) break;
}
```

## Filter

```javascript
let values = [1, 2, 3, 4, 5];
let odd = values.filter((value) => {
	return value % 2;
});

console.log(odd);
```

### Lazily, with Generators!

```javascript
function *filter(items, iterator) {
	for(let [ index, value ] of items.entries()) {
		let keep = iterator(value, index);
		
		if(!keep) continue;
		
		yield value;
	}
}

let values = [1, 2, 3, 4, 5];
let squared = filter(values, (value) => {
	return value % 2;
});

while(true) {
	let result = squared.next();
	
	console.log(result);
	
	if(result.done) break;
}
```

## Reduce

```javascript
let values = [1, 2, 3, 4, 5];

let sum1 = values.reduce((current, value) => {
	return current + value;
}, 0);

let sum2 = values.reduce((current, value) => {
	return current + value;
});

console.log(sum1, sum2);
```

### Lazily, with Generators!

```javascript
function *reduce(items, iterator, current) {
	for(let [ index, value ] of items.entries()) {
		if(index === 0 && typeof current === 'undefined') {
			current = items[0];
			continue;
		}
		
		current = iterator(current, value, index);
		yield current;
	}
}

let values = [1, 2, 3, 4, 5];

let sum1 = reduce(values, (current, value) => {
	return current + value;
}, 0);

while(true) {
	let result = sum1.next();
	
	console.log(result);
	
	if(result.done) break;
}

let sum2 = reduce(values, (current, value) => {
	return current + value;
});

while(true) {
	let result = sum2.next();
	
	console.log(result);
	
	if(result.done) break;
}
```
