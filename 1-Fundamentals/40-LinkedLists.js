/**
 * Linked Lists
Linked Lists are an important data structure! It is also quite appropriately named considering that it is simply a list of nodes connected to each other:

Linked List

Each node may store some data and a reference to the next node. If we know the head node we can just follow the reference to the next node and then the next node… until we reach the end of the list.

If we ever need to remove a node, we can do so by connecting the surrounding nodes:

Connecting

 Here we're simply changing the next reference on the first node to point to the last node. This cuts the middle node right out of the list! 

Let's dive into some fun linked-list coding exercises!
 */
/**
 * Linked List Node
The first step in creating a linked list is creating the node:

Node

Each node keeps a reference to the next node. If there is no next node, the value is null.

 Your Goal: Build the Node
Add a constructor function that takes one argument, data. Store data on the node instance.

Also, in the constructor, add a property next to the node instance. For now, set this property to null.

Example:

const node = new Node(4);

console.log(node.data); // 4
console.log(node.next); // null
 */

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

/**
 * Linked List
Now let's work on our Linked List implementation! In this stage we'll work on the new file LinkedList.js.

We need to keep track of a head. This is the first node in the linked list.

The head will keep a reference to the next node which will keep a reference to its next node… and so on until the end of the list.

Linked List

 Your Goal: Linked List Constructor
Add a constructor function to the LinkedList in the new file LinkedList.js.

The linked list should have a head property that is set to null by default.

Example:

const linkedList = new LinkedList();

console.log(linkedList.head); // null
 */

class LinkedList {
    constructor() {
        this.head = null;
    }
}

/**
 * Add First
Now it's time to create a method for adding a node to the front of the linked list. This node will become the new head node.

For implementing this we can break it into two scenarios:

No Existing Head Node
The first scenario is when we have no existing head node.

This scenario is pretty simple. We just need to set the new node as the head on the LinkedList:

No Head

Existing Head Node
The second scenario is when there is an existing head node.

This scenario is a bit more complicated. We need to do 2 things.

First we need to set the next of this new node to the current head:

Existing Head

Second we need to set the head to the new node we added to the front:

Set Head

 In this example the original head node does not have a next node.

If it did, would we need to change it? 

Nope! This will work fine, the rest of the list can stay connected the way it was previously.

 Your Goal: Add First Method
Write a method called addFirst on LinkedList. This method will take a node and add it to the front of the linked list.

Example of adding a node:

const linkedList = new LinkedList();

linkedList.addFirst( new Node(1) );

console.log(linkedList.head.data); // 1

linkedList.addFirst( new Node(2) );

console.log(linkedList.head.data); // 2
console.log(linkedList.head.next.data); // 1
 To accomplish this you will need to modify both the linked list's head and the node's next property.
 */

 class LinkedList {
    constructor() {
        this.head = null; //supposed to point to a node object
    }
    addFirst(node){ //a node is an object with 2 properties data and next
        node.next = this.head;
        this.head = node;
    }
}

/**
 * Add Last
In the last stage we added a node to the front of the list, now it's time to add one to the back of the list. As you might imagine, this one is a bit trickier.

We can divide it into the same two scenarios again:

No Existing Head Node
If there is no existing head node, this actually works just the same as the addFirst logic.

Since there's no other nodes, whether you are adding first or last boils down to the same logic… A new head node:

No Head

Existing Head Node
It's a bit trickier with an existing head node. Let's say we have a list of size 2:

Add Last

We need to start at the head and continue down the list until we reach a point in the list where there is no next node. Once we reach this point, we set the next to our new node.

 Your Goal: Add Last
Create a method addLast on LinkedList which takes a node and adds it to the end of our linked list.
 */

class LinkedList {
    constructor() {
        this.head = null;
    }
    addFirst(node){
        node.next = this.head;
        this.head = node;
    }
    addLast(node) {
        if (!(this.head)) { //if not the head then made the node the head and end.
            this.head = node;
            return;
        }

        let ref = this.head; //temp variable for head node
        while (ref.next) {ref = ref.next}; //while ref.next is true/notnull then make the ref = ref.next
        ref.next = node;
    }
}

/**
 * Index Of
Let's write an indexOf method like a regular array! It will be zero-based so the head will be 0 and every following index will be incremented by 1:

Index Of

 Need a refresher on the indexOf method? You can find more information in the MDN docs.

 Your Goal: Write Index Of
Write a method indexOf on LinkedList which takes node and returns a number index that indicates where the node is in the list.

To determine if a node is equal to another node you can simply compare them with (node1 === node2). This will evaluate to true if they are the same node.

 Technically when comparing objects, the === operator will return true if they point to same place in memory. For our purposes this will work if they refer to the same node. You can find more on the equality operators here.

Examples of using indexOf:

const node1 = new Node(4);
const node2 = new Node(3);
const linkedList = new LinkedList();

linkedList.addLast(node1); // node1 
linkedList.addLast(node2); // node1 --> node2

console.log(linkedList.indexOf(node1)); // 0
console.log(linkedList.indexOf(node2)); // 1
You can assume that the node is in the list. There is no need to handle the case where it is not found… unless you really want to! 
 */

class LinkedList {
    constructor() {
        this.head = null;
    }
    
    addFirst(node){
        node.next = this.head;
        this.head = node;
    }
    
    addLast(node) {
        if (!(this.head)) { //if not the head then made the node the head and end.
            this.head = node;
            return;
        }

        let ref = this.head; //temp variable for head node
        while (ref.next) {ref = ref.next}; //while ref.next is true/notnull then make the ref = ref.next
        ref.next = node;
    }

    indexOf(node) {
        let current = this.head; //temp variable for head node
        let ind = 0;

        while (current) { 
            if (node === current) {return ind;} 
            else {
            ind++;
            current = current.next;
            }

        }
    }
}

/**
 * Remove At
Okay, time for the trickiest method yet! It's going to be like linked-list surgery. 

We will need to remove a node from the list and then stitch the node before it to the node it was pointing to!

Let's again consider multiple scenarios:

Remove the Head Node
If we're removing the node at index 0 (the head node), we can simply set the new head node to the next node that the original head node was pointing to.

If the original head node had no next reference, the head reference becomes null. This is an empty list, so it works! 
If the original head node had a next reference, it would become the new head node, which is exactly what we want! 
Removing a Non-Head Node
If we're removing a node in between other nodes, we will need to connect the previous node to the next node:

Connect

Once we make this connection, we've successfully removed the node from the linked list!

 Your Goal: Remove At
Add a method removeAt on LinkedList.

This method will take a number index and remove the node in the list corresponding to that index position.

Deep Retrieval

 */

class LinkedList {
    constructor() {
        this.head = null;
    }
    
    addFirst(node){
        node.next = this.head;
        this.head = node;
    }
    
    addLast(node) {
        if (!(this.head)) { //if not the head then made the node the head and end.
            this.head = node;
            return;
        }

        let ref = this.head; //temp variable for head node
        while (ref.next) {ref = ref.next}; //while ref.next is true/notnull then make the ref = ref.next
        ref.next = node;
    }

    indexOf(node) {
        let current = this.head; //temp variable for head node
        let ind = 0;

        while (current) { 
            if (node === current) {return ind;} 
            else {
            ind++;
            current = current.next;
            }

        }
    }

    removeAt(index) {
        if (index === 0) {
            this.head = this.head.next;
            return;
        }

        let idx = 0;
        let node = this.head;

        while (idx < (index - 1)) {
            node = node.next;
            idx++;
        }

        node.next = node.next.next; 
    }
}

module.exports = LinkedList;