/**
 * @param {number} n
 * @return {string[]}
 */

//  Given an integer n, return a string array answer (1-indexed) where:

//  answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
//  answer[i] == "Fizz" if i is divisible by 3.
//  answer[i] == "Buzz" if i is divisible by 5.
//  answer[i] == i (as a string) if none of the above conditions are true.

 let fizzBuzz = n => {
    // loop through n and return the value as a string, check for 'fizz', 'buzz', and 'fizzbuzz' conditions
    // can do this one liner 

    let answer = [];
    
    for (let i = 1; i < n + 1; i++) {
        if (i % 15 === 0) {
            let i = 'FizzBuzz';
            answer.push(i);
        } else if (i % 3 === 0) {
            let i = 'Fizz';
            answer.push(i);
        } else if (i % 5 === 0) {
            let i = 'Buzz';
            answer.push(i);
        } else {
        answer.push(i.toString());
        }
    }   
    return answer;
};