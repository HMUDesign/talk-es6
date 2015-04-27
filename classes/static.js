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
