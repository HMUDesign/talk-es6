class Animal {
	constructor(name) {
		console.log('constructing Animal', name);
		
		this.name = name;
	}
	
	speak() {
		console.log(this.sound);
	}
}

class Dog extends Animal {
	constructor(name) {
		super(name);
		
		console.log('constructing Dog', name);
		
		this.sound = 'bark';
	}
}

let brandy = new Dog('brandy');
brandy.speak();
