# Template Strings

## Basic

```javascript
let a = 1;
let b = 2;

console.log(`${ a } + ${ b } = ${ a + b}`);
```

## Multiline

```javascript
let a = 1;
let b = 2;

console.log(`${ a } + ${ b }
= ${ a + b}`);
```

## Tagged

```javascript
function foo(literals, ...substitutions) {
	let result = literals[0];
	
	for(let i = 0; i < substitutions.length; i++) {
		result += substitutions[i] + literals[i + 1];
	}
	
	return result;
}

let a = 1;
let b = 2;

console.log(foo`${ a } + ${ b } = ${ a + b}`);
```

### Use Cases

#### i18n

```javascript
let name = 'Bob';
let amount = 100;

i18n`Hello ${name}, you have ${amount}:c(CAD) in your bank account.`
```

If the current locale is set to German, the result would be:
```
'Hallo Bob, Sie haben 1.234,56 $CA auf Ihrem Bankkonto.'
```

[Source](http://jaysoo.ca/2014/03/20/i18n-with-es6-template-strings/)

#### HTML Escaping

```javascript
html`<p title="${title}">Hello ${you}!</p>`
```

[Source](http://updates.html5rocks.com/2015/01/ES6-Template-Strings)
