function *filter(items, iterator) {
	for(let [ index, value ] of items.entries()) {
		let keep = iterator(value, index);
		
		if(!keep) continue;
		
		yield value;
	}
}

let values = [1, 2, 3, 4, 5];
let odd = filter(values, (value) => {
	return value % 2;
});

for (let i of odd) {
	console.log(i)
}

/*
while(true) {
	let result = odd.next();
	
	console.log(result);
	
	if(result.done) break;
}
*/
