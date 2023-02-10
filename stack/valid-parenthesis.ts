/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.

Example 1:
    Input: s = "()"
    Output: true

Example 2:
    Input: s = "()[]{}"
    Output: true

Example 3:
    Input: s = "(]"
    Output: false

Example 4:
    Input: s = "({[]})"
    Output: true
*/

//Solution: Stack
//Time Complexity: O(n)
//Space Complexity: O(n)
/*
    > First, assign pairs to hash for matching
    > Check base cases -> eg if not divisible by 2 return
        if closing bracket on start return
        if open bracket on end return etc
    > Else loop over string
    > each index check if open bracket 
            if so append to end of stack
        else: check if index is matching value for key in pairs
            if not return false
    > Stack will grow/shrink as iterated over eg
        [(, {, [ ] -> [ (, { ] -> [ ( ] and so on

    Time -> O(n) looping over n chars in string
    Space -> O(n) potentially n indexes in stack
*/


const pairs = {
    "(" : ")",
    "{" : "}",
    "[" : "]"
}

function isValid(s: string): boolean {
    if(s.length % 2 != 0) return false
    if(s[0] === ")" || s[0] === "}" || s[0] === "]") return false
    if (s[s.length - 1] === "[" || s[s.length - 1] === "(" || s[s.length - 1] === "{") return false

    const stack = []

    for(let i=0; i < s.length; i++) {
        // if it's an opening bracket, push into stack
        // else, assume it's closing bracket and check if it matches anything
        if(s[i] === "[" || s[i] === "(" || s[i] === "{") {
            //@ts-ignore
            stack.push(s[i])
            console.log(stack)
            //@ts-ignore
        } else if (pairs[stack.pop()] !== s[i]) {
            return false
        }

        
    }
    return stack.length === 0

};

console.log(
    isValid("({[]})"),
)