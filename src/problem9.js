import * as R from "ramda";
import {sqr} from "./math.js";
import {multiplyList} from "./list.js";

const isPythagoreanTriplet = ([a, b, c]) => {
    return a < b && b < c && (sqr(a) + sqr(b) === sqr(c))
}

function doublesWithSum(number) {
    return R.range(1, number)
        .map(n => [n, number - n]);
}

const tripletsWithFirst = R.curry((sum, a) => R.map(R.prepend(a), doublesWithSum(sum - a)));

function tripletsWithSum(sum) {
    return R.pipe(
        R.dec,
        R.range(1),
        R.map(tripletsWithFirst(sum)),
        R.unnest
    )(sum)
}

(() => {
    const triplet = R.find(isPythagoreanTriplet, tripletsWithSum(1000));
    console.log(multiplyList(triplet))
})();