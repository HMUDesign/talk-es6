let foo = {
	value: 0,
	
	next() {
		return new Promise((resolve, reject) => {
			resolve(this.value++);
		});
	},
	
	bar() {
		setInterval(() => {
			this.next().then((value) => {
				console.log(value);
			});
		}, 500);
	},
};

foo.bar();
