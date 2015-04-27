function * range(start, end, step = 1) {
	while (start < end) {
		yield start;
		
		start += step;
	}
}

for(let i of range(0, 10)) {
	console.log('(0, 10)', i);
}

for(let i of range(0, 10, 2)) {
	console.log('(0, 10, 2)', i);
}
