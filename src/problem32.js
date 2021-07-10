import * as R from 'ramda';
import {isNumberWithUniqueDigits} from "./digits.js";

const numberOfDigitsArePossible = (n1, n2) => {
    const n = n1.toString().length;
    const m = n2.toString().length;
    return n + m + (n + m) === 10
}

export const isPanDigitalProduct = (multiplicand, multiplier) => {
    if (!numberOfDigitsArePossible(multiplicand, multiplier)
        || !isNumberWithUniqueDigits(multiplicand)
        || !isNumberWithUniqueDigits(multiplier)) {
        return false;
    }

    const product = multiplicand * multiplier;
    const concatenated = '' + multiplicand + '' + multiplier + '' + product;
    return concatenated.split('').sort().join('') === "123456789";
}

(() => {
    // Multiplying any number with 5 digits, with any other number >= 1, results in a 5+ digit number.
    // Because we're looking for a pan-digital multiplication number (where every digits is different), that would mean we get at least a total of 1 + 5 + 5 digits when multipying.
    // That fact makes it impossible to have a number > 9999. And because we also know 9999 is not an option, we look for the smallest number under 9999 with all different digits.
    // That would be 9876
    const MAX_MULTIPLIER = 9876;

    // Because the inner loop contains all the 4 digit number, we are certain those are already covered.
    // Only the 1 and 2 digit number need to be brute forced
    const MAX_MULTIPLICAND = 98;

    const set = new Set();
    for (let i = 1; i <= MAX_MULTIPLICAND; i++) {
        for (let j = i + 1; j <= MAX_MULTIPLIER - i; j++) {
            if (isPanDigitalProduct(i, j)) {
                console.log(i, j, i * j);
                set.add(i * j);
            }
        }
    }
    console.log("***********************************");
    console.log(R.sum(set));
})();
