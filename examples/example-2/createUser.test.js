/**
 * @jest-environment jsdom
 */

import createUser from './createUser.js';
// IMPORTANT
// When we are using Jest to test functions that manipulate
// the DOM or interact with the browser's environment.
// The@jest-environment jsdom` comment tells Jest to set up
// a DOM environment (jsdom) for running the tests. Without
// this configuration, Jest will run the tests in a Node.js-like
// environment, which does not have a DOM.

describe('createUser Function Tests', () => {
    describe('creates user container element for John Doe', () => {
        const user = { firstName: 'John', lastName: 'Doe' };
        const userContainer = createUser(user);
        test('nodeName -> DIV', () => {
            expect(userContainer.nodeName).toEqual('DIV');
        });
        test('className -> container', () => {
            expect(userContainer.className).toEqual('container');
        });
        test('firstChild nodeName -> H2', () => {
            expect(userContainer.children[0].nodeName).toEqual('H2');
        });
        test('firstChild innerText -> John', () => {
            expect(userContainer.children[0].innerText).toEqual('John');
        });
        test('lastChild nodeName -> H2', () => {
            expect(userContainer.children[1].nodeName).toEqual('H2');
        });
        test('firstChild innerText -> Doe', () => {
            expect(userContainer.children[1].innerText).toEqual('Doe');
        });
    });

    describe('creates user container element for Jane Doe', () => {
        const user = { firstName: 'John', lastName: 'Doe' };
        const userContainer = createUser(user);
        test('nodeName -> DIV', () => {
            expect(userContainer.nodeName).toEqual('DIV');
        });
        test('className -> container', () => {
            expect(userContainer.className).toEqual('container');
        });
        test('firstChild nodeName -> H2', () => {
            expect(userContainer.children[0].nodeName).toEqual('H2');
        });
        test('firstChild innerText -> Jane', () => {
            expect(userContainer.children[0].innerText).toEqual('John');
        });
        test('lastChild nodeName -> H2', () => {
            expect(userContainer.children[1].nodeName).toEqual('H2');
        });
        test('firstChild innerText -> Doe', () => {
            expect(userContainer.children[1].innerText).toEqual('Doe');
        });
    });
});
