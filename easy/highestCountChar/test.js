const highestCountChar = require('./index');

test('highestCountChar function exists', () => {
  expect(typeof highestCountChar).toEqual('function');
});

test('Finds the most frequently used char', () => {
  expect(highestCountChar('a')).toEqual('a');
  expect(highestCountChar('abcdefghijklmnaaaaa')).toEqual('a');
});

test('Works with numbers in the string', () => {
  expect(highestCountChar('ab1c1d1e1f1g1')).toEqual('1');
});
