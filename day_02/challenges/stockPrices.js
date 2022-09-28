let stocks = [2, 3, 10, 6, 4, 8, 1];


const best = (arr) => {
    let maxProfit = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] - arr[i] > maxProfit) {
                maxProfit = arr[j] - arr[i];
            }
        }
    }
    return maxProfit;
}
console.log(best(stocks));




const best1 = (arr) => {
    let maxProfit = 0;
    let buy = arr[0];
    for (const currentPrice of arr) {
        if (currentPrice < buy ) {
            buy = currentPrice
        }
        let currentProfit = currentPrice - buy;
        maxProfit = Math.max(currentProfit, maxProfit);
    }
    return maxProfit;
}
console.log(best1(stocks));