import * as R from 'ramda';
import {exponentialForm, primeFactors} from "./math.js";

const mapToPrimeFactorsPower = (b, a) => R.mapObjIndexed(exponent => exponent * b, exponentialForm(primeFactors(a)));

(() => {
    const aMin = 2, aMax = 100, bMin = 2, bMax = 100;
    const uniqueFactorizations = new Set();
    for (let a = aMin; a <= aMax; a++) {
        for (let b = bMin; b <= bMax; b++) {
            uniqueFactorizations.add(JSON.stringify(mapToPrimeFactorsPower(b, a)));
        }
    }
    console.log(uniqueFactorizations.size)
})()