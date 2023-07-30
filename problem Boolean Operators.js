/*
    Write out the truth tables for the following boolean operators
    using two boolean values, one on each side:
    - AND
    - OR
    - NOT
*/
// &&
console.log(true && true); //true
console.log(false && false); //false
console.log(true && false); //false
console.log(false && true); //false

// ||
console.log(true || true); //true
console.log(false || false); //false
console.log(true || false); //true
console.log(false || true); //true

// !
console.log(!true); //false
console.log(!false); // true

/*
    Try to think of these answers before coding and printing them out:

    1. What is the result of: "1" === 1
    The expression console.log("1" === 1) compares the string "1" with the number 1 using the strict equality operator (===).
    In JavaScript, the strict equality operator (===) compares both the value and the type of the operands. When comparing a string and a number using strict equality, they are considered different types, so the result of the comparison will be false.
    In this case, the string "1" is not equal to the number 1 because they have different types. The string "1" is a sequence of characters, while the number 1 is a numerical value.
    2. What is the result of: (3 > 2) === true
    3. What is the result of: (2 ** 2) !== "4"
    4. What is the result of: (true === true) && (false === false)
*/
// prproblem(2)
console.log("1" === 1); // false
console.log(3 > 2 === true); //true
console.log(2 ** 2 !== "4"); //true
console.log(true === true && false === false); //true

/*
    What would each of these variables evaluate to?

    1. const one = true && "hi";
    2. const two = false && "bye";
    3. const three = true || "meow";
    4. const four = false || "rawr";
*/
// problem(3)
const one = true && "hi";
console.log(one); //"hi"

const two = false && "bye"; //"false"
console.log(two);

const three = true || "meow"; //"true"
console.log(three);

const four = false || "rawr"; //"rawr"
console.log(four);

/*
    What would each of these lines of code do:

    1. true && console.log("moo");
    2. false && console.log("moo moo?")
    3. true || console.log("hello friend");
    4. false || console.log("bye friend");

    This is a very challenging problem set. Once you see the results,
    try to see if you can see WHY it works that way. This will come in
    very handy in the future.
*/
// problem(4)

true && console.log("moo"); //"moo"
false && console.log("moo moo?"); //"false"
true || console.log("hello friend"); //"true"
false || console.log("bye friend"); //"bye friend"

/*
    First, lookup how logical AND, OR and NULLISH assignment work
    using Google. Then try the following examples.

    What would each of the following variables evaluate to:

    1. let username = "";
       username &&= "tiger";

    2. let vip = 0;
       vip ||= 3;

    3. let loggedIn = null;
       loggedIn ??= 0;

    Log each of the values out to see the results.

    This is very very challenging, it might take several tries
    or coming back to it in the future when it's more relevant.
*/
// problem(5)

let username = "";
username &&= "tiger"; // username = username && "tiger"      false , empty
// username = "" && "tiger"
console.log(username);

let vip = 0;
vip ||= 3; // vip = vip || 3        vip = 0 || 3     result = 3
console.log(vip);

let loggedIn = null;
loggedIn ??= 0; // loggedIn = loggedIn ?? 0          null , empty
// loggedIn = null ?? 0
console.log(loggedIn);
// The expression loggedIn = loggedIn ?? seems to be incomplete. The ?? operator is called the nullish coalescing operator, and it is used to provide a default value when the left-hand side operand is null or undefined
