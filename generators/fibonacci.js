function *Fibonacci() {
	let fn1 = 0;
	let fn2 = 1;
	
	yield fn2;
	
	while(true) {
		let fn = fn1 + fn2;
		yield fn;
		
		fn1 = fn2;
		fn2 = fn;
	}
}

let sequence = Fibonacci();
for(let i = 0; i < 11; i++) {
	console.log(sequence.next().value);
}
