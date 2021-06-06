import * as R from 'ramda';

const toCharCode = l => 26 - ("Z".charCodeAt(0) - l.charCodeAt(0));

export const alphabeticalValue = R.pipe(
    R.split(''),
    R.map(toCharCode),
    R.sum
);