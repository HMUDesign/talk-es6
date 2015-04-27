function foo() {
	return Promise.resolve()
		.then(() => {
			return new Promise((resolve, reject) => {
				resolve('foo');
			});
		})
		.then((last) => {
			return new Promise((resolve, reject) => {
				resolve(last + ' bar');
			});
		})
	;
}

foo().then((value) => {
	console.log('done:', value);
});
