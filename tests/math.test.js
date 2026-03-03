const math = require('../math');

test('soma 2 + 3 igual a 5', () => {
  expect(math.add(2, 3)).toBe(5);
});

test('subtrai 5 - 2 igual a 3', () => {
  expect(math.subtract(5, 2)).toBe(3);
});

test('multiplica 4 * 6 igual a 24', () => {
  expect(math.multiply(4, 6)).toBe(24);
});

test('divide 20 / 4 igual a 5', () => {
  expect(math.divide(20, 4)).toBe(5);
});
