/* eslint-disable fp/no-unused-expression */
import '@babel/register';
import Match from './index';

const arr = [ 1, 2 ];
const hello = name => `Hello, ${ name }`;

describe('Match', () => {
  beforeEach(() => {
    jest.resetModules();
    jest.clearAllMocks();
  });

  test('should correctly match from base object', () => {
    const matchString = Match.create({
      hello: 'world',
      _: 'nope',
    });

    const actual = matchString('hello');

    expect(actual).toEqual('world');
  });

  test('should correctly match from base jagged array', () => {
    const matchString = Match.create([
      [ 'foo', 'bar' ],
      [ 'hello', 'world' ],
      [ '_', 'default val' ],
    ]);

    const actual = matchString('foo');

    expect(actual).toEqual('bar');
  });

  test('should correctly match on string', () => {
    const matchString = Match.create({
      foo: 'bar',
      _: 'nope',
    });

    const actual = matchString('foo');

    expect(actual).toEqual('bar');
  });

  test('should correctly match on number', () => {
    const matchString = Match.create([
      [ 'foo', 'bar' ],
      [ 1, 'its a number' ],
      [ '_', 'default val' ],
    ]);

    const actual = matchString(1);

    expect(actual).toEqual('its a number');
  });

  test('should correctly match on array', () => {
    const matchString = Match.create([
      [ 'foo', 'bar' ],
      [ arr, 'its an array' ],
      [ '_', 'default val' ],
    ]);

    const actual = matchString(arr);

    expect(actual).toEqual('its an array');
  });

  test('should correctly match on function', () => {
    const matchString = Match.create([
      [ 'foo', 'bar' ],
      [ hello, 'its a function' ],
      [ '_', 'default val' ],
    ]);

    const actual = matchString(hello);

    expect(actual).toEqual('its a function');
  });

  test('should correctly fall through to default', () => {
    const matchString = Match.create([
      [ 'foo', 'bar' ],
      [ hello, 'its a function' ],
      [ '_', 'default val' ],
    ]);

    const actual = matchString(43);

    expect(actual).toEqual('default val');
  });
});
