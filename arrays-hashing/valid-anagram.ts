// Given two strings s and t , return true if t is an anagram of s, and false otherwise.

// Solution 1: Brute Force
// Time Complexity: O(n^2)
// Space Complexity: O(1)
/*
    > Take the first character of s and compare it with all the characters in t.
    > Do this for all the characters in s.
    > If there is a match, remove the character from t.
    > If there is no match, return false.
    > If all the characters in s are matched, return true.

    Time -> O(n^2) two nested loops potentially iterating over the entire string twice
    Space -> O(1) using existing strings
*/
function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) return false;
    for (let i = 0; i < s.length; i++) {
        let found = false;
        for (let j = 0; j < t.length; j++) {
            if (s[i] === t[j]) {
                found = true;
                t = t.slice(0, j) + t.slice(j + 1);
                break;
            }
        }
        if (!found) return false;
    }
    return true;
}

// Solution 2: Sorting
// Time Complexity: O(nlogn)
// Space Complexity: O(1)
/*
    > Sort both strings.
    > Compare the characters in both strings.
    > If there is a mismatch, return false.
    > If all the characters in both strings are matched, return true.

    Time -> O(nlogn) to sort both strings
    Space -> O(1) using existing strings
*/
function isAnagram2(s: string, t: string): boolean {
    if (s.length !== t.length) return false;
    s = s.split('').sort().join('');
    t = t.split('').sort().join('');
    
    return s === t;
}