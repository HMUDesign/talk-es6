# Promises

## Basic

```javascript
function foo() {
	return new Promise((resolve, reject) => {
		resolve('foo');
	})
}

foo().then((value) => {
	console.log('done', value);
});
```

## Series

```javascript
function foo() {
	return Promise.resolve()
		.then(() => {
			return new Promise((resolve, reject) => {
				resolve('foo');
			});
		})
		.then((last) => {
			return new Promise((resolve, reject) => {
				resolve(last + ' bar');
			});
		})
	;
}

foo().then((value) => {
	console.log('done:', value);
});
```

## Parallel

```javascript
function foo() {
	return Promise.all([
		new Promise((resolve, reject) => {
			resolve('foo');
		}),
		new Promise((resolve, reject) => {
			resolve('bar');
		}),
	]);
}

foo().then((values) => {
	console.log('done:', values);
});
```

## Errors

```javascript
function foo() {
	return new Promise((resolve, reject) => {
		reject('foo');
	})
}

foo()
	.then((value) => {
		console.log('done', value);
	})
	.catch((err) => {
		console.log('error', err);
	})
;


function bar() {
	return new Promise((resolve, reject) => {
		throw new Error('bar');
	})
}

bar()
	.then((value) => {
		console.log('done', value);
	})
	.catch((err) => {
		console.log('error', err);
	})
;
```

## Timeout

```javascript
function timeout(duration = 0) {
	return new Promise((resolve, reject) => {
		setTimeout(resolve, duration);
	});
}

var p = timeout(1000)
	.then(() => {
		console.log('foo');
		return timeout(1000);
	})
	.then(() => {
		console.log('bar');
	})
;
```