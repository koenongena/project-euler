import * as R from "ramda";
import {primeFactors} from "./math.js";


/*
Largest prime factor
[Show HTML problem content]
Problem 3

The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?
*/

(() => {
    console.log("Problem 3: " + R.apply(Math.max, primeFactors(600851475143)));
})();
