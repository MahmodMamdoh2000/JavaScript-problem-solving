/*
    1. Use let to create a variable that points at a String
       - Then "add" another String to this same variable and print it out
    2. Use let to create a variable that points to a Number
       - Then add another Number to this same variable and print it out

*/
//        problem(1)
let say = "Hello";
let myNme = "-Mhmod";
console.log(say + myNme);

let Name = "mahmod";
Name += "Hello" + Name;
console.log(Name);

let myNameIs = " mahmod";
myNameIs = "Hello" + myNameIs;
console.log(myNameIs);

// (2)
let x = 5;
x += 10;
console.log(x);

/*
    1. Print out 5 / 2
    2. Print out 5 % 2
    3. Print out 5 ** 2

    4. Print out 6 / 2
    5. Print out 6 % 2
    6. Print out 6 ** 2
*/
//        problem(2)
// (1)
let i = 5;
let z = 2;
console.log(i / z);
console.log(i % z);
console.log(i ** z);
// (2)
let w = 6;
let m = 2;
console.log(w / m);
console.log(w % m);
console.log(w ** m);

/*
    1. Create a let variable called "points" and print it out
    2. Assign "points" the number 20 and print it out
    3. Add 15 to "points" and print it out

    Question1: What are all the ways you can achieve step 3 above?
    Using the addition assignment operator +=
    let points = 20;
    points += 15;
    console.log(points);

    Using the addition operator +
    let points = 20;
    points = points + 15;
    console.log(points);

    Using the increment operator ++
    let points = 20;
    points++;
    points++;
    points++;
    console.log(points);


    Question2: What would happen if you tried to do this with a const variable?
    encounter an error. The const keyword is used to declare variables that cannot 
    be reassigned once they are initialized. Therefore, you cannot modify the value of 
    a const variable after it has been assigned. If you try to reassign a value to a
    const variable, you will receive a syntax error. For example:
    const x = 10;
    x = 20; // TypeError: Assignment to constant 

const x = 10;
x = 20; // TypeError: Assignment to constant variable.
*/
//        problem(3)
let points;
console.log(points);
points = 20;
console.log(points);
points = points += 15;
console.log(points);

/*
//        problem(4)

    1. What is 5 / 5?
    2. What is 5 % 5?
    3. What is 256 / 2?
    4. What is 256 % 10?

    What are all the possible values of ANY_NUMBER % 2?
    When a number is divided by 2, the remainder can only be either 0 or 1. If the 
    number is even,the remainder will be 0, and if the number is odd, the remainder will be 1.
    What are all the possible values of ANY_NUMBER % 10?
    When a number is divided by 10, the remainder can be any value from 0 to 9. 
    For example, if ANYNUMBER is 15, then 15 % 10 would result in a remainder of 5.
    Similarly, if ANYNUMBER is 28, then 28 % 10 would result in a remainder of 8.
    The remainder will always be less than the 
    divisor (10 in this case) and can take any value from 0 to 9


*/
console.log(5 / 5); //1
console.log(28 % 10); //0
console.log(256 / 2); //128
console.log(256 % 10); //6

/*
    1. What happens when you add 2 strings together?
    When you add two strings together using the "+" operator, it performs string concatenation. The two strings are combined into a single string.
    For example:
    let string1 = "Hello";
    let string2 = "World";
    let result = string1 + string2;
    console.log(result); // Output: "HelloWorld"

    2. What about when you add a number to a string?
     When you add a number to a string using the "+" operator, JavaScript converts the number to a string and then performs string concatenation.

    For example:
    let number = 10;
    let string = "The number is: " + number;
    console.log(string); // Output: "The number is: 10"

    3. How about when you add booleans together?
    When you add booleans together using the "+" operator, JavaScript converts the booleans to their corresponding string representations and then performs string concatenation.

    In JavaScript, you can’t add booleans directly, so JavaScript will cast the booleans to numbers before adding them. For example:

true + true // 2
false + false // 0
true + false // 1
This is because true is equivalent to 1 and false is equivalent to 0 in JavaScript.
*/

// string concatenation
let animal = "Dog";
let says = "says Woof!";
console.log(animal + says);

let Age = 15;
let Names = "Ali";
console.log(Names + "Age IS" + Age);

let boolean1 = true;
let boolean2 = false;
let result = boolean1 + boolean2;
console.log(result);
