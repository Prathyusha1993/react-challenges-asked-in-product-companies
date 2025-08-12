function mergeSortedArrays(arr1, arr2){
    let mergeArray = [];
    let  i= 0;
    let  j = 0;
    while(i< arr1.length && j < arr2.length){
        if(arr1[i] < arr1[j]){
            mergeArray.push(arr1[i]);
            i++;
        }else{
            mergeArray.push(arr2[j]);
            j++;
        }
    }

    // If there are remaining elements in arr1, add them
    while(i < arr1.length){
        mergeArray.push(arr1[i]);
        i++;
    }

    while(j < arr2.length){
        mergeArray.push(arr2[j]);
        j++;
    }
    return mergeArray;
}

function mergeArray(arr1, arr2){
    return arr1.concat(arr2).sort((a,b) => a-b);
}

function mergeArrayUsingSpread(arr1, arr2){
    return [...arr1, ...arr2].sort((a,b) => a-b);
}