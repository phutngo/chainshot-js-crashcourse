/**
 * Classes
Classes are a relatively new feature, added to JavaScript in ES2015. Despite being new to the language, classes do not introduce any fundamental changes to the language. They simply create a new interface for using prototypes.

// an example of a Person class
class Person {
    constructor() {
        this.name = "Benjamin Button";
        this.age = 40;
    }
    haveBirthday() {
        // Benjamin Button was a curious case...
        this.age--;
    }
}
Classes are gaining popularity in JavaScript since their introduction. For example, the popular front-end framework React instructs using classes when creating components.

Let's create Hero and Warrior classes to learn our way around this feature!
 */

/**
 * Class Syntax
Classes can be defined using the class keyword, followed by its name and curly braces {}. Inside these curly braces we can define methods. These methods can be custom or a constructor.

The constructor is a special function that is called only once per new instance:

class Hello {
    constructor() {
        console.log('hello!');
    }
}

const h1 = new Hello(); // hello!
const h2 = new Hello(); // hello!
Both h1 and h2 are instances of Hello. When an instance is created, the constructor function is called.

A constructor is a great place to initialize properties on a class instance. We can do so by using the this keyword, which is the instance:

class Team {
    constructor() {
        this.sport = "soccer";
    } 
}

const t1 = new Team();
console.log(t1.sport); // soccer
The sport property is stored on the instance of Team, initialized to "soccer".

 Your Goal: Hero Health
Within your constructor function, add a health property to a hero instance and set it to 50.

When creating a new hero it should work like this:

const hero = new Hero();

console.log(hero.health); // 50
 */

/*
Instances
Classes form the template for new objects to borrow behavior from. These new objects are called instances.

An important note in JavaScript is that these instances all refer to the same method created on the class:

Instances

This image represents the code:

class Team {
    constructor(name) {
        this.name = name;
    }
}

const team1 = new Team("Giants");
const team2 = new Team("Jets");
Both team1 and team2 are instances of Team. They both use the same constructor function.

The difference is that when team1 calls the constructor, the this keyword is the team1 object. For team2, this would be the team2 object.

The result of the code above is name is stored on the appropriate object:

const team1 = new Team("Giants");
const team2 = new Team("Jets");

console.log(team1.name); // "Giants"
console.log(team2.name); // "Jets"
*/

class Hero {
    constructor() {
        this.health = 50;
    }
}

module.exports = Hero;

/**
 * Methods
In addition to constructors we can define our own methods on classes:

class Team {
    constructor() {
        this.wins = 0;
        this.losses = 0;
    }
    changeRecord(isWin) {
        if(isWin) {
            this.wins++;
        }
        else {
            this.losses++;
        }
    }
}
Here changeRecord has a boolean parameter isWin that determines whether to add a win or a loss to the team's record.

 Your Goal: Take Damage method
Add a method takeDamage to the hero class. This method should take one number argument representing the damage. This number should be directly subtracted from the hero's health.

For example:

const hero = new Hero();

console.log(hero.health); // 50

hero.takeDamage(5);

console.log(hero.health); // 45
Next Stage

 */
class Hero {
    constructor() {
        this.health = 50;
    }
    takeDamage(num) {
        this.health = this.health - num;
    }
}

module.exports = Hero;

/**
 * Subclasses
It is possible to create subclasses that extend or inherit behavior from their parent class.

 Underneath the hood, extend uses the prototype chain. Refer to the prototype lesson to understand the difference between prototypal inheritance and classical inheritance.

Let's see an example of extending a class:

class Shape {
    constructor() {
        this.position = { x: 0, y: 0 }
    }
}

class Rectangle extends Shape {
    
}
In Rectangle we can add functionality that only pertains to a rectangle without changing our definition of Shape.

Meanwhile Rectangle inherits the position property from Shape:

const rect = new Rectangle();

console.log(rect.position.x); // 0
console.log(rect.position.y); // 0
 Your Goal: Extend Hero
In the new file, Warrior.js, modify the Warrior to extend the Hero class.

No need to add anything to Warrior just yet, simply extend the class for now!
 */


//https://www.chainshot.com/content/5c492009e714340017be6e1d5dad0494a54be5305b6b3297/stage/5c492009e714340017be6e1d5dad0fc0a54be5305b6b329f

/**
 * New Keyword: Super
Let's continue with the example from the previous stage. We have a Shape class and a Rectangle class that extends it.

If we wanted to add new properties to our rectangle, we could do so in the constructor:

class Shape {
    constructor() {
        this.position = { x: 0, y: 0 }
    }
}

class Rectangle extends Shape {
    constructor() {
        super();
        this.height = 10;
        this.width = 5;
    }
}
Notice the use of the keyword super. When invoked, this calls the constructor on Shape.

 Subclasses must call super before accessing this inside the constructor or JavaScript will throw a reference error.

Now Rectangle will have properties from both constructors:

const rectangle = new Rectangle();

console.log(rectangle.position.x); // 0
console.log(rectangle.height); // 10
console.log(rectangle.width); // 5
 Your Goal: Add Rage
Add a rage property to the Warrior. The value of rage will start at 0.

const warrior = new Warrior();

console.log(warrior.rage); // 0
 */

const Hero = require('./Hero');

class Warrior extends Hero {
    constructor () {
        super();
        this.rage = 0;
    }
}
module.exports = Warrior;

/**
 * Calling Super Methods
In the last stage we used super to invoke a constructor from a child class constructor.

 Often inheritance uses parent/child metaphors. The class that has been extended is called the parent, while the class extending it is called the child 

We can also use super to call corresponding methods on a parent class:

class Potion {
    constructor() {
        this.empty = false;
    }

    drink() {
        this.empty = true;
    }
}

class NoisyPotion extends Potion {
    drink() {
        super.drink();
        console.log("LOUD NOISES!");
    }
}
The NoisyPotion will log loud noises when it is drunk.

By calling super.drink() it will also set itself to empty, which is the drink behavior for Potion.

 Your Goal: Extend takeDamage
Add a method takeDamage to the Warrior class that will increment rage by 1 each time the warrior takes damage.

It should also invoke takeDamage method on Hero which will inflict the damage on the hero's health.

const warrior = new Warrior();

console.log(warrior.health, warrior.rage); // 50, 0

warrior.takeDamage(10);

console.log(warrior.health, warrior.rage); // 40, 1
Be sure to pass the damage argument into the super.takeDamage call!
 */

const Hero = require('./Hero');

class Warrior extends Hero {
    constructor () {
        super();
        this.rage = 0;
    }

    takeDamage(num) {
        super.takeDamage(num);
        this.rage++;
    } 
}

module.exports = Warrior;

/**
 * Configurable Health
Final Task! Let's make both the Hero and Warrior classes have configurable health.

When creating a warrior/hero we'll pass a number which should be stored as their health:

const warrior1 = new Warrior(50);
const warrior2 = new Warrior(25);
const hero1 = new Hero(10);

console.log(warrior1.health); // 50
console.log(warrior2.health); // 25
console.log(hero1.health); // 10
Arguments that are passed when calling a class with new will be passed directly to the constructor.

You'll need to change the constructor of both the Hero and Warrior for this one!
 */

//Hero.js
class Hero {
    constructor(_health) {
        this.health = _health;
    }
    takeDamage(_dam) {
        this.health = this.health - _dam;
    }
}

module.exports = Hero;

//Warrior.js
const Hero = require('./Hero');

class Warrior extends Hero {
    constructor (_health) {
        super();
        this.rage = 0;
        this.health = _health;
    }

    takeDamage(_dam) {
        super.takeDamage(_dam);
        this.rage++;
    } 
}

module.exports = Warrior;
