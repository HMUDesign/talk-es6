function *Bar() {
	yield 10;
	yield 20;
	yield 30;
}

let foo;

foo = Bar();
console.log(foo.next());
console.log(foo.next());
console.log(foo.next());
console.log(foo.next());

foo = Bar();
for(let value of foo) {
	console.log(value);
}
