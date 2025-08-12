function flattenArray(arr){
    if(!Array.isArray(arr)){
        return 'Input must be an array';
    }
    let result =[];
    for(let i=0; i<arr.length; i++){
        if(Array.isArray(arr[i])){
            result = result.concat(flattenArray(arr[i]));
        }else{
            result.push(arr[i]);
        }
    }
    return result;
}

console.log(flattenArray([1, [2, 3], [4, [5, 6]], 7])); // Output: [1, 2, 3, 4, 5, 6, 7]

function arrayFlatten(arr){
    return arr.reduce((acc, val) => {
        return acc.concat(Array.isArray(val) ? arrayFlatten(val) : val);
    }, []);
}

console.log(arrayFlatten([1, [2, 3], [4, [5, 6]], 7])); // Output: [1, 2, 3, 4, 5, 6, 7]

function flatten(arr){
    return arr.flat(Infinity);
}

console.log(arrayFlatten([1, [2, 3], [4, [5, 6]], 7]));