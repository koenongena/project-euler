import {factorial, rangeInclusive} from "./math.js";

import * as R from 'ramda';
import {dropNth} from "./list.js";

export const solution = (n) => {
    const r_ = (index, r, acc) => {
        if (R.length(r) === 1) {
            return acc + "" + r[0];
        }

        const numberOfPermutationsAfterFirstDigit = factorial(R.length(r) - 1);
        const firstNumberIndex = Math.floor(index / numberOfPermutationsAfterFirstDigit);
        const nextNumberIndex = index % numberOfPermutationsAfterFirstDigit;
        return r_(nextNumberIndex, dropNth(firstNumberIndex, r), acc + r[firstNumberIndex])
    }

    return r_(n - 1, rangeInclusive(0, 9), "");
};

(() => {
    const result = solution(1_000_000);
    console.log(result);
})();