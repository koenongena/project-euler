/*
Problem 1: Multiples of 3 and 5

<p>If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.</p>
<p>Find the sum of all the multiples of 3 or 5 below 1000.</p>
 */

import * as R from "ramda";
import {isDivisibleBy, lcm, primeFactors} from "./math.js";

const isDivisibleByAny = (a) => R.anyPass(R.map(isDivisibleBy, a))
const isDivisibleBy3Or5 = isDivisibleByAny([3, 5]);

const filterMultiplesOf3And5 = R.filter(isDivisibleBy3Or5);

(() => {
    console.log("Problem 1: " + R.sum(filterMultiplesOf3And5(R.range(0, 1000))));
})();
