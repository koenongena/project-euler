import * as R from 'ramda';
import {isPalindrome} from "./words.js";

const surround = R.curry((outside, number) => {
    return '' + outside + '' + number + '' + outside + '';
})

function palindromicNumbersOfLength(length) {
    if (length === 1) {
        return R.range(0, 10);
    } else if (length === 2) {
        return R.range(0, 10).map(n => n + '' + n);
    }

    return R.range(0, 10)
        .map(outside => palindromicNumbersOfLength(length - 2).map(surround(outside)))
        .flat()
        .map(n => parseInt(n, 10));
}

(() => {
    const allPalindromes = R.range(1, 1_000_000)
        .filter(n => isPalindrome(n.toString()) && isPalindrome(n.toString(2)));

    console.log(R.sum(allPalindromes));

    console.log(palindromicNumbersOfLength(4));
})();