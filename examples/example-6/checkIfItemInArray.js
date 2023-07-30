/**
 * Checks if an item exists in an array.
 *
 * @param {Array} arr - The array to be checked.
 * @param {any} item - The item to look for in the array.
 * @returns {boolean} Returns `true` if the item is found in the array, otherwise `false`.
 * @throws {TypeError} If the first argument 'arr' is not an array.
 */

const checkIfItemInArray = (arr, item) => {
    if (!Array.isArray(arr)) {
        throw new TypeError('arr is not an array');
    }

    return arr.includes(item);
};

export default checkIfItemInArray;
