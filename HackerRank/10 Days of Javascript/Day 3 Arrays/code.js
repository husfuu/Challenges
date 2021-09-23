/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    // Complete the function
    // find the max number in nums array
    const max_num = Math.max(...nums);
    
    // filter the nums list so it doesn't have the max_num anymore
    nums = nums.filter(num => num !== max_num)
    
    return Math.max(...nums);
}
