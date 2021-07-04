import * as R from 'ramda';

const lastNumbersOfSelfPower = R.curry((x, number, pow = number) => {
    const overflow = Math.pow(10, x);
    return R.reduce((acc) => {
        return (number * acc) % overflow;
    }, number, R.range(1, pow));
});

(() => {
    const algorithm = R.pipe(
        R.map(lastNumbersOfSelfPower(10)),
        R.sum,
        R.toString,
        R.takeLast(10)
    )
    console.log(algorithm(R.range(1, 1001)));
})();