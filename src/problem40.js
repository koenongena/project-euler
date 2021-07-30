const MAX = 1_000_000;

(() => {
    let s = "0";
    let number = 1;
    while (s.length <= MAX) {
        s += number++;
    }

    console.log(s[1] * s[10] * s[100] * s[1000] * s[10_000] * s[100_000] * s[1_000_000])
})();