/**
 * Fetches data asynchronously and returns a Promise that resolves to the fetched data.
 *
 * @async
 * @param {boolean} didWork - A boolean value indicating whether
 * the asynchronous operation should succeed (resolve) or fail (reject).
 * @returns {Promise<string>} A Promise that resolves to a string containing the fetched data.
 * @throws {Error} Throws an Error if the data fetching operation fails.
 */

const fetchData = async (didWork) => {
    return new Promise((resolve, reject) => {
        if (didWork) {
            resolve('Yes');
        } else {
            reject(new Error('Failed to fetch data'));
        }
    });
};

export default fetchData;
