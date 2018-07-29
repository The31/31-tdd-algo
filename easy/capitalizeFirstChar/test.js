const capitalizeFirstChar = require('./index');

test('capitalizeFirstChar is a function', () => {
  expect(typeof capitalizeFirstChar).toEqual('function');
});

test('capitalizes the first letter of every word in a sentence', () => {
  expect(capitalizeFirstChar('hi there, how is it going?')).toEqual(
    'Hi There, How Is It Going?'
  );
});

test('capitalizes the first letter', () => {
  expect(capitalizeFirstChar('i love breakfast at bill miller bbq')).toEqual(
    'I Love Breakfast At Bill Miller Bbq'
  );
});
