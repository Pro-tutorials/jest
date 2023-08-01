import isEven from './isEven.js';

describe('Check if a number is even', () => {
    describe('Suite 1', () => {
        test.only('expect 4 to be even', () => {
            expect(isEven(4)).toBe(true);
        });

        test('expect 3 to not be even', () => {
            expect(isEven(3)).toBe(false);
        });
    });

    describe('Suite 2', () => {
        test('expect 2 to be even', () => {
            expect(isEven(2)).toBe(true);
        });
    });
});
