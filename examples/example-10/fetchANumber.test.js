import fetchANumber from './fetchANumber.js';

describe('fetchANumber', () => {
    it('should resolve with a number if didWork is true', async () => {
        await expect(fetchANumber(true)).resolves.toBe(1);
    });

    it('should reject with an error if didWork is false', async () => {
        await expect(fetchANumber(false)).rejects.toThrowError(
            'Failed to fetch number',
        );
    });
});
