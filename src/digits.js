const parseDecimal = c => parseInt(c, 10);

export const digits = (n) => {
    return n.toString().split('').map(parseDecimal)
}

/**
 * If the number only contains digits that occur only once in this number, this function will return true.
 * For example
 * 1234 => true
 * 9713 => true
 * 1231 => false, because 1 occurs twice in this number
 *
 * @param number
 * @returns true if the number only contains digits occurring only once
 */
export const containsUniqueDigits = (number) =>  {
    const digits = number.toString().split('');
    return new Set(digits).size === digits.length;
}

export const isNumberWithUniqueDigits = containsUniqueDigits;
