/**
 * Create a Promise that resolves or rejects based on the given condition.
 *
 * @param {boolean} isResolved - A boolean value indicating whether the Promise
 * should resolve or reject.
 * @returns {Promise<string>} A Promise that resolves to "Yes"
 * if isResolved is true, or rejects with "No" if isResolved is false.
 */

const checkPromise = (isResolved) => {
    return new Promise((resolve, reject) => {
        if (isResolved) {
            resolve('Yes');
        } else {
            reject('No');
        }
    });
};

export default checkPromise;
