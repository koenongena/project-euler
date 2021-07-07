
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

(() => {
    const coins = [1, 2, 5, 10, 20, 50, 100, 200];
    const target = 200;

    console.log(countSolutions(coins, target));
})()
