function foo() {
	return new Promise((resolve, reject) => {
		reject('foo');
	})
}

foo()
	.then((value) => {
		console.log('done', value);
	})
	.catch((err) => {
		console.log('error', err);
	})
;


function bar() {
	return new Promise((resolve, reject) => {
		throw new Error('bar');
	})
}

bar()
	.then((value) => {
		console.log('done', value);
	})
	.catch((err) => {
		console.log('error', err);
	})
;
