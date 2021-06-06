import {readFileSync} from "fs";
import * as R from 'ramda';
import {alphabeticalValue} from "./words.js";

const score = (word, index) => alphabeticalValue(word) * (index + 1);
const removeSurroundingQuotes = w => w.substring(1, w.length - 1);

(() => {
    const words = readFileSync("src/p022_names.txt").toString();

    const result = R.pipe(
        R.split(','),
        R.map(removeSurroundingQuotes),
        R.sortBy(R.identity),
        R.addIndex(R.map)(score),
        R.sum
    )(words);
    console.log(result)
})();