/*
    Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific 
    target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.

    Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.

    The tests are generated such that there is exactly one solution. You may not use the same element twice.

    Your solution must use only constant extra space.

    Example 1:
        Input: numbers = [2,7,11,15], target = 9
        Output: [1,2]
        Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].
    
    Example 2:
        Input: numbers = [2,3,4], target = 6
        Output: [1,3]
        Explanation: The sum of 2 and 4 is 6. Therefore index1 = 1, index2 = 3. We return [1, 3].

    An example of a two-pointer problem: with these generally you start at the beginning and end and increment/decrement until you meet in the middle.

*/

//Solution: Two Pointer
//Time Complexity: O(n)
//Space Complexity: O(1)
/*
    > Assign variables to beginning/end (left/right)
    > Step through array, decrementing right if left + right if > target
    > Else increment left if left + right < target
    > Because the input is sorted, you know whether to increment or decrement pointers.
    > Return 1 indexed array, as in array starts at 1 rather than 0.

    Time -> O(n) looping over n numbers in array
    Space -> O(1) outside of var assignment/reassignment you don't need extra memory as n grows
*/


function twoSumii(numbers: number[], target: number): number[] {
    let left = 0;
    let right = numbers.length - 1;

    while (left < right) {
        let sum = numbers[left] + numbers[right];
        if (sum === target) {
            return [left + 1, right + 1];
        } else if (sum > target) {
            right--;
        } else {
            left++;
        }
    }
    return []
};

console.log(
    twoSumii([2,7,11,15], 9),
    twoSumii([-1, 0], -1),
    twoSumii([2,3,4], 6),
    twoSumii([25, 50, 75], 100)
    )