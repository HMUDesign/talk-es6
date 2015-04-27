let values = [1, 2, 3, 4, 5];

let sum1 = values.reduce((current, value) => {
	return current + value;
}, 0);

let sum2 = values.reduce((current, value) => {
	return current + value;
});

console.log(sum1, sum2);
