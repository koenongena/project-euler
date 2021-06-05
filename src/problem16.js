const sum = a => a.reduce((v, acc) => v + acc, 0);
const parseDecimal = c => parseInt(c, 10);

function sumOfDigits(numberAsString) {
    return sum((numberAsString.split('').map(parseDecimal)));
}

function powerOf2AsString(n) {
    return BigInt('0b' + '1' + '0'.repeat(n)).toString();
}

(() => {
    console.log(sumOfDigits(powerOf2AsString(1000)))
})();