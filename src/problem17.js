import * as R from 'ramda';

const words = [
    "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine",
    "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"]

const decimals = ["", "ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

function createSuffix(n) {
    if (n > 1000) {
        //TODO this isn't correct yet. 1120 should be one thousand and one hundred twenty. Right now it's one thousand and one hundred and twenty
        //But it's not a criterion, so I won't spend more time on it...
        return n % 100 === 0 ? "" : " and " + numberToWord(n % 1000);
    } else if (n > 100) {
        return n % 100 === 0 ? "" : " and " + numberToWord(n % 100);
    } else if (n > 10) {
        return n % 10 === 0 ? "" : "-" + numberToWord(n % 10)
    }
}

function hundredsToWord(n) {
    if (n < 100) {
        return decimalToWord(n)
    }
    return numberToWord(Math.floor(n / 100)) + " hundred" + createSuffix(n);
}

function decimalToWord(n) {
    if (n < 10) {
        return numberToWord(n)
    }
    return decimals[Math.floor(n / 10)] + createSuffix(n);
}

function thousandsToWord(n) {

    return (numberToWord(Math.floor(n / 1000)) + " thousand") + createSuffix(n);
}

function numberToWord(n) {
    if (n >= 1000) {
        return thousandsToWord(n);
    }

    if (n >= 100) {
        return hundredsToWord(n);
    }
    if (n >= 20) {
        return decimalToWord(n);
    }

    return words[n];
}

const solution = (start, end) => {
    return R.pipe(
        R.map(numberToWord),
        R.join(''),
        R.replace(/[^A-Za-z0-9]/g, ''),
        R.length
    )(R.range(start, end + 1));
};

(() => {
    console.log(solution(1, 1000));
    // console.log(numberToWord(1120));
})();
