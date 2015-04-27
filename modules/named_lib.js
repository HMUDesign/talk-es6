export const sqrt = Math.sqrt;

export function square(x) {
	return x * x;
}

export function hypotenuse(x, y) {
	return sqrt(square(x) + square(y));
}
