import {digits, isNumberWithUniqueDigits} from "../src/digits";

it('should extract the individual digits from a number', function () {
    expect(digits(176523)).toEqual([1, 7, 6, 5, 2, 3])
});

it('should find numbers with only unique digits', function () {
    expect(isNumberWithUniqueDigits(1234)).toBeTruthy();
    expect(isNumberWithUniqueDigits(1231)).toBeFalsy();
    expect(isNumberWithUniqueDigits(0)).toBeTruthy();
});
