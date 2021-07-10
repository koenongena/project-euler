import {digits, isNumberWithUniqueDigits, digitRotations} from "../src/digits";
import * as R from 'ramda';

it('should extract the individual digits from a number', function () {
    expect(digits(176523)).toEqual([1, 7, 6, 5, 2, 3])
});

it('should find numbers with only unique digits', function () {
    expect(isNumberWithUniqueDigits(1234)).toBeTruthy();
    expect(isNumberWithUniqueDigits(1231)).toBeFalsy();
    expect(isNumberWithUniqueDigits(0)).toBeTruthy();
});

describe('rotate digits', () => {
    it.each(R.range(1, 10))('rotating a single digit number returns itself', (i) => {
        expect(digitRotations(i)).toEqual([i])
    });

    it('should return a single element array when it only contains 1 digit', function () {
        expect(digitRotations(11)).toEqual([11]);
        expect(digitRotations(111)).toEqual([111]);
        expect(digitRotations(9999)).toEqual([9999]);
    });

    it('should rotate a two digit number', function () {
        expect(digitRotations(12)).toEqual([12, 21])
    });

    it('should rotate a 3 digit number', function () {
        expect(digitRotations(197)).toEqual([197, 971, 719])
    });
});