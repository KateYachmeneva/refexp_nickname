import Validator from '../js/user';

test('Метод должен возвращать правду, при верном имени', () => {
  expect(new Validator().validateUsername('Rem-bo_cool')).toBeTruthy();
});

test('Метод должен возвращать правдy, при имени с цифрами в середиине слова', () => {
  expect(() => new Validator().validateUsername('Rem-bo100_cool')).toBeTruthy();
});
test('Метод должен возвращать ошибку, при имени с цифрами в начале слова', () => {
  expect(() => new Validator().validateUsername('100Rembo')).toThrow();
});
test('Метод должен возвращать ошибку, если имя содержит _ в начале слова', () => {
  expect(() => new Validator().validateUsername('_Rembo')).toThrow();
});
test('Метод должен возвращать ошибку, если имя содержит - в начале слова', () => {
  expect(() => new Validator().validateUsername('-Rembo')).toThrow();
});
test('Метод должен возвращать ошибку, при имени с цифрами в конце слова', () => {
  expect(() => new Validator().validateUsername('Rembo98')).toThrow();
});

test('Метод должен возвращать ошибку, если имя содержит _ в конце слова', () => {
  expect(() => new Validator().validateUsername('Rembo_')).toThrow();
});
test('Метод должен возвращать ошибку, если имя содержит - в конце слова', () => {
  expect(() => new Validator().validateUsername('Rembo-')).toThrow();
});
test('Метод должен возвращать ошибку, если имя содержит # в начале слова', () => {
  expect(() => new Validator().validateUsername('#Rembo')).toThrow();
});
test('Метод должен возвращать ошибку, если имя содержит @ в начале слова', () => {
  expect(() => new Validator().validateUsername('@Rembo')).toThrow();
});
