import * as R from "ramda";
import {isDivisibleBy, sqr} from "./math.js";

export const primeNumbersBelow = max => {
    const sieveOfEratosthenes = ({sieve, index}) => {

        const establishedPrimes = R.take(index + 1, sieve);
        const numbersToSieve = R.drop(index + 1, sieve);

        return {
            index: index + 1,
            sieve: (establishedPrimes || []).concat(R.reject(isDivisibleBy(sieve[index]), numbersToSieve))
        };
    };
    const stopCondition = (({index, sieve}) => {
        return R.last(sieve) < sqr(sieve[index]);
    });

    const sieve = R.range(2, max);
    const endState = R.until(stopCondition, sieveOfEratosthenes, {index: 0, sieve});
    return endState.sieve;
};