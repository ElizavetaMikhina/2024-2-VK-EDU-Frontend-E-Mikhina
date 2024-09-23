/*
 * Необходимо покрыть все возможные
 * и невозможные кейсы. Например,
 * convertBytesToHuman(-1) === false,
 * convertBytesToHuman(-1) !== '1 B',
 * convertBytesToHuman('string') === false
 * convertBytesToHuman(5) === '5 B'
 */

import convertBytesToHuman from './convertBytesToHuman';

test('Возвращает false для строк', () => {
  expect(convertBytesToHuman('123')).toBe(false);
  expect(convertBytesToHuman('string')).toBe(false);
});

test('Возвращает false для объектов, массивов и функций', () => {
  expect(convertBytesToHuman([54845, 15418, 85485])).toBe(false);
  expect(convertBytesToHuman({number: 18181, string: '1618998'})).toBe(false);
  expect(convertBytesToHuman(function a (b) {return b * b})).toBe(false);
});

test('Возвращает false для других типов', () => {
  expect(convertBytesToHuman(null)).toBe(false);
  expect(convertBytesToHuman(undefined)).toBe(false);
  expect(convertBytesToHuman(NaN)).toBe(false);
});

test('Возвращает false для отрицательных чисел и бесконечности', () => {
  expect(convertBytesToHuman(-153)).toBe(false);
  expect(convertBytesToHuman(Infinity)).toBe(false);
});

test('Возвращает корректное значение для чисел', () => {
  expect(convertBytesToHuman(0)).toBe('0 B' );
  expect(convertBytesToHuman(5)).toBe('5 B' );
  expect(convertBytesToHuman(123987)).toBe('121.08 KB' );
  expect(convertBytesToHuman(123987586)).toBe('118.24 MB' );
  expect(convertBytesToHuman(1048576)).toBe('1 MB');
});

test('Возвращает корректные значения для больших чисел', () => {
  expect(convertBytesToHuman(1596745839641)).toBe('1.45 TB');
  expect(convertBytesToHuman(5688356485)).toBe('5.30 GB');
});