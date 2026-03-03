const math = require('../math');

test('soma 2 + 3 igual a 5', () => {
  expect(math.add(2, 3)).toBe(5);
});
