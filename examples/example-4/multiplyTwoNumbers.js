/**
 * Multiplies two numbers and returns the result.
 *
 * This function takes two numbers as input, multiplies them, and returns the result
 * of the multiplication. It throws a TypeError if either of the input arguments
 * is not a number.
 *
 * @param {number} num1 - The first number to be multiplied.
 * @param {number} num2 - The second number to be multiplied.
 * @throws {TypeError} Throws a TypeError if either num1 or num2 is not a number.
 * @returns {number} The result of multiplying num1 and num2.
 */

const multiplyTwoNumbers = (num1, num2) => {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        throw new TypeError('num1 or num2 is not a number');
    }
    return num1 * num2;
};

export default multiplyTwoNumbers;
