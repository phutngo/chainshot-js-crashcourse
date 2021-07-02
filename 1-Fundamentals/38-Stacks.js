/**
 * Stack Data Structure
Stacks are an important data structure for many different types of problems. We'll take a look at the functions of a stack and what these types of problems are.

 Choosing the right data structure for a problem can save you quite a bit of headache!

In this lesson you will build your own simple implementation of a stack and then use that implementation to handle undoing and redoing operations. Along the way we'll learn about push, pop, stack overflows (and underflows), call stacks, and managing multiple stacks. 

Super exciting. Let's get started!
 */
/**
 * Push & Pop
Time to build a stack! A stack is a LIFO data structure. This means that when we retrieve elements from our stack, the most recently added element will be removed first.

 Let's take a closer look at LIFO in details.

Let's implement two methods, push and pop, to begin forming our stack. First let's see illustrations of both:

Push

 Push is this the only way to add elements to our stack. We add them to the "top" of the stack.

Pop

 Pop is the only way to retrieve elements from our stack. We remove the element from the top of the stack, retrieving the most recently added stack element.

 Your Goal: Implement the Methods
In our Stack class, you can see we already have a constructor with an items array.

In the push function let's add a new item to our items.

In the pop function let's remove the last item from items and return it.

 Feel free to use JavaScript array methods with similar names 
 */

 /**
  * LIFO
LIFO stands for Last-In-First-Out. This refers to the order in which elements move in and out of the data structure.

In a stack you push a new element onto the top of the data structure. This element then becomes the new top element of the stack. When you pop an element from the stack, the top element is removed from the stack.

For example:

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);

console.log(stack.pop()); // 4
console.log(stack.pop()); // 3
Notice how the elements get popped off in reverse order in a stack!

Array Methods
In JavaScript, there are two array methods, appropriately named push and pop, that function just as we would expect for our stack!

const arr = [1,2,3];

arr.push(4);

console.log(arr); // [1,2,3,4]

const top = arr.pop();

console.log(top); // 4
console.log(arr); // [1,2,3]
 Here is the MDN documentation for push and pop.
  */

 const { MAX_STACK_SIZE } = require('./config');

class Stack {
    constructor() {
        this.items = [];
    }
    push(item) {
        this.items.push(item);
    }
    pop() {
        return this.items.pop();
        
    }
    isEmpty() {
        
    }
    peek() {
        
    }
}

export default Stack;

/**
 * Overflow & Underflow
Have you ever heard of a Stack Overflow? Maybe the popular FAQ site or perhaps you've encountered the infamous recursive call stack error!

Either way, the term refers to a condition where the maximum memory size of the stack is exceeded:

Stack Overflow

Once the stack has reached it's max size, any attempt to push onto it will result in an overflow.

Similarily, if we try to pop when the we have no elements, can you imagine what that might be called?

Stack Underflow

An Underflow! Of course!

 Your Goal: Throw Errors
Ok, let's throw errors for stack overflows and underflows within our Stack class.

If executing push will exceed the MAX_STACK_SIZE, throw an Error.
MAX_STACK_SIZE is a number value. The number of elements in the items array cannot exceed this number.

If a pop is attempted on a stack with zero elements, throw an Error.
 To throw an Error, you can throw new Error("any error message"). For more on errors, you can refer back to the Exceptions lesson or the MDN documentation.
 */

 const { MAX_STACK_SIZE } = require('./config');

class Stack {
    constructor() {
        this.items = [];
    }
    push(item) {
        if (this.items.length === MAX_STACK_SIZE){
            throw new Error("MAX_STACK_SIZE reached");
        } else {
        this.items.push(item);
        }
    }
    pop() {
        if (this.items.length === 0) {
            throw new Error("Stack is empty");
        } else {
        return this.items.pop();
        }
        
    }
    isEmpty() {
        
    }
    peek() {
        
    }
}

export default Stack;

/**
 * IsEmpty and Peek
You may have noticed there are a couple of helper functions in our Stack class.

First, we have the isEmpty function. This function should tell us whether or not we have elements in our items stack.

Then we have peek:

Peek

 Peek allows us to take a look at what's on the top of the stack without popping it off. This way, we know what our next element on the stack will be.

 Your Goal: Implement Helper Functions
Implement isEmpty to return a boolean if items is empty.

 For bonus points, use this method in pop to check for underflow!

Implement peek to return the top element in items without changing the array.

 */
const { MAX_STACK_SIZE } = require('./config');

class Stack {
    constructor() {
        this.items = [];
    }
    push(item) {
        if (this.items.length === MAX_STACK_SIZE){
            throw new Error("MAX_STACK_SIZE reached");
        } else {
        this.items.push(item);
        }
    }
    pop() {
        if (this.items.length === 0) {
            throw new Error("Stack is empty");
        } else {
        return this.items.pop();
        }
        
    }
    isEmpty() {
        return (this.items.length === 0) //returns true if empty
        
    }
    peek() {
        return (this.items[this.items.length - 1])
    }
}

export default Stack;

