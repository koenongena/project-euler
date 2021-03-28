import * as R from "ramda";
import {isDivisibleBy, lcm, pow, primeFactors, sqr} from "./math.js";

const sumOfSquares = R.pipe(R.map(sqr), R.sum);
const squareOfSum = R.pipe(R.sum, sqr);

const problem = R.converge(R.subtract, [squareOfSum, sumOfSquares]);

(() => {
    console.log(problem(R.range(1, 101)))
})();
