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
