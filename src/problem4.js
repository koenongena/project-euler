import * as R from "ramda";
import {isDivisibleBy, lcm, primeFactors} from "./math.js";


/*
Largest palindrome product
Problem 4

A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.

 */

const isPalindrome = (n) => R.equals(n.toString(), R.reverse(n.toString()));

const findLargestPalindrome = (max) => {
    return R.pipe(
        R.converge(R.xprod, [R.range(1), R.range(1)]),
        R.map(([a, b]) => a * b),
        R.sort(R.descend(R.identity)),
        R.find(isPalindrome),
    )(max);
};

(() => {

    console.log("Problem 4: " + findLargestPalindrome(1000));
})();
