import checkPromise from './checkPromise.js';

describe('check promise', () => {
    describe('Basic tests', () => {
        test('true -> Yes', () => {
            return checkPromise(true).then((data) => {
                expect(data).toBe('Yes');
            });
        });
    });

    describe('use resolves and rejects ', () => {
        test('should resolve with "Yes" when isResolved is true', () => {
            return expect(checkPromise(true)).resolves.toBe('Yes');
        });

        test('should reject with "No" when isResolved is false', () => {
            return expect(checkPromise(false)).rejects.toBe('No');
        });
    });
});
