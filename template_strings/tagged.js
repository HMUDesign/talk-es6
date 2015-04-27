function foo(literals, ...substitutions) {
	let result = literals[0];
	
	for(let i = 0; i < substitutions.length; i++) {
		result += substitutions[i] + literals[i + 1];
	}
	
	return result;
}

let a = 1;
let b = 2;

console.log(foo`${ a } + ${ b } = ${ a + b}`);
