import * as R from 'ramda';
import {isPrime as isBasePrime} from "./math.js";

const numberInit = n => parseInt(R.init(n.toString()), 10);

const numberTail = n => parseInt(R.tail(n.toString()), 10);

const isPrime = n => n > 1 && isBasePrime(n);

const isLeftTruncatablePrime = (n) => {
    if (n < 10) {
        return isPrime(n)
    }

    return isPrime(n) && isLeftTruncatablePrime(numberTail(n));
};
const isRightTruncatablePrime = (n) => {
    if (n < 10) {
        return isPrime(n)
    }
    return isPrime(n) && isRightTruncatablePrime(numberInit(n));
};

const isTruncatablePrime = R.allPass([isLeftTruncatablePrime, isRightTruncatablePrime]);

(() => {
    const result = R.range(10, 1_000_000).filter(isTruncatablePrime);
    console.log(R.sum(result));
})();