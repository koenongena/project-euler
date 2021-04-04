import * as R from 'ramda';
import {numberOfDivisors} from "./divisors.js";

(() => {
    const triangleNumberIncrement = () => {
        let x = 2;
        return (n) => {
            return n + (x++);
        }
    };
    console.log("Wait for it, this might take a while...")
    const numberOfDivisorIsGreaterThan = R.pipe(numberOfDivisors, R.tap(console.log), R.gt(R.__, 500));
    const result = R.until(numberOfDivisorIsGreaterThan, triangleNumberIncrement(), 1);
    console.log(result);
})();