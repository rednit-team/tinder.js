import TinderJS from '.';

test('Test creating client with default config in node.js', () => {
  expect(() => new TinderJS()).toThrow(
    'You cannot use redirect auth in a not web environment',
  );
});

test('Tests if you can create a client with x-Auth-Token', () => {
  expect(
    () =>
      new TinderJS({
        xAuthToken: '',
      }),
  ).not.toThrowError();
});

test('Tests if you can create a client without any config', () => {
  expect(() => new TinderJS({})).toThrowError();
});
