const {primeNumbersBelow} = require("../src/primes");

it('should return 2 always', function () {
    expect(primeNumbersBelow(13)).toEqual([2, 3, 5, 7, 11]);
});