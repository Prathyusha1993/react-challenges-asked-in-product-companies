function reverseString(str){
    return str.split('').reverse().join('');
}

console.log(reverseString('hello'));


function stringReverse(str){
    let reversed = '';
    for(let i = str.length - 1; i >= 0; i--){
        reversed += str[i];
    }
    return reversed;
}

console.log(stringReverse('world'));


function reverseString2(str){
    let reversed = '';
    for(let i=0; i<str.length; i++){
        reversed = str[i] + reversed;
    }
    return reversed;
}

console.log(reverseString2('javascript'));