/*
JavaScript Prototypes
JavaScript Prototypes are an important, albeit often misunderstood feature! They can be quite helpful for making many instances of objects with linked, re-usable functionality. They are quite often compared to classes in other object-oriented programming languages.

Despite similarities to classes, prototypes are quite different! In some ways JavaScript seeks to make prototypes familiar with keywords like Class and new. Looking closely, we'll see why this can be somewhat deceiving!

 It's worth noting that Prototypes are the underlying mechanism for the ES2015 Class Keyword. We'll dive into Class more in JavaScript Classes!

When used with the proper understanding, prototypes are a powerful language feature. Let's dive into learning about prototypes!
*/

/* Taking Shape
Prototypes
Many programming languages have a concept of a Class. Classes are templates for creating objects called instances. Each instance will have it's own set of properties called state. The class provides initial state values and functions copied into each new instance.

JavaScript does not have classes in a traditional sense. It has prototypes. They function similarily with a few key differences! Primarily, prototypes provide a way to share properties and functions by linking objects together. This is contrary to classes which traditionally copy functionality to new instances.

 You can think of prototypes as a chain of linked objects.

 Your Goal: Complete the Shape function
The Shape function will take two arguments: x and y. Store these values in an object position on the instance (this).

 For reference see this example. The tests will invoke Shape with the new keyword, creating an object and setting it to this within the function.

The position should have keys x and y containing the corresponding values:

const shape = new Shape(5, 10);

console.log(shape.position.x) // 5
console.log(shape.position.y) // 10
 Notice that position is an object with two keys x and y!
*/

/*
Prototype Chain
Let's consider a simple example:

function Animal(name) {
    this.name = name;
}

const animal = new Animal("Bud");
The animal here will already have some methods available: valueOf, hasOwnProperty, toString and more depending on your JavaScript environment. Where do these methods come from?

They come from Object.prototype (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object). This is the top of the prototype chain for every object in JavaScript.

Note that these methods are not created anew for every object! They are actually the same methods:

const animal = new Animal("Bud");
const animal2 = new Animal("Lassie");

console.log(animal.hasOwnProperty === animal2.hasOwnProperty); // true
First, the JavaScript engine will lookup to see if the animal instances have a method hasOwnProperty. Then it will look on the Animal.prototype. If not, it will continue to Object.prototype and find the method there.

Since both animal and animal2 refer to the hasOwnProperty method on Object.prototype, the reference is equal and returns true above.

Syntax Example
Let's take a look at how prototypes are traditionally used:

function Car(make, model) {
    this.make = make;
    this.model = model;
}

const car = new Car('Toyota', 'Camry');
const car2 = new Car('Honda', 'Civic');

console.log(car.make) // Toyota
console.log(car2.model) // Civic
Here Car is just a regular JavaScript function. Often it is referred to as a constructor function, although it is not a special function by any means! It is capitalized purely by convention. We capitalize it to show we plan to use it with the new operator.

Using the new operator we can create new instances of Car. //!The new operator will create a new object and set it to this within the Car function in the example above. Implicitly, new will also return this object (if no other object is returned).

 ! In This Keyword we went over rules for binding this. Using new is another rule for how it is bound. In this case, the new instance of the car is used for this in the constructor function.

Both Car instances will have the properties make and model and will store them from the arguments passed into the constructor call.
*/

function Shape(x, y) {
    // store x and y in this.position
    this.position = { x, y }
}

/*Adding a Method
Let's make our shape move!

To add a method to our prototype we can do this:

function Shape(x,y) {
    this.position = { x,y }
}

Shape.prototype.move = function(x,y) {
    // move the shape
}
By adding this method to the Shape.prototype object, new instances will be able to access it via the prototype chain.

 Be careful not to use arrow function syntax here, or this may not be appropriately bound! We want this to be the instance of Shape, with the arrow syntax it will inherit the context of the scope unless otherwise bound.

 Your Goal: Add Move Function
Create a function move that will be added to the Shape.prototype. This function should take two arguments: x and y.

It should move the shape's position by adding the corresponding arguments value:

const shape = new Shape(1, 1);

shape.move(1, 4);

console.log( shape.position.x ); // 2
console.log( shape.position.y ); // 5
*/
/*
Shape Prototype Chain
Consider our Shape example:

function Shape(x,y) {
    this.position = { x,y }
}

Shape.prototype.move = function(x,y) {
    // move the shape
}
The function Shape will have a prototype object that we can attach methods to.

By adding a method move here, we are simply making move available to every new Shape instance:

const shape = new Shape(0,0);

console.log(typeof shape.move); // function
Internally, shape is linked to Shape.prototype, which allows us to access the move function via the prototype mechanism. Cool, huh? 

 When looking up properties, the JavaScript engine would first look for move on the shape instance. If not found, the engine will check Shape.prototype, and finally Object.prototype at the top of this prototype chain. In this case, move is on Shape.prototype so it will use that value.
 */

// Our Shape "Constructor"
function Shape(x, y) {
    // store x and y in this.position
    this.position = { x, y }
}

Shape.prototype.move = function (x,y) {
    this.position.x = this.position.x + x;
    this.position.y = this.position.y + y;
}

/**
 * Sharing Functionality
We're moving onto a new shape: Circle! You can find the definition started in your "Circle.js" tab.

Circle will be similar to Shape. The only addition is a new radius property. Since these prototypes will be so similar, we'll invoke Shape in our Circle function.

 Your Goal: Complete the Circle Function
In Circle.js you'll need to do two things:

Pass the arguments to Shape via call.
 Notice we are binding Circle with this using call. This way when Shape is invoked, it will store x and y on the Circle instance!

Store radius on our Circle instance. You can do this exactly how we stored position on the Shape class.
The final result behavior should be:

const Circle = new Circle(5,10,15);

console.log(circle.position.x); // 5
console.log(circle.position.y); // 10
console.log(circle.radius); // 15
 */

//https://www.chainshot.com/content/5c492009e714340017be6e1d5d7698b6e5a95ac05652f732/stage/5c492009e714340017be6e1d5d76ef2d09d5ed335cbf08dd

import Shape from './Shape';

function Circle(x, y, radius) {
    Shape.call(this, x, y);
    this.radius = radius;
}

/*
Linking Prototypes
What would happen if we tried to call .move function on our Circle instance like the code below?

const circle = new Circle(5,10,15);

circle.move(1,1); // what happens?
If you're not sure, you can try it out by running the test cases now! 

You'll likely see an error: TypeError: circle.move is not a function. 

Even though we use the Shape function to store the variables x and y on our Circle, we did not link to the Shape prototype!

This is where the awesome Object.create method comes in:

Circle.prototype = Object.create(Shape.prototype);
Now our Circle prototype inherits methods from the Shape Prototype! Any new circle will have a move method.

 Object.create is used to link our prototypes within the prototype chain.

 Your Goal: Link the prototypes
Use Object.create to link Circle.prototype to Shape.prototype.

This will ensure that any methods on Shape.prototype will also become available on new Circle instances. For instance, we'll be able to use circle.move(1,1); just like we did on the shape instance!
*/

import Shape from './Shape';

function Circle(x, y, radius) {
    Shape.call(this, x, y);
    this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);

export default Circle;

/*
Time to create the Rectangle. You'll find the definition already started for you in Rectangle.js!

 Your Goal: Complete the Rectangle
Complete the Rectangle function and link it's prototype to Shape's prototype.

This will be similar to our Circle! Rectangle will be a Shape plus a couple properties: height and width. We'll want to store these on the Rectangle instance.

const rect = new Rectangle(0, 0, 20, 40);

console.log(rect.x, rect.y); // 0, 0
console.log(rect.height, rect.width); // 20, 40
*/

import Shape from './Shape';

function Rectangle(x, y, height, width) {
    Shape.call(this, x, y);
    this.height = height;
    this.width = width;
}

Rectangle.prototype = Object.create(Shape.prototype);

export default Rectangle;

/**Adding a Prototype Method
Time to add a prototype method to Rectangle. This method will only make sense for rectangles, so we'll want to add it directly to Rectangle.prototype.

 Your Goal: Create a Flip Function
Create a function flip on the rectangle prototype! This function will switch the height and width dimensions of the rectangle. It will take no arguments.

 You may need to store a temporary variable in order to flip the dimensions!

Example:

const rectangle = new Rectangle(10, 20);

console.log(rectangle.height, rectangle.width); // 10, 20

rectangle.flip();

console.log(rectangle.height, rectangle.width); // 20, 10
 Be careful you don't declare the method flip on Rectangle.prototype before using Object.create! The Object.create method will return a completely new object to which you can attach the method.
 * 
 */
 import Shape from './Shape';

 function Rectangle(x, y, height, width) {
     Shape.call(this, x, y);
     this.height = height;
     this.width = width;
 }
 
 Rectangle.prototype = Object.create(Shape.prototype);
 Rectangle.prototype.flip = function (){
     const temph = this.height;
     this.height = this.width;
     this.width = temph;
 }
 
 export default Rectangle;