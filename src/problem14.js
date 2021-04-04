import * as R from 'ramda';
import {isEven} from "./math.js";

const collatz = R.cond([
    [isEven, R.divide(R.__, 2)],
    [R.T, R.pipe(R.multiply(3), R.add(1))],
]);

const collatzSequence = n => {
    const nextCollatz = (v) => {
        return v === 1 ? false : [v, collatz(v)];
    };

    return R.pipe(R.unfold(nextCollatz), R.append(1))(n);
};

const sequenceLength = (n) => {
    return R.length(collatzSequence(n));
};

const cachedSequenceLength = () => {
    const cachedSequenceLength = R.memoizeWith(R.identity, sequenceLength);

    return (n) => {
        if (n === 1) {
            return 1;
        }
        return 1 + cachedSequenceLength(collatz(n));
    }
};

(() => {
    const r = R.sortBy(cachedSequenceLength(), R.range(1, 1_000_000));
    console.log(R.last(r));
})();