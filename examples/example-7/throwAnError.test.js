// IMPORTANT NOTE:
// The function that throws an exception needs to
// be invoked within a wrapping function otherwise
// the toThrow assertion will fail.

import throwAnError from './throwAnError.js';

describe('throw an error', () => {
    describe('Basic tests', () => {
        test('empty', () => {
            expect(() => throwAnError()).toThrow();
        });
        test('error', () => {
            expect(() => throwAnError()).toThrow(Error);
        });

        test('use error message ', () => {
            expect(() => throwAnError()).toThrow('I am an error');
        });

        test('user regex', () => {
            expect(() => throwAnError()).toThrow(/I am an error/);
        });
    });
});
