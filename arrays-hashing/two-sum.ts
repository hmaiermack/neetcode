// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

//Solution 1: Brute Force
//Time Complexity: O(n^2)
//Space Complexity: O(1)
/*
    > Take the first element and add it with all of the following elements in the array.
    > Do this for all the elements in the array.
    > If there is a match, return the indices of the two elements.
    > If there is no match, return an empty array.

    Time -> O(n^2) two nested loops potentially iterating over the entire array twice
    Space -> O(1) using existing array
*/
function twoSum(nums: number[], target: number): number[] {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) return [i, j];
        }
    }
    return [];
}

//Solution 2: Hashing
//Time Complexity: O(n)
//Space Complexity: O(n)
/*
    > Create a map of the array.
    > For each element in the array, check if the difference between the target and the element is in the map.
    > If it is, return the indices of the element and the difference.
    > If it is not, add the element to the map.

    Time -> O(n) to iterate over the array once
    Space -> O(n) to create the map
*/
function twoSum2(nums: number[], target: number): number[] {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i];
        if (map.has(diff)) return [map.get(diff), i];
        map.set(nums[i], i);
    }
    return [];
}