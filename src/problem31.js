
import * as R from 'ramda';

const countSolutions = (coins, target) => {
    if (target <= 0 || R.length(coins) === 0) return 0
    
    const firstCoin = R.head(coins)
    let solutions = 0;

    let numberOfCoins = 0;
    const remainingCoins = R.tail(coins);
    while (firstCoin * numberOfCoins < target) {
        solutions += countSolutions(remainingCoins, target - numberOfCoins * firstCoin);
        numberOfCoins++
    }    
    if (firstCoin * numberOfCoins === target) solutions++

    return solutions;
}

const countWithDynamicProgramming = (coins, target) => {
    const waysToGetToAmount = Array.from({length: target + 1}, () => 0)
    waysToGetToAmount[0] = 1;
    for (const coin of coins) {    
        for (let j = coin; j <= target; j++){
            waysToGetToAmount[j] += waysToGetToAmount[j - coin];
        }
    };
    return waysToGetToAmount[target];
}

(() => {
    const coins = [1, 2, 5, 10, 20, 50, 100, 200];
    const target = 200;

    console.log(countWithDynamicProgramming(coins, target));
})()
