# Extensions to Array

```javascript
let items = [1, 2, 3];

Array.from( items.keys() );
Array.from( items.values() );
Array.from( items.entries() );

for (let [ index, value ] of items.entries()) {
	console.log('item', index, 'is', value);
}
```
