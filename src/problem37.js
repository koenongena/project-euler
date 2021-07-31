import * as R from 'ramda';
import {isPrime as isBasePrime} from "./math.js";

const numberInit = n => parseInt(R.init(n.toString()), 10);

const numberTail = n => parseInt(R.tail(n.toString()), 10);

const isPrime = n => n > 1 && isBasePrime(n);

const isLeftTruncatablePrime = (n) => {
    return (n < 10 && isPrime(n)) || (isPrime(n) && isLeftTruncatablePrime(numberTail(n)));
}
const isRightTruncatablePrime = (n) => {
    return (n < 10 && isPrime(n)) || (isPrime(n) && isRightTruncatablePrime(numberInit(n)));
}

const isTruncatablePrime = (n) => {
    return isPrime(n) && isLeftTruncatablePrime(n) && isRightTruncatablePrime(n);
};
(() => {
    const result = R.range(10, 10_000_000).filter(isTruncatablePrime);
    console.log(R.sum(result));
})();