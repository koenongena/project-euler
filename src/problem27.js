import * as R from 'ramda';
import {primeFactors} from "./math.js";

const quadraticFormula = R.curry(((a, b, n) => {
    console.log(n, a, b)
    return n * n + a * n + b;
}));

const isPrime = (n) => {
    const factors = primeFactors(n);
    console.log(n, "->", factors);
    return factors.length === 1;
}

const isNotPrime = R.complement(isPrime);

(() => {
    const a = 1, b = 41;
    const final = R.until(R.pipe(quadraticFormula(a, b), isNotPrime), R.inc, 0);
    console.log(final);
})();