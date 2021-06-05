import * as R from 'ramda';
import {readFileSync} from "fs";

const maxPath = (rows) => {
    if (rows.length === 1) {
        return rows[0][0];
    }

    const secondToLastRow = R.nth(-2, rows);
    const lastRow = R.nth(-1, rows)

    const newHighest = secondToLastRow.map((val, index) => {
        return val + Math.max(lastRow[index], lastRow[index + 1]);
    })
    return maxPath([...R.dropLast(2, rows), newHighest]);
}

const toNumberArray = R.map(a => parseInt(a, 10))


const readFile = filePath => readFileSync(filePath).toString()
    .trim()
    .split('\n')
    .map(R.split(" "))
    .map(toNumberArray);


(() => {
    console.log(maxPath(readFile("src/p018_triangle.txt")));
    console.log(maxPath(readFile("src/p067_triangle.txt")));
})();