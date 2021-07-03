import * as R from 'ramda';
import {isNotPrime} from "./math.js";

const quadraticFormula = R.curry(((a, b, n) => {
    return n * n + a * n + b;
}));


function numberOfConsecutivePrimes(a, b) {
    return R.until(R.pipe(quadraticFormula(a, b), isNotPrime), R.inc, 0) - 1;
}

(() => {
    let maxNumberOfPrimes = 0;
    let result = 0;
    for (let a = -999; a < 1000; a++) {
        for (let b = -1000; b <= 1000; b++) {
            const numberOfPrimes = numberOfConsecutivePrimes(a, b);
            if (maxNumberOfPrimes < numberOfPrimes) {
                maxNumberOfPrimes = numberOfPrimes;
                result = a * b;
            }
        }
    }

    console.log(result);
})();