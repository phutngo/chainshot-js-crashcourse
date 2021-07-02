//!BEST DETAILED EXPLANATIONS: https://chamikakasun.medium.com/javascript-prototype-and-prototype-chain-explained-fdc2ec17dd04

let person = {};
person.name = 'Leo';
person.age = 20;
person.eat = function () {
  console.log(`${this.name} is eating.`)
}
person.sleep = function () {
  console.log(`${this.name} is sleeping.`)
}

console.log(person);
person.sleep();
person.eat();

///////////////////////////

const apple ={};
alert('' + apple);
