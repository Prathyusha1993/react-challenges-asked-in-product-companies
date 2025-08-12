function missingNumber(nums){
    let n = nums.length;
    const expectedSum = (n* (n+1)) / 2;

    let actualSum= 0;
    for(let i= 0; i<nums.length; i++){
        actualSum += nums[i]
    }
    return expectedSum - actualSum;
}

console.log(missingNumber([3, 0, 1])); // Output: 2