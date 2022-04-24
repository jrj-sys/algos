/** 
 * @param {string} s
 * @return {number}
*/

// Given a roman numeral, convert it to an integer.

let romanToInt = s => {
    const roman_num = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }
    
    let total = 0;
    let subtract = 0;
    
    for (let i = 0; i < s.length; i++) {
        let current = roman_num[s[i]]
        let next = roman_num[s[i+1]]
                             
        if (next > current) {
            subtract += current;
        } else {
            total += current
        }
    }
    
    return total - subtract;
};

