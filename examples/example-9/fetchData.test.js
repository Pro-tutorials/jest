import fetchData from './fetchData.js';

describe('fetch data', () => {
    test('resolved', async () => {
        const data = await fetchData(true);
        expect(data).toBe('Yes');
    });

    test('rejected', async () => {
        expect.assertions(1);
        try {
            await fetchData(false);
        } catch (err) {
            expect(err.message).toMatch('Failed to fetch data');
        }
    });
});
