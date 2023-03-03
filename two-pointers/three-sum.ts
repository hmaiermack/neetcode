/*

Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] 
such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

Example 1:
    Input: nums = [-1,0,1,2,-1,-4]
    Output: [[-1,-1,2],[-1,0,1]]
    Explanation: 
    nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
    nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
    nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
    The distinct triplets are [-1,0,1] and [-1,-1,2].
    Notice that the order of the output and the order of the triplets does not matter.

Example 2:
    Input: nums = [0,1,1]
    Output: []
    Explanation: The only possible triplet does not sum up to 0.

*/

//Solution: Two Pointer
//Time Complexity: O(n^2)
//Space Complexity: O(1)
/*
    > Sort the array
    > Loop through array, setting left and right pointers to i+1 and end of array
    > If sum of left, right, and current index is 0, push to result array
    > Else if sum is > 0, decrement right pointer
    > Else increment left pointer
    > If sum is 0, increment left and decrement right pointers
    > If left pointer is same as previous, increment left pointer
    > If right pointer is same as previous, decrement right pointer
    > Return result array
*/

function threeSum(nums: number[]): number[][] {
    let result: number[][] = [];
    let sum = 0
    nums.sort((a, b) => a - b);
    for(let i=0; i< nums.length-2; i++){
        if(i>0 && nums[i]==nums[i-1]) continue;
		let left = i+1;
		let right = nums.length-1;
		while(left<right){
			sum = nums[i] + nums[left] + nums[right];
			if(sum===0){
				result.push([nums[i], nums[left], nums[right]]);
				left++;
				right--;
				// To avoid duplicates
				//check the next item for left pointer, if it same then increase left pointer until we get different item
                while(nums[left]==nums[left-1] && left<right) {
                    left++;
                }
				// above left pointer logic applied here for right pointer
                while(nums[right]==nums[right+1] && left<right) {
                    right--;
                }
			} else if(sum>0){
				right--;
			} else{
				left++;
			}
		}
	}
return result
};

console.log(threeSum([-1,0,1,2,-1,-4]))
console.log(threeSum([0, 1, 1]))