import * as R from "ramda";
import {primeFactors} from "./math.js";

export const numberOfDivisors = (n) => {
    const exponents = R.values(R.countBy(R.identity, primeFactors(n)));
    return R.reduce(R.multiply, 1, R.map(R.inc, exponents));
}