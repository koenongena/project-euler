import {properDivisors} from "./divisors.js";
import * as R from 'ramda';

function findAmicablePairs(d) {
    const amicablePairs = []
    for (let i = 1; i < d.length; i++) {
        if (i < d[i] && i === d[d[i]]) {
            amicablePairs.push(i, d[i]);
        }
    }
    return amicablePairs;
}

(() => {
    const pairsWith = R.range(0, 10000)
        .map(properDivisors)
        .map(R.sum);

    const amicablePairs = findAmicablePairs(pairsWith);
    console.log(R.sum(amicablePairs));
})();