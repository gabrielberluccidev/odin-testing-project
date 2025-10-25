import { capitalize, reverseString, calculation } from './main.js';
import { expect, test } from '@jest/globals';

// test('sol will be Sol', () => {
//   expect(capitalize('sol')).toBe('Sol');
// });

// test('empty will be empty?', () => {
//   expect(capitalize('')).toBe('');
// });

// test('oi => io', () => {
//   expect(reverseString('oi')).toBe('io');
// });

// test('gabriel => leirbag', () => {
//   expect(reverseString('oi')).toBe('io');
// });

test('1.5 + 2 = 3.5', () => {
  expect(calculation.add(1, 2)).toBe(3);
});

test('1 - 2 = -1', () => {
  expect(calculation.substract(1, 2)).toBe(-1);
});

test('1 * 2 = 2', () => {
  expect(calculation.multiply(1, 2)).toBe(2);
});

test('10 / 2 = 5', () => {
  expect(calculation.divide(10, 2)).toBe(5);
});
