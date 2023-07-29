/**
 * Creates a user container element with firstName and lastName.
 *
 * @param {Object} userData - The user data object.
 * @param {string} userData.firstName - The first name of the user.
 * @param {string} userData.lastName - The last name of the user.
 * @returns {HTMLDivElement} The created user container element.
 *
 * @example
 * // Usage example:
 * const user = {
 *   firstName: 'John',
 *   lastName: 'Doe'
 * };
 * const userContainer = createUser(user);
 * document.body.appendChild(userContainer);
 */

const createUser = (userData) => {
    // create a container
    const container = document.createElement('div');
    container.className = 'container';

    // create firstName
    const firstName = document.createElement('h2');
    firstName.innerText = userData.firstName;

    // create lastName
    const lastName = document.createElement('h2');
    lastName.innerText = userData.lastName;

    container.append(firstName, lastName);

    return container;
};

export default createUser;
