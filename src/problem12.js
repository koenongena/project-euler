import * as R from 'ramda';
import {numberOfDivisors} from "./divisors.js";

const triangleNumber = (n) => {
    return n * (n + 1) / 2;
};

(() => {
    console.log("Wait for it, this might take a while...");
    const triangleNumberIsGreaterThan = R.pipe(triangleNumber, numberOfDivisors, R.gt(R.__, 500));
    const result = R.until(triangleNumberIsGreaterThan, R.inc, 1);
    console.log(triangleNumber(result));
})();