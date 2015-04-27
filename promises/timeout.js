function timeout(duration = 0) {
	return new Promise((resolve, reject) => {
		setTimeout(resolve, duration);
	});
}

var p = timeout(1000)
	.then(() => {
		console.log('foo');
		return timeout(1000);
	})
	.then(() => {
		console.log('bar');
	})
;
