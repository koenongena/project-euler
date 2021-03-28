import * as R from "ramda";
import {primeNumbersBelow} from "./primes.js";


(() => {
    console.log(R.sum(primeNumbersBelow(2_000_000)))
})();