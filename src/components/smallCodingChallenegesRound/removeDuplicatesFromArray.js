function removeDuplicatesArray(arr){
    let uniqueArray = [];
    for(let i=0; i < arr.length; i++){
        if(!uniqueArray.includes(arr[i])){
            uniqueArray.push(arr[i]);
        }
    }
    return uniqueArray;
}

console.log(removeDuplicatesArray([1,2,3,4,5,2,4,1]));

function removeDuplicates(arr){
    let uniqueArr = new Set(arr);
    return Array.from(uniqueArr);
}

console.log(removeDuplicates(['apple', 'banana', 'dragon', 'apple', 'figs', 'guava', 'banana']));