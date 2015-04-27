# Classes

## Basic Usage

```javascript
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
```

## Getters and Setters

```javascript
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
```

## Static Methods

```javascript
class Square {
	static inscribeInCircle(radius) {
		return new Square(radius * Math.sqrt(2));
	}
	
	constructor(side) {
		this.side = side;
	}
}

class Circle {
	static inscribeInSquare(side) {
		return new Circle(side / 2);
	}
	
	constructor(radius) {
		this.radius = radius;
	}
}
```
