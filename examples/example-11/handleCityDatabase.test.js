// The top level before* and after* hooks apply to every test
// in a file. The hooks declared inside a describe block apply
// only to the tests within that describe block.

import cityDatabase from './handleCityDatabase.js';

describe('City Database', () => {
    // Run this function before each test, scoped to describe
    beforeEach(() => {
        cityDatabase.initializeCityDatabase();
    });

    // Run this function after each test, scoped to describe
    afterEach(() => {
        cityDatabase.clearCityDatabase();
    });

    test('city database has Vienna', () => {
        expect(cityDatabase.isCity('Vienna')).toBeTruthy();
    });

    test('city database has San Juan', () => {
        expect(cityDatabase.isCity('San Juan')).toBeTruthy();
    });

    test('city database does not have Brussels', () => {
        expect(cityDatabase.isCity('Brussels')).toBeFalsy();
    });
});
