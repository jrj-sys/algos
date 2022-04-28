/**
 * @param {number[][]} accounts
 * @return {number}
 */

// You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. 
// Return the wealth that the richest customer has.
// A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.
 

 const maximumWealth = accounts => {
    let result = [];
    
    for (let i = 0; i < accounts.length; i++) {
            result.push(accounts[i].reduce((p, c) => p + c));
    }    
    result.sort((a, b) => b - a)
    return result[0];
};
