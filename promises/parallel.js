function foo() {
	return Promise.all([
		new Promise((resolve, reject) => {
			resolve('foo');
		}),
		new Promise((resolve, reject) => {
			resolve('bar');
		}),
	]);
}

foo().then((values) => {
	console.log('done:', values);
});
