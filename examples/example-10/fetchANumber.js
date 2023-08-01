/**
 * This function returns a promise that resolves with the number 1 if the 'didWork' parameter is true.
 * If 'didWork' is false, the promise gets rejected with an Error stating 'Failed to fetch number'.
 *
 * @async
 * @function fetchANumber
 * @param {boolean} didWork - A boolean indicating if the work was done.
 * @returns {Promise<number>} - Returns a promise. If 'didWork' is true, promise resolves with the number 1.
 * @throws {Error} - If 'didWork' is false, promise is rejected with an Error.
 */

const fetchANumber = async (didWork) => {
    return new Promise((resolve, reject) => {
        if (didWork) {
            resolve(1);
        } else {
            reject(new Error('Failed to fetch number'));
        }
    });
};

export default fetchANumber;
