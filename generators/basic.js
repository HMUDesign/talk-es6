function *Bar() {
	yield 0;
	yield 1;
	yield 2;
}

let foo = Bar();

console.log(foo.next());
console.log(foo.next());
console.log(foo.next());
console.log(foo.next());
