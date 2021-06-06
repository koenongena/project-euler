const parseDecimal = c => parseInt(c, 10);

export const digits = (n) => {
    return n.toString().split('').map(parseDecimal)
}