import * as R from 'ramda';
import {alphabeticalValue, readCommaSeparatedWordFile} from "./words.js";


const isTriangleNumber = (() => {
    const triangleNumbers = [1, 3, 6, 10, 15, 21, 28, 36, 45, 55];

    const calculateTriangleNumber = (n) => {
        return 0.5 * n * (n + 1);
    }

    return (number) => {
        while (number > R.last(triangleNumbers)) {
            triangleNumbers.push(calculateTriangleNumber(triangleNumbers.length + 1))
        }

        return triangleNumbers.indexOf(number) >= 0
    };
})();

const isTriangleWord = (word) => {
    return isTriangleNumber(alphabeticalValue(word));
};

(() => {
    const words = readCommaSeparatedWordFile("src/p042_words.txt");

    console.log(R.length(R.filter(isTriangleWord, words)));
})()