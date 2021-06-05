import * as R from 'ramda';
import {factorial} from "./math.js";

function binomial(n, k) {
    //TODO optimize
    // const a = R.reduce(R.multiply, 1, R.range(21, 41));
    // const b = R.reduce(R.multiply, 1, R.range(1, 21));

    if (1 <= k && k <= n - 1 && n > 10) {
        return binomial(n - 1, k - 1) + binomial(n - 1, k);
    }

    if (n > 0 && (k === 0 || n === k)) {
        return 1;
    }
    return factorial(n) / (factorial(k) * factorial(n - k));
}

const numberOfLatticePathsFromOrigin = (n, k) => {
    return binomial(n + k, n);
};

(() => {
    console.log(numberOfLatticePathsFromOrigin(20, 20))
})();