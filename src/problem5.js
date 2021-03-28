import * as R from "ramda";
import {isDivisibleBy, lcm, primeFactors} from "./math.js";

/*
Smallest multiple


  [Show HTML problem content]
Problem 5

2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

 */
(() => {
    console.log("Problem 5: " + R.reduce(lcm, 1, R.range(1, 20)))
})();
