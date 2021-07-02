/**
 * Operations Manager
Time to move onto our second JavaScript file: OperationsManager.js.

In Operations Manager we'll want to make use of our Stack we created! We'll create two new stacks: operations and undos:

Operations Manager

The operations will be our list of actions we have taken. The undos will be the operations we have removed. If we ever wanted to "redo" an operation, we can simply pop it off our undos stack back onto operations!

 You can think of this like your favorite art program. When you undo your latest operation it might remove that line you just drew. If you wanted your line back you can click redo.

 Your Goal: Build Stacks
Let's add two stacks to our OperationsManager constructor: operations and undos.

You'll notice the Stack file has already been imported for you in OperationsManager.js. To create a new stack you can simply invoke it after the new operator new Stack().

 We'll store operations and undos on the operations manager instance. Similar to how we stored items on our stack, use this to refer to the instance and create the instance variable for both stacks. (i.e. this.operations).

Next, implement addOperation. This function will take the operation argument and simply add it to the top of our operations stack.

 Do you recall how to add a new element to the top of our stack from the previous stage?

Example use of Operations Manager:

const manager = new OperationsManager();

console.log( manager.operations.isEmpty() ); // true

manager.addOperation({ drawingType: 'dot', x: 50, y: 20 });

console.log( manager.operations.isEmpty() ); // false
 */

import Stack from './Stack';

class OperationManager {
    constructor() {
        this.operations = new Stack();
        this.undos = new Stack();
    }

    addOperation(operation) {
        this.operations.push(operation);

    }

    undo() {
        
    }

    redo() {
        
    }

    redoAll() {
        
    }
}

export default OperationManager;

/**
 * Undo & Redo
Now let's work on undo and redo. As it turns out these two functions are pretty similar in functionality!

Undo
First, let's work on undo.

Think about a paint program or a text document. 

When you undo a mistake, is it the least recent or most recent operation you undo? 

It would be the most recent operation!

Undo

 Here, we run undo twice. First the 4 is popped off operations and placed on undos, then the same for 3.

 For each undo we'll want to take an operation off our operations stack and add it to the top of the undos stack.

Redo
Now, let's think about redo. If you had two undos, which would be redone first? 

It would be the most recent undo!

Redo

 Your Goal: Implement Undo and Redo
Let's go ahead and implement undo and redo within OperationsManager.

Push and pop your way to victory!
 */

import Stack from './Stack';

class OperationManager {
    constructor() {
        this.operations = new Stack();
        this.undos = new Stack();
    }

    addOperation(operation) {
        this.operations.push(operation);

    }

    undo() {
        let op = this.operations.pop();
        this.undos.push(op);
    }

    redo() {
        let redo = this.undos.pop();
        this.operations.push(redo);
        
    }

    redoAll() {
        
    }
}

export default OperationManager;

/**
 * Redo All
Let's say we wanted to redo all of our undos.

We could just keep redo-ing all of undo operations until we had to stop. At what point would we stop? 

Redox2

We stop when the stack is empty!

Remember we have an appropriately named function on our stack for just that reason 

 Your Goal: Implement Redo All
Let's go ahead and implement redoAll where we keep redo-ing until we have no more undos left.
 */

import Stack from './Stack';

class OperationManager {
    constructor() {
        this.operations = new Stack();
        this.undos = new Stack();
    }

    addOperation(operation) {
        this.operations.push(operation);

    }

    undo() {
        let op = this.operations.pop();
        this.undos.push(op);
    }

    redo() {
        let redo = this.undos.pop();
        this.operations.push(redo);
        
    }

    redoAll() {
        while (!(this.undos.isEmpty())) {
            this.redo();
        }
    }
}

export default OperationManager;