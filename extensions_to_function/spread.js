function foo( a, b, c ) {
	console.log( a, b, c );
}

let bc = [ 1, 2 ];
foo(1, ...bc);
