import * as R from 'ramda';
import {toString} from "ramda";

const without = (index, arr) => R.remove(index, 1, arr);

export const permutations = (arr) => {
    if (arr.length === 1) {
        return [arr];
    }

    return arr.map((a, index) => {
        const subPermutations = permutations(without(index, arr));
        return subPermutations.map(R.prepend(a))
    }).flat();
};