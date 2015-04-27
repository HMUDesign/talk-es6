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
