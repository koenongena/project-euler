import * as R from "ramda";
import {primeNumbersBelow} from "./primes.js";

const problem = (n) => {
    const primes = primeNumbersBelow(n * Math.log(n) + n * Math.log(n) * Math.log(n));
    return R.nth(n - 1, primes);
};

(() => {
    console.log(problem(10_001))
})();
