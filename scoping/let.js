function foo() {
	{
		var a = 0;
		let b = 1;
		
		console.log(a);
		console.log(b);
	}
	
	console.log(a);
	console.log(b);
}

foo();
