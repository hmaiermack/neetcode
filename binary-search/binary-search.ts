/*
Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. 
If target exists, then return its index. Otherwise, return -1.

Example 1:
    Input: nums = [-1,0,3,5,9,12], target = 9
    Output: 4
    Explanation: 9 exists in nums and its index is 4

Example 2:
    Input: nums = [-1,0,3,5,9,12], target = 2
    Output: -1
    Explanation: 2 does not exist in nums so return -1

*/

//Solution: Binary Search
//Time Complexity: O(n log n)
//Space Complexity: O(1)
/*
    >Handle base cases
    > Assign variables to beginning/end (left/right)
    > while loop, splitting the array with each iteration
    > get middle value of array based on value of (left + right) / 2
    > if value of middle index is less than target we can assume all values to the left of middle index are incorrect and set the new left value to middle + 1
    > if value of middle index is more than target we can assume all values to the right of middle index are incorrect and set the new right value to middle - 1
    > This only works because the input array is sorted

    Time -> O(n log n) looping over n numbers in array
    Space -> O(1) outside of var assignment/reassignment you don't use extra memory as n grows
*/


function search(nums: number[], target: number): number {
    if (!nums ) return -1

    let left = 0
    let right = nums.length - 1
    if (nums[left] > target || nums[right] < target) return -1
    if (nums[left] === target) return left
    if (nums[right] === target) return right

    while (left <= right) {
        //this is dangerous and could overflow
        //better solution is using a bitwise right operator
        // (left + right) >>> 1
        //this will shift the bits right by one eg 
        // 1110(14) -> 0110(7)

        //you could also implement this as follows:
        //mid = left + Math.floor((right - left) / 2)
        //this will also help prevent overflow errors
        
        let mid = Math.floor((left + right) / 2)
        console.log({mid, left, right})
        if(nums[mid] === target) return mid
        else if(nums[mid] > target) {
            right = mid - 1
        } 
        else if(nums[mid] < target) {
            left = mid + 1
        }
    }
    return -1
};

console.log(search([-1,0,3,5,9,12], 9))