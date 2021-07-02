const x = 3;
x(); //=> Throws TypeError: x is not a function.

let b;
b.prop; //=> Throws TypeError: Cannot read property 'prop' of undefined

z(); // => Throws ReferenceError: z is not defined. Thrown in cases where the variable is not defined. More technically, the reference cannot be found.

const a = 3;
a.72; // => Throws SyntaxError: Unexpected number. Thrown in cases where the code is not valid JavaScript. If you use a transpiler like Babel JS this code may not pass the compilation step due to invalid syntax.

new Array(Infinity); //  => Throws RangeError: Invalid array length. Thrown when a value is passed to a function where the value is not within the intended range of accepted values. For example, an array initializer: