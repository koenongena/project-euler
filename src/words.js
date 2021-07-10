import * as R from 'ramda';

const toCharCode = l => 26 - ("Z".charCodeAt(0) - l.charCodeAt(0));

export const alphabeticalValue = R.pipe(
    R.split(''),
    R.map(toCharCode),
    R.sum
);

export const isPalindrome = (s) => {
    if (R.length(s) <= 1) {
        return true;
    }
    return R.head(s) === R.last(s) && isPalindrome(R.slice(1, -1, s));
}
