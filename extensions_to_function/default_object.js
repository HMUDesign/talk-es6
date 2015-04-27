function foo({ a, b = 1 }) {
	console.log(a, b);
}

foo({ a: 2 });
foo({ a: 2, b: 3 });
