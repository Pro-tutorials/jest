// The top level before* and after* hooks apply to every test
// in a file. The hooks declared inside a describe block apply
// only to the tests within that describe block.

import petsDatabase from './handlePetsDatabase.js';

describe('City Database', () => {
    // Run this function before all test cases in the suite, scoped to describe
    beforeAll(() => {
        petsDatabase.initializePetsDatabase();
    });

    // Run this function after all test cases in the suite, scoped to describe
    afterAll(() => {
        petsDatabase.clearPetsDatabase();
    });

    test('pets database has Dog', () => {
        expect(petsDatabase.isPetExisted('Dog')).toBeTruthy();
    });

    test('pets database has Cat', () => {
        expect(petsDatabase.isPetExisted('Cat')).toBeTruthy();
    });

    test('pets database does not have Horse', () => {
        expect(petsDatabase.isPetExisted('Horse')).toBeFalsy();
    });
});
