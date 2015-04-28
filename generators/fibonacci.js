function *Fibonacci() {
	let fn2 = 0;
	let fn1 = 1;
	
	yield fn1;
	
	while(true) {
		let fn = fn1 + fn2;
		yield fn;
		
		fn2 = fn1;
		fn1 = fn;
	}
}

let sequence = Fibonacci();
for(let i = 0; i < 11; i++) {
	console.log(sequence.next().value);
}
