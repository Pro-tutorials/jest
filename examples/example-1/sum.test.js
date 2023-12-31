import sum from './sum.js';

describe('Sum two numbers', () => {
    describe('Basic Addition', () => {
        test('adds 1 + 2 to equal 3', () => {
            expect(sum(1, 2)).toBe(3);
        });

        test('adds -1 + 1 to equal 0', () => {
            expect(sum(-1, 1)).toBe(0);
        });

        test('adds 0 + 0 to equal 0', () => {
            expect(sum(0, 0)).toBe(0);
        });

        test('2 + 5 to equal 7', () => {
            expect(sum(2, 5)).toBe(7);
        });
    });

    describe('Large Numbers', () => {
        test('adds large numbers', () => {
            expect(sum(999999, 1)).toBe(1000000);
        });
    });
});
