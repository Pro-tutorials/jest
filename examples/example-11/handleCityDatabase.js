// If You have a method initializeCityDatabase() that must be called before each of
// these tests, and a method clearCityDatabase() that must be called after each
// of these tests. You can do this with: beforeEach and afterEach

const initializeCityDatabase = () => {
    // Logic to initialize the city database
};

const clearCityDatabase = () => {
    // Logic to clear the city database
};

const isCity = (cityName) => {
    // Logic to check if the city exists in the database
    const cityDatabase = ['Vienna', 'San Juan'];
    return cityDatabase.includes(cityName);
};

const cityDatabase = {
    initializeCityDatabase: initializeCityDatabase,
    clearCityDatabase: clearCityDatabase,
    isCity: isCity,
};

export default cityDatabase;
