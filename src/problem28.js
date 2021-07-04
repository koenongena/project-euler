const sumOfCorners = (x) => {
    /*
    The upper right corner has value = x².
    The upper left corner has value = x² - (x - 1)
    The lower left corner is = x² - 2(x - 1)
    The lower right corner is = x² - 3(x - 1)

    Adding these four corners gives is an equation which can be simplified to
    4x² - 6(x - 1) = 4x² - 6x + 6.
     */

    if (x === 1) {
        return 1;
    }

    return 4 * x * x - 6 * x + 6;
};

const sumOfDiagonals = (x) => {
    if (x === 1) {
        return 1;
    }

    return sumOfCorners(x) + sumOfDiagonals(x - 2)
}
(() => {
    console.log(sumOfDiagonals(3))
    console.log(sumOfDiagonals(5))
    console.log(sumOfDiagonals(1001))
})()