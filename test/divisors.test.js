import {divisors, properDivisors} from "../src/divisors.js";

describe("divisors", () => {
    it('should split 1 into 1 divisor', function () {
        expect(divisors(1)).toEqual([1]);
    });

    it('should split 8 into 4 divisors', function () {
        expect(divisors(8)).toEqual([1, 2, 4, 8]);
    });

    it('should split 220', function () {
        expect(divisors(220)).toEqual([1, 2, 4, 5, 10, 11, 20, 22, 44, 55, 110, 220])
    });
});

describe("proper divisors", () => {
    it('should split 220', function () {
        expect(properDivisors(220)).toEqual([1, 2, 4, 5, 10, 11, 20, 22, 44, 55, 110])
    });

})