import {properDivisors} from "./divisors.js";
import * as R from 'ramda';

const isAbundant = (n) => {
    return R.sum(properDivisors(n)) > n;
}

function booleanArrayOfLength(max) {
    return Array.from({length: max + 1}, () => 0);
}

(() => {
    const max = 28123;
    const abundantNumbers = R.range(12, max + 1).filter(isAbundant);

    const isSumOf2AbundantNumbers = booleanArrayOfLength(max);
    abundantNumbers.forEach((_, i) => {
        R.range(0, i + 1).forEach(j => {
            isSumOf2AbundantNumbers[abundantNumbers[i] + abundantNumbers[j]] = 1;
        });
    });

    const result = R.range(0, max + 1).reduce((sum, index) => {
        return sum + (isSumOf2AbundantNumbers[index] === 0 ? index : 0);
    }, 0);

    console.log(result);
})()