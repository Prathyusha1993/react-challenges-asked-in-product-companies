function longestWordStr(str){
    const words = str.split(' ');
    let longestWord = '';
    for(let i=0; i<words.length; i++){
        if(words[i].length > longestWord.length){
            longestWord = words[i];
        }
    }
    return longestWord;
}

console.log(longestWordStr('The quick brown fox jumps over the lazy dog')); // Output: 'quick'
console.log(longestWordStr('JavaScript is a versatile programming language')); // Output: 'programming'