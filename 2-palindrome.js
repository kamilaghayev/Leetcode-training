/**
 * @param {number} x
 * @return {boolean}
 */
// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

//first 142ms
var isPalindrome = function(x) {
    let r =  []
    for (let i = 0; i < x.toString().length; i++) {
        r.push(x.toString()[i])
    }

    if (x.toString() !== r.reverse().join("")) {
        return false
    }
    return true
};


//second 90ms
/* var isPalindrome = function(x) {
    x =x.toString()
    let i = 0, j = x.length - 1;
    while (i < j) {
        if(x[i] !== x[j]) return false;
        i++;
        j--;
    }
    return true;
}; */

//third 60ms
var isPalindrome = function(x) {
    return x === parseInt(x.toString().split("").reverse().join(""))
};
console.log(isPalindrome(-121));