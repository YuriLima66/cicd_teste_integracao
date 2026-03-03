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

test('divide por zero retorna Infinity', () => {
  expect(math.divide(1, 0)).toBe(Infinity);
});

test('potencia 2 ^ 3 igual a 8', () => {
  expect(math.pow(2, 3)).toBe(8);
});

test('mod 10 % 3 igual a 1', () => {
  expect(math.mod(10, 3)).toBe(1);
});

test('fatorial 5 igual a 120', () => {
  expect(math.factorial(5)).toBe(120);
});

test('fatorial 0 igual a 1', () => {
  expect(math.factorial(0)).toBe(1);
});

test('fatorial negativo lança erro', () => {
  expect(() => math.factorial(-1)).toThrow();
});
