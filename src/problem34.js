import * as R from 'ramda';
import {factorial} from "./math.js";

const sumOfFactorialOfDigits = (n) => {
    if (n === 0) {
        return 0;
    }
    return factorial(n % 10) + sumOfFactorialOfDigits(Math.floor(n / 10));
};

const sumOfDigitFactorialsEqualsNumber = (n) => n === sumOfFactorialOfDigits(n);

(() => {
    const log = R.tap(console.log);
    const result = R.pipe(
        R.filter(sumOfDigitFactorialsEqualsNumber),
        log,
        R.sum
    )(R.range(3, 50_000));
    console.log(result);
})();