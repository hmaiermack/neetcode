/*
You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

*/

//Solution: Two Pointer
//Time Complexity: O(n)
//Space Complexity: O(1)
/*
    > Assign pointers to track position (left/right)
    > Step through array, if right > left compute profit and compare to current maxProfit, if > maxProfit reassign maxP
    > Else if right < left reassign left to right
    > increment right

    Time -> O(n) looping over n numbers in array
    Space -> O(1) just a couple of pointers
*/


function maxProfit(prices: number[]): number {
    let l = prices[0]
    let maxProfit = 0

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < l) {
            l = prices[i]
        } else {
        maxProfit = (prices[i] - l) > maxProfit ? prices[i] - 1 : maxProfit
        }

    }
    return maxProfit
};

console.log(maxProfit([7,1,5,3,6,4]))