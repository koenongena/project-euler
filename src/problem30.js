import * as R from 'ramda';

const sumOfPowerOfDigits = R.curry((n, power) => {
    if (n === 0) {
        return 0;
    }
    return Math.pow(n % 10, power) + sumOfPowerOfDigits(Math.floor(n / 10), power);
});

const sumOfDigitPowersEqualsNumber = R.curry((power, n) => n === sumOfPowerOfDigits(n, power));

(() => {
    const log = R.tap(console.log)
    const result = R.pipe(
        R.filter(sumOfDigitPowersEqualsNumber(5)),
        log,
        R.sum
    )(R.range(10, 1_000_000));
    console.log(result);
})();