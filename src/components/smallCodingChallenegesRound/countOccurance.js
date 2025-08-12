function countOccurance(arr){
    let count = {};
    for(let i=0; i<arr.length; i++){
        if(count[arr[i]]){
            count[arr[i]]++;
        }else{
            count[arr[i]] = 1;
        }
    }
    return count;
}

console.log(countOccurance([1, 2, 3, 1, 2, 1])); // Output: { '1': 3, '2': 2, '3': 1 }