# Destructuring

## Array Destructuring

```javascript
let [ one, two ] = [ 1, 2 ];
console.log('one =', one, '; two =', two);
```

### in Function calls

```javascript
function foo([one, two]) {
	console.log('one =', one, '; two =', two);
}

foo([1,2]);
```

## Object Destructuring

```javascript
let {three, four} = {three: 3, four:  4};
console.log('three =', three, '; four =', four);
```

### in Function calls

```javascript
function foo({ three, four }) {
	console.log('three =', three, '; four =', four);
}

foo({ three: 3, four: 4 });
```
