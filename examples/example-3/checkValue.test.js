import checkValue from './checkValue.js';

describe('Check value', () => {
    describe('Basic check', () => {
        test('null -> null', () => {
            expect(checkValue(null)).toBeNull();
        });

        test('1 -> defined', () => {
            expect(checkValue(1)).toBeDefined();
        });

        test('undefined -> undefined', () => {
            expect(checkValue(undefined)).toBeUndefined();
        });

        test('20 -> truthy', () => {
            expect(checkValue(20)).toBeTruthy();
        });

        test('0 -> falsy', () => {
            expect(checkValue(0)).toBeFalsy();
        });
    });

    describe('Check using not', () => {
        test('5 -> not null', () => {
            expect(checkValue(5)).not.toBeNull();
        });

        test('undefined -> not defined', () => {
            expect(checkValue(undefined)).not.toBeDefined();
        });

        test('test -> not undefined', () => {
            expect(checkValue('test')).not.toBeUndefined();
        });

        test('0 -> not truthy', () => {
            expect(checkValue(0)).not.toBeTruthy();
        });

        test('100 -> not falsy', () => {
            expect(checkValue(100)).not.toBeFalsy();
        });
    });
});
