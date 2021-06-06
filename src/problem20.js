import {digits} from "./digits.js";
import * as R from 'ramda';

const factorial = (n, result = BigInt(1)) => {
    if (typeof (n) !== 'bigint') {
        return factorial(BigInt(n));
    }

    if (n === 1n) {
        return result;
    }
    return factorial(n - 1n, result * n);
};

(() => {
    console.log(R.sum(digits(factorial(100))));
})();