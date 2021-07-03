import * as R from "ramda";

export function lengthOfRecurringCycle(numerator, denominator) {
    const _lengthOfRecurringCycle = (n, d, result = "0", remainders = []) => {
        if (n === 0 || n === d) {
            return 0;
        } else if (n < d) {
            return _lengthOfRecurringCycle(n * 10, d, result + "0", R.append(undefined, remainders));
        } else {
            const r = Math.floor(n / d);
            const remainder = n % d;
            const previousIteratorWithThisRemainder = remainders.indexOf(remainder);
            if (previousIteratorWithThisRemainder >= 0) {
                return R.length(remainders) - previousIteratorWithThisRemainder
            } else {
                return _lengthOfRecurringCycle(remainder * 10, d, result + r, R.append(remainder, remainders));
            }
        }
    }
    // return (numerator / denominator).toString();
    return _lengthOfRecurringCycle(numerator, denominator);
}

export function unitFractionLengthOfRecurringCycle(denominator) {
    if (denominator <= 0) {
        return 0;
    }
    return lengthOfRecurringCycle(1, denominator);
}

(() => {
    const lengths = R.range(0, 1000).map(unitFractionLengthOfRecurringCycle);
    const indexOfMaxLength = lengths.reduce((indexOfMaxLength, length, currentIndex) => {
        return length > lengths[indexOfMaxLength] ? currentIndex : indexOfMaxLength;
    }, 0);

    console.log(indexOfMaxLength);
})()