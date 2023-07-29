# Jest :

> To run your test just run

```
npm run test -- path-to-your-test-file
```

Or to run all the tests

```
npm run test
```

## Matchers

### Common Matchers

- `toBe`: is used for simple equality checks. It tests if the actual value is
  exactly equal (strict equality, ===) to the expected value. It's most commonly
  used to compare primitive data types like `numbers, strings, and booleans`.
- [Sum](./examples/example-1/sum.js)

- `toEqual`: is used for `deep equality` checks. It is used to compare the
  values of `objects and arrays`, ensuring that they have the same content, even
  if they are different object instances.
- [CreateUser](./examples/example-2/createUser.js)

### Truthiness

- `toBeNull` : toBeNull matches only null
- `toBeUndefined`: matches only undefined
- `toBeDefined`: is the opposite of toBeUndefined
- `toBeTruthy`: matches anything that an if statement treats as true
- `toBeFalsy`: matches anything that an if statement treats as false

- [checkValue](./examples/example-3/checkValue.js)

### Numbers

- `toBeGreaterThan`: check if a number is greater than
- `toBeGreaterThanOrEqual` check if a number is greater than or equal
- `toBeLessThan`: check if a number is less than
- `toBeLessThanOrEqual`: check if a number is greater than or equal
- `toBeCloseTo`: used with floating numbers.

- [checkANumber](./examples/example-4/multiplyTwoNumbers.js)

### Strings

- `toMatch` : check if a string match
- [checkAString](./examples/example-5/checkAString.js)
