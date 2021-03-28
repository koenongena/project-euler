import * as R from "ramda";
import {isDivisibleBy, lcm, pow, primeFactors, sqr} from "./math.js";

const problem = (n) => {
    const sieveOfEratosthenes = ({sieve, index}) => {

        const establishedPrimes = R.take(index + 1, sieve);
        const numbersToSieve = R.drop(index + 1, sieve);

        return {
            index: index + 1,
            sieve: establishedPrimes.concat(R.reject(isDivisibleBy(sieve[index]), numbersToSieve))
        };
    };
    const stopCondition = (({index, sieve}) => {
        return R.last(sieve) < sqr(sieve[index]);
    });

    const estimatedMax = n * Math.log(n) + n * Math.log(n) * Math.log(n);
    const sieve = R.range(2, estimatedMax);
    const primes = R.until(stopCondition, sieveOfEratosthenes, {index: 0, sieve});
    return R.pipe(R.prop("sieve"), R.nth(n - 1))(primes);
};

(() => {
    console.log(problem(10_001))
})();
