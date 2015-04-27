function foo([ a, b = 1 ]) {
	console.log(a, b);
}

foo([ 2 ]);
foo([ 2, 3 ]);
