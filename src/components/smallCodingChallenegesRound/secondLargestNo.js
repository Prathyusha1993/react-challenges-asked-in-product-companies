function secondlargestNo(arr){
   if(arr.length < 2){
    return 'Array must contain at least two elements';
   }

   let largest = -Infinity;
   let secondLargest = -Infinity;

   for(let i=0; i<arr.length; i++){
        if(arr[i] > largest){
            secondLargest = largest;
            largest = arr[i];
        }else if(arr[i] < largest && arr[i] > secondLargest){
            secondLargest = arr[i];
        }
   }
   if(secondLargest === -Infinity){
    return 'No second largest number found';
   }

   return secondLargest;
}

console.log(secondlargestNo([1, 2, 3, 4, 5])); // Output: 4

