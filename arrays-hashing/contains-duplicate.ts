// Given an int array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Solution 1: Brute Force
// Time Complexity: O(n^2)
// Space Complexity: O(1)
/* 
 > Take the first element and compare it with all the other elements in the array.
 > Do this for all the elements in the array.
 > If there is a match, return true.

    Time -> O(n^2) two nested loops potentially iterating over the entire array twice
    Space -> O(1) using existing array
*/
function containsDuplicate(nums: number[]): boolean {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
        if (nums[i] === nums[j]) return true;
        }
    }
    return false;
    }

// Solution 2: Sorting
// Time Complexity: O(nlogn)
// Space Complexity: O(1)
/* 
    > Sort the array.
    > Compare the adjacent elements in the array.
    > If there is a match, return true.

    Time -> O(nlogn) to sort the array
    Space -> O(1) using existing array
*/
function containsDuplicate2(nums: number[]): boolean {
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] === nums[i + 1]) return true;
    }
    return false;
}

// Solution 3: Set
// Time Complexity: O(1)
// Space Complexity: O(n)
/*
    > Create a set from array.
    > If the size of the set is not equal to the length of the array, return true.
    > This is because a set only contains unique values.

    Time -> O(n) + 1 to create the set and compare the size
    Space -> O(n) to create the set
*/
function containsDuplicate3(nums: number[]): boolean {
    const set = new Set(nums);
    return set.size !== nums.length;
}

