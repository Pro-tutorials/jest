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
