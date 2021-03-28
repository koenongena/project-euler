import * as R from "ramda";

export const pow = R.curry(R.flip(Math.pow));
export const sqr = pow(2);
export const sqrt = Math.sqrt;

export const lcm = (a, b) => {
    if (a === 1 || b === 1) {
        return a * b;
    }

    const primes = R.mergeWith(R.max,
        R.countBy(R.toString, primeFactors(a)),
        R.countBy(R.toString, primeFactors(b))
    );

    const primeToExponent = (exponent, prime) => Math.pow(parseInt(prime, 10), exponent);
    const exponentValues = R.values(
        R.mapObjIndexed(primeToExponent, primes)
    );
    return R.reduce(R.multiply, 1, exponentValues);

}

export const isDivisibleBy = R.curry((denominator, number) => number % denominator === 0);

export const primeFactors = (n) => {
    const findPrimeFactorStartingFrom = (primeFactor, n) => {
        return R.until(isDivisibleBy(R.__, n), R.inc, primeFactor);
    }

    const _primeFactors = (n, factors) => {
        if (n === 1) {
            return factors;
        }
        const lastKnownFactor = R.defaultTo(R.last(factors), 2);
        const nextPrimeFactor = findPrimeFactorStartingFrom(lastKnownFactor, n);
        return _primeFactors(n / nextPrimeFactor, factors.concat(nextPrimeFactor));
    }

    return _primeFactors(n, []);
};
export const isEven = (n) => n % 2 === 0;