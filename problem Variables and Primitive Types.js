/* 
// problem (1)

    /* 
   Create a constant variable of each of the following primitive types:
   - String
   - Number
   - Boolean
   - Null
   - Undefined

    1. Create a variable called name that points at a string containing your name
    2. On the next line, re-assign the variable above to your favourite musician's name
    3. On the next line, re-assign the variable again to the value: true
    3. On the next line, re-assign the variable one last time to the value: 42
    After each of the above steps, log out the variable to the terminal with console.log.
*/
var name = "mahmod";
var num = 22;
var happy = true;
var sad = false;
var emmpty = null;
var data;
console.log(name);
console.log(num);
console.log(happy);
console.log(sad);
console.log(emmpty);
console.log(data);
/* 
// problem (2)
    /* 
    1. Create a variable called name that points at a string containing your name
    2. On the next line, re-assign the variable above to your favourite musician's name
    3. On the next line, re-assign the variable again to the value: true
    3. On the next line, re-assign the variable one last time to the value: 42
    After each of the above steps, log out the variable to the terminal with console.log.
*/
var name = "mahmod";
console.log(name);
var name = "Pop song";
console.log(name);
var name = true;
console.log(name);
var name = 50;
console.log(name);

/* 
// problem (3)
    1. Declare a variable using let with any name you like, but without a value.
    2. On a separate line, assign the variable the String: "Moo!"
    3. Log out this variable to the terminal using console.log
    
    Repeat the above steps but try using a const variable. What happens?
*/
let myName;
myName = "mahmod";
console.log(myName);

// const myName ;
// myName = "mahmod";
// console.log(myName);
// Missing initializer in const declaratio at internalCompileFunction

// solve error
const my_Name = "mahmod";
console.log(my_Name);

/* 
// problem (3)
    Use typeof to log out the types for each of the 5 primitive types
    to the terminal using console.log.
*/
var x = 5;
console.log(typeof x);
var my_name = "mahmod";
console.log(typeof my_name);
var happy = true;
console.log(typeof happy);
var empty;
console.log(typeof empty);
var null_data = null;
console.log(typeof null_data);
