function foo() {
	return new Promise((resolve, reject) => {
		resolve('foo');
	})
}

foo().then((value) => {
	console.log('done', value);
});
