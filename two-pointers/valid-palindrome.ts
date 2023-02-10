// Given string s, determine if it is a palindrome, considering only alphanumeric chars and ignoring capitalization.

//Solution 1: Two Pointer
//Time Complexity: O(n)
//Space Complexity: O(1)
/*
    > Make input valid for the problem.
    > Compare the left most character to the right most character.
    > Increment left by one, decrement right by one, repeat.
    > Do this until left = right.


    Time -> O(n) for loop iterating over the entire array
    Space -> O(1) using existing string
*/

//Could write our own ascii validator and check each character within the for loop

function isPalindrome(s: string): boolean {
    const string = s.replace(/[^a-z0-9]/gi, '').toLowerCase().split(' ')

    //This could be a while loop if we pre assign i and j
    for(let i = 0, j = string.length - 1; i <= j; i++, j--) {
        if(s[i] !== s[j]) return false
    }
    return true
}

//Solution 2: Reverse
//Time Complexity: O(n)
//Space Complexity: O(n)
/*
    > Make input valid for the problem.
    > Create a copy of valid input and reverse it.
    > Return comparison boolean between validated input and reversed string.

    Time -> O(n) looping over chars in string to reverse
    Space -> O(n) creating a new array, not solving in place
*/
function isPalindrome2(s: string) {
    const string = s.replace(/[^a-z0-9]/gi, '').toLowerCase().split(' ').join('')
    const reverse = string.split('').reverse().join('')
    return string === reverse
}

console.log(isPalindrome2("A man, a plan, a canal: Panama")) // -> true
console.log(isPalindrome(" ")) // -> true
console.log(isPalindrome("A man, a plan, a canal: Panama")) // -> true