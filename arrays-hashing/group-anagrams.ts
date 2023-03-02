/*
Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:
    Input: strs = ["eat","tea","tan","ate","nat","bat"]
    Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Example 2:
    Input: strs = [""]
    Output: [[""]]

*/

// Solution 1: Sorting
// Time Complexity: O(m * nlogn)
// Space Complexity: O(n)
/*
    > Sort all strings in array.
    > Loop over sorted array
    > If theres no key of $string in hashmap, hashmap -> { $string: [strs[i]]}
    > Else, this means the key already exists is hashmap: push to end of $string value

    Time -> O(m * nlogn) where m is length of array and n is average length of strings in array
    Space -> O(n) linear space complexity, just an extra object and array
*/

//deal with base cases obviously

function groupAnagrams(strs: string[]): string[][] {
    const hash: { [key: string] : string[] } = {}
    const sortedStrings = strs.map((s) => s.split('').sort().join(''))

    for(let i = 0; i < sortedStrings.length; i++) {
        const key = sortedStrings[i]
        if(!hash[key]) {hash[key] = [strs[i]]; console.log('bimbo')}
        else {
            hash[key].push(strs[i])
        }
    }
    return Object.values(hash)
}

/*
    You could also count how many occurrences of a character there are in each string via comparing ascii vals,
    would look something like -> new Array(26) ... array[asciiValue] =+ 1 for each asciiVal(char) in string where asciiVals are 0 based
    using the count array as a key with an array of the strings that match that count.
    This would save you the time complexity of sorting each string in the array.

    I believe solving in this way is more contrived but is superior in terms of time.
*/

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))