function palindrome(str){
    return str === str.split('').reverse().join('');
}

console.log(palindrome('racecar')); // Output: true

function isPalindrome(str){
    let left = 0;
    let right = str.length -1;
    while(left < right){
        if(str[left] !== str[right]){
            return false;
        }
        left++;
        right--;
    }
    return true;
}

console.log(isPalindrome('level')); // Output: true