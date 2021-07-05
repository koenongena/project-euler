import {primeFactors, exponentialForm} from "../src/math.js";

it('should calculate the prime factors', function () {
    expect(primeFactors(4)).toEqual([2, 2])
    expect(primeFactors(6)).toEqual([2, 3])
    expect(primeFactors(12)).toEqual([2, 2, 3])
});

it('should calculate the prime factors as exponents', function () {
    expect(exponentialForm(primeFactors(4))).toEqual({2: 2});
    expect(exponentialForm(primeFactors(6))).toEqual({2: 1, 3: 1});
    expect(exponentialForm(primeFactors(12))).toEqual({2: 2, 3: 1});
});