import {primes} from "./math.js";
import * as R from 'ramda';
import {digitRotations} from "./digits.js";

const isCircularPrime = (primes) => {
    const isPrime = (n) => primes[n];
    return (n) => {
        return isPrime(n) && digitRotations(n).every(isPrime);
    };
};
(() => {
    const MAX = 1_000_000;
    const allPrimes = primes(MAX);
    const circularPrimes = R.filter(isCircularPrime(allPrimes), R.range(2, MAX));
    console.log(circularPrimes.length);
})();