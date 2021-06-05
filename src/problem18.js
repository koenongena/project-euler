import * as R from 'ramda';
import {max} from "ramda";
import {readFileSync} from "fs";

const maxPath = (t) => {
    const top = t[0][0];

    if (t.length === 2) {
        return top + Math.max(t[1][0], t[1][1]);
    }

    const subLeft = R.tail(t).map(R.dropLast(1));
    const subRight = R.tail(t).map(R.tail);

    return top + Math.max(maxPath(subLeft), maxPath(subRight));
}
(() => {

    const toNumberArray = R.map(a => parseInt(a, 10))

    const triangle = readFileSync("src/p018_triangle.txt").toString()
        .trim()
        .split('\n')
        .map(R.split(" "))
        .map(toNumberArray)

    console.log(triangle)
    console.log(maxPath(triangle));
})();