import checkAString from './checkAString.js';

describe('check a string', () => {
    describe('Basic tests', () => {
        test('hello should match /hello/i', () => {
            expect(checkAString('Hello')).toMatch(/hello/i);
        });

        test('hi!! should match hi!!', () => {
            expect(checkAString('hi!!')).toMatch('hi!!');
        });
        test('Bye! should not match Bye!!!', () => {
            expect(checkAString('Bye!')).not.toMatch('Bye!!!');
        });
    });

    describe('Error tests', () => {
        test('22 should throw TypeError', () => {
            expect(() => checkAString(22)).toThrow(TypeError);
        });
        test('"" -> should not throw TypeError', () => {
            expect(() => checkAString('')).not.toThrow(TypeError);
        });
    });
});
