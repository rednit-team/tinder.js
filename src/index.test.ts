import TinderJS from '.';

test('Test creating client with default config in node.js', () => {
  expect(() => new TinderJS()).toThrowError();
});

test('Tests if you can create a client with x-Auth-Token', () => {
  expect(
    () =>
      new TinderJS({
        xAuthToken: 'token',
      }),
  ).not.toThrowError();
});

test('Tests if you can create a client without any config', () => {
  expect(() => new TinderJS({})).toThrowError();
});
