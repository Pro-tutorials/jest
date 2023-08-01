// If You have a method initializeCityDatabase() that must be called before each of
// these tests, and a method clearCityDatabase() that must be called after each
// of these tests. You can do this with: beforeEach and afterEach

const initializePetsDatabase = () => {
    // Logic to initialize the city database
};

const clearPetsDatabase = () => {
    // Logic to clear the city database
};

const isPetExisted = (cityName) => {
    // Logic to check if the city exists in the database
    const cityDatabase = ['Dog', 'Cat', 'rabbit'];
    return cityDatabase.includes(cityName);
};

const petsDatabase = {
    initializePetsDatabase: initializePetsDatabase,
    clearPetsDatabase: clearPetsDatabase,
    isPetExisted: isPetExisted,
};

export default petsDatabase;
