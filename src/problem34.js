import * as R from 'ramda';
import {factorial} from "./math.js";

const map = new Map();
R.range(0, 10).forEach(n => {
    map.set(n, factorial(n));
})

const sumOfFactorialOfDigits = R.curry((n) => {
    if (n === 0) {
        return 0;
    }
    return map.get(n % 10) + sumOfFactorialOfDigits(Math.floor(n / 10));
});

const sumOfDigitFactorialsEqualsNumber = R.curry((n) => n === sumOfFactorialOfDigits(n));

(() => {
    const log = R.tap(console.log);
    const result = R.pipe(
        R.filter(sumOfDigitFactorialsEqualsNumber),
        log,
        R.sum
    )(R.range(3, 1000_000));
    console.log(result);
})();