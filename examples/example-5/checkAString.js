/**
 * Checks if the input is a string and returns it.
 *
 * This function takes a value as input and checks if it is a string. If the input
 * is a valid string, it is returned unchanged. Otherwise, a TypeError is thrown.
 *
 * @param {any} str - The value to be checked if it's a string.
 * @throws {TypeError} Throws a TypeError if the input is not a string.
 * @returns {string} The input string if it is valid.
 */

const checkAString = (str) => {
    if (typeof str !== 'string') {
        throw new TypeError('str is not a string');
    }

    return str;
};

export default checkAString;
