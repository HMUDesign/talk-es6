class Animal {
	constructor(name) {
		console.log('constructing Animal', name);
		
		this.name = name;
	}
	
	speak() {
		return this.sound;
	}
}

class Dog extends Animal {
	constructor(name) {
		super(name);
		
		console.log('constructing Dog', name);
		
		this.sound = 'bark';
	}
	
	speak() {
		return this.name + ' says "' + super.speak() + '!"';
	}
}

let brandy = new Dog('brandy');
console.log(brandy.speak());
