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

for (let i of sum1) {
	console.log('sum1', i)
}

let sum2 = reduce(values, (current, value) => {
	return current + value;
});

for (let i of sum2) {
	console.log('sum2', i)
}
