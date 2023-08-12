const reverse = require('./index');

test('Reverse function exists', () => {
  expect(reverse).toBeDefined();
});

test('Reverse reverses a string', () => {
  expect(reverse('qwer')).toEqual('rewq');
});

test('Reverse reverses a string', () => {
  expect(reverse('!  abcd')).toEqual('dcba  !');
});