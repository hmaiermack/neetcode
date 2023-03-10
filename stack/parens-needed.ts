//Given a string of parenthesis: return the number of parenthesis needed to close all open parens
// (() -> 1
// (()()) -> 0

//Solution: Stack
//Time Complexity: O(n)
//Space Complexity: O(n)
/*
    > Loop over string
    > If open bracket push to stack
    > If closing bracket check if stack is empty
        if so increment count
        else pop from stack
    > Return count + stack length
*/

function parensNeeded(s: string): number {
    const stack: string[] = []
    let count = 0
    for(let i=0; i < s.length; i++) {
        if(s[i] === "(") {
            stack.push(s[i])
        } else {
            if(stack.length === 0) {
                count++
            } else {
                stack.pop()
            }
        }
        console.log(stack, count)
    }
    return count + stack.length
}

console.log(parensNeeded("(()"))
