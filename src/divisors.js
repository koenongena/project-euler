import * as R from "ramda";
import {primeFactors} from "./math.js";

export const numberOfDivisors = (n) => {
    const exponents = R.values(R.countBy(R.identity, primeFactors(n)));
    return R.reduce(R.multiply, 1, R.map(R.inc, exponents));
}

export const divisors = (n) => {
    if (n === 0) {
        return [];
    }
    if (n === 1) {
        return [1];
    }

    const primes = R.pipe(
        R.countBy(R.identity),
        R.mapObjIndexed((val, key) => [val, parseInt(key, 10)]),
        R.values
    )(primeFactors(n));

    const generateDivisors = R.curry((curIndex, cr) => {
        if (curIndex === primes.length) {
            return cr;
        } else {
            const prime = primes[curIndex][1];
            const primeExponent = primes[curIndex][0];

            const divisors = R.map(i => cr * Math.pow(prime, i), R.range(0, primeExponent + 1));
            const result = R.chain(generateDivisors(curIndex + 1), divisors);
            return R.sortBy(R.identity, result);
        }
    });

    return generateDivisors(0, 1);

};

export const properDivisors = (n) => R.without([n], divisors(n));