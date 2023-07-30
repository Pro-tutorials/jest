import checkIfItemInArray from './checkIfItemInArray.js';

describe('check if item exists in an array', () => {
    describe('Use toContain matcher', () => {
        test('[1,2,3,4] contains 3', () => {
            expect([1, 2, 3, 4]).toContain(3);
        });

        test('["Hello", "bye"] not contains 3', () => {
            expect(['Hello', 'bye']).not.toContain(3);
        });
    });
    describe('Basic tests', () => {
        test('[1,2,3,4,5,6], 2 -> true', () => {
            const actual = checkIfItemInArray([1, 2, 3, 4, 5, 6], 2);
            expect(actual).toBe(true);
        });

        test('[1,4], 10 -> false', () => {
            const actual = checkIfItemInArray([1, 4], 10);
            expect(actual).toBe(false);
        });

        test('["hello", "bye"], "bye" -> true', () => {
            const actual = checkIfItemInArray(['hello', 'bye'], 'bye');
            expect(actual).toBe(true);
        });
    });

    describe('Error tests', () => {
        test('"test", "hi" -> typeError', () => {
            expect(() => checkIfItemInArray('test', 'hi')).toThrow(TypeError);
        });
    });
});
