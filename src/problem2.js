/*
Problem 1: Multiples of 3 and 5

<p>If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.</p>
<p>Find the sum of all the multiples of 3 or 5 below 1000.</p>
 */

import * as R from "ramda";
import {isEven} from "./math.js";

const lastEntryIsGte = (n) => R.pipe(R.last, R.gte(R.__, n));

function fibonacciNumbersBelow(n) {
    const appendNewFib = (arr) => {
        const [a, b] = R.takeLast(2, arr);
        return R.append(a + b, arr);
    }


    return R.dropLast(1, R.until(lastEntryIsGte(n), appendNewFib, [1, 2]));
}
(() => {
    console.log("Problem 2: " + R.sum(R.filter(isEven, fibonacciNumbersBelow(4_000_000))))
})();
