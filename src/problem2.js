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
