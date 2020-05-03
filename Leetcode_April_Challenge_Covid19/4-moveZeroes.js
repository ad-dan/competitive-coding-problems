/**
 * Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.
 * Example:
     Input: [0,1,0,3,12]
     Output: [1,3,12,0,0]
 * Note:
     You must do this in-place without making a copy of the array.
     Minimize the total number of operations.
 */


/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let zeroPos = -1;
    let nonZeroPos = 0;
    while(nonZeroPos<nums.length){
        if(nums[nonZeroPos]!==0 && zeroPos !== -1){
            if(zeroPos<nonZeroPos){
                let temp = nums[zeroPos];
                nums[zeroPos] = nums[nonZeroPos];
                nums[nonZeroPos] = temp;

                if(zeroPos+1 < nums.length && nums[zeroPos+1]===0)
                    zeroPos++;
                else
                    zeroPos = nonZeroPos;
            }
        }
        else if(nums[nonZeroPos]===0 && zeroPos === -1)
            zeroPos = nonZeroPos;
        nonZeroPos++;
    }
};