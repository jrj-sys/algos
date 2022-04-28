/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */

//  Given two strings ransomNote and magazine, return true if ransomNote can be constructed from magazine and false otherwise.
//  Each letter in magazine can only be used once in ransomNote.

 let canConstruct = (ransomNote, magazine) => {
    for (let letter of ransomNote) {
        if (!magazine.includes(letter)) {
            return false
        } else {
        magazine = magazine.replace(letter, '')
        }
    }
    
    return true
}