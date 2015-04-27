class Person {
	constructor(name) {
		this.name = name;
	}
	
	toString() {
		return this.name;
	}
	
	get name() {
		return [this.first_name, this.last_name].join(' ');
	}
	
	set name(name) {
		name = name.split(' ');
		this.first_name = name[0];
		this.last_name = name[1];
	}
	
	introduce(person) {
		if(person) {
			return `Hello, ${ person.first_name }. My name is ${ this.name }.`
		}
		
		return `Hello. My name is ${this.name}.`
	}
}

let lovecraft = new Person('Abdul Alhazred');
console.log(lovecraft.introduce());

let tom = new Person('Tom Collins');
console.log(tom.introduce(lovecraft));
