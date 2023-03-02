class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
    }

    const fifth = new ListNode(5)
    const fourth = new ListNode(4, fifth)
    const third = new ListNode(3, fourth)
    const second = new ListNode(2, third)
    const first = new ListNode(1, second)

//Solution: Iterative
//Time Complexity: O(n)
//Space Complexity: O(1)
/*
    >Handle base cases
    > Assign current to head, prev to null
    > inside while loop, instantiate temp variable to current.next, for first iteration this will be second node
    > set current.next to prev, for first iteration this will be null so it will be the end of the list
    > set prev to current, for first iteration this will be first node
    > set current to temp, for first iteration this will be second node, or what was the next node of the head initally
    > continue until current is null
*/    
        
   
   function reverseList(head: ListNode | null): ListNode | null {
    let prev: ListNode | null = null
    let curr = head
    if(!head) return null
    while (curr) {
        console.log(prev)
        console.log(curr)
        let t = curr.next
        console.log({t})
        curr.next = prev
        console.log({curr})
        prev = curr
        console.log({prev})
        curr = t
        console.log({curr})
    }
    return prev
   };

reverseList(first)