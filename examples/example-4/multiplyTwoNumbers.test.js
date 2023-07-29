import multiplyTwoNumbers from './multiplyTwoNumbers.js';

describe('multiply two numbers', () => {
    describe('Basic tests', () => {
        test('should return a number greater than 10', () => {
            expect(multiplyTwoNumbers(5, 3)).toBeGreaterThan(10);
        });

        test('should return a number greater than or equal to 0', () => {
            expect(multiplyTwoNumbers(5, 0)).toBeGreaterThanOrEqual(0);
        });

        test('should return a number less than -5', () => {
            expect(multiplyTwoNumbers(-2, 3)).toBeLessThan(-5);
        });

        test('should return a number less than or equal to 50', () => {
            expect(multiplyTwoNumbers(5, 10)).toBeLessThanOrEqual(50);
        });

        test('should return a number close to 3.14', () => {
            expect(multiplyTwoNumbers(22, 7.4)).toBeCloseTo(162.7999);
        });
    });

    describe('throw typeError', () => {
        test('should throw TypeError when non-number values are passed', () => {
            expect(() => multiplyTwoNumbers('a', 3)).toThrow(TypeError);
        });
        test('should throw TypeError when non-number values are passed', () => {
            expect(() => multiplyTwoNumbers(2, 'b')).toThrow(TypeError);
        });
    });
});
