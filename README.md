# JS Match
Simple little JS match function.

# Install

```
npm i -s @belsrc/match
```

# Use

```js
const arr = [ 1, 2 ];
const hello = () => 'world';

const matchRnd = Match.create([
  [ 'foo', 'bar' ],
  [ hello, 'its a func' ],
  [ arr, 'its an array' ],
  [ '_', 'default val' ],
]);

console.log(matchRnd(hello));
// >> its a func

console.log(matchRnd(arr));
// >> its an array

console.log(matchRnd(() => 'world'));
// >> default val

```

## LICENCE

[MIT](LICENCE)
