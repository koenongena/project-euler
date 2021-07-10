import {alphabeticalValue, isPalindrome} from "../src/words";

it('should score COLIN as 53', function () {
    expect(alphabeticalValue("COLIN")).toEqual(53);
});

it('should find palindromes', function () {
    expect(isPalindrome('111')).toBeTruthy();
    expect(isPalindrome('11110011000100001111')).toBeFalsy();
});