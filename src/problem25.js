const solution = (numberOfDigits) => {
    //I'em doing the inverse of https://www.geeksforgeeks.org/finding-number-of-digits-in-nth-fibonacci-number/
    // Binets formula states
    // Φ = (1 + √5) / 2
    // Ψ = (1 - √5) / 2
    // Count of digits in Fib(n) = y
    //                           = Log10Fib(n)
    //                           = Log10(Φn / √5)
    //                           = n*Log10(Φ) - Log10√5
    //                           = n*Log10(Φ) - (Log105)/2

    //Therefore
    // n * Log10(Φ) = y + (Log105)/2
    // => n = (y + (Log10(5)/2) / Log10(Φ)

    const sigma = (1 + Math.sqrt(5)) / 2;
    const y = ((numberOfDigits - 1) + (Math.log10(5) / 2)) / Math.log10(sigma);
    return Math.ceil(y);
}

(() => {
    console.log(solution(1_000))
})();