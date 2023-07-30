// var age =50
// switch (true) {
//     case (age>=50) :
//         console.log("old")
//         break;
//         case (age>=30) :
//             console.log("young")
//         break;
//         default:
//         console.log('lol')
//         break;
// }

/*
    1. Create a variable called points that starts at 40
    2. Create an if statement that checks if points are greater than 20
    3. If points are greater than 20, subtract 10 from points
    4. Log out the points at the end of the program (this should always log)
    5. Change points to start at 15 and run the program again
*/
// problem 1
let points = 40;
if (points > 20) {
  points -= 10;
  console.log(points);
}
//Change points to start at 15 and run the program again dont work result=0

let pointts = 15;
if (pointts > 20) {
  //points = points-10
  pointts -= 10;
  console.log(pointts);
}

/*
    1. At the start of the program print out: "--- Animal Checker Program ---"
    2. Create a variable called animal that starts at the value "cat"
    3. Create an if statement that checks if animal is equal to "cat"
    4. If it is equal to "cat", print out "Meow!" to the screen
    5. If it is equal to "dog", print out "Woof!" to the screen
    6. If it is neither "cat" nor "dog", print out "Must be an alien"
    7. At the end of the program print out: "--- Animal check complete ---"
    8. Change animal to different values to make sure it works in all cases
*/
// problem 2
console.log("--- Animal Checker Program ---");
let animal = "cat";

if (animal === "cat") {
  console.log("cat barks Meow! ");
} else if (animal === "dog") {
  console.log("Dog barks Woof!");
} else {
  console.log("Animal must be aliens!");
}
console.log("--- Animal checker Complete ---");

/*
    Create a program that starts with a number variable.
    The program will print out whether the variable is
    even or odd to the screen when run.
    Change the variable to test it works in both cases.
*/
// problem 3

let num = 50;
if (num % 2 === 0) {
  console.log("EVEN!");
} else {
  console.log("ODD!");
}

/* 
  check the age
  Most places consider you an adult.
  Nice, you're a teenager!
  You are in elementary school, kid.
*/
// problem 4
var age = 50;
if (age >= 18) {
  console.log("Most places consider you an adult.");
} else if (age >= 13) {
  console.log("Nice, you,re a teenager!");
} else if (age <= 6) {
  console.log("loo you are ababy");
} else if (age >= 6) {
  console.log("You are in elementary school, kid.");
} else {
  console.log("Invalid input");
}

/*
Write a program to find maximum between two numbers.
         Example
Input :- Enter two numbers : 10  12 
Output :- 12 is maximum.
*/
// problem 4
var num1 = 102;
var num2 = 101;
if (num1 > num2) {
  console.log("maximum number is num1 :" + num1);
} else if (num1 < num2) {
  console.log("maximum number is num2 :" + num2);
} else {
  console.log("this is not number");
}

/*Write a program to find maximum between three numbers. 
         Example
Input :- Enter three  numbers : 10  12  15
Output :- 15 is maximum.
 */
// problem 5
var num1 = 10;
var num2 = 12;
var num3 = 15;
if (num1 > num2 && num1 > num3) {
  console.log("maximum number is num1 :" + num1);
} else if (num2 > num1 && num2 > num3) {
  console.log("maximum number is num2 :" + num2);
} else if (num3 > num1 && num3 > num2) {
  console.log("maximum number is num3 :" + num3);
} else {
  console.log("This should never happen");
}

/*- Write a program to check whether a number is negative ,positive or zero .
         Example
Input :- Enter any number : -5
Output :-negative number .
 */
// problem 6
var number = -5;
if (number === 0) {
  console.log("the number is zero :" + number);
} else if (number > 0) {
  console.log("the number is positive   :" + number);
} else if (number < 0) {
  console.log("the number is negative    :" + number);
}

/*Write a program to check whether a number is divisible by 5 and 11 or not.
         Example
Input :- Enter any  numbers : 55
Output :- Number is divisible by 5 and 11.
*/
var divNum = 55;
if (divNum % 55 === 0 && divNum % 11 === 0) {
  console.log("Number is divisible by 5 and 11");
} else {
  console.log("Not Divisible");
}

/*
Write a program to check whether a year is a leap year or not.
         Example
Input :- Enter 0year: 204
Output :-LEAP  YEAR.


A year is a leap year if the following conditions are satisfied:

The year is a multiple of 400.
The year is a multiple of 4 and not a multiple of 100.
 */
var year = 20400;
if ((year % 4 === 0) & (year % 100 !== 0) || year % 400 === 0) {
  console.log(year + " is a leap year");
} else {
  console.log(year + " is not a leap year");
}
/*
 Write a program to check whether a character is alphabet or not .
         Example
Input :- Enter any character :b
Output :- Character is an Alphabet.

*/
var character = "b";
if (
  (character >= "a" && character <= "z") ||
  (character >= "A" && character >= "Z")
) {
  console.log("Character" + "'" + character + "'" + "is an Alphabet.");
} else {
  console.log("'" + character + "' " + "not found in alphabets.");
}

/*- Write a program to input marks of five subjects
Physics ,Chemistry ,Biology ,Mathematics and Computer ,Find percentage and grade 
Percentage >= 90% :Grad A
Percentage >= 80% :Grad B
Percentage >= 70% :Grad C
Percentage >= 60% :Grad D
Percentage >= 40% :Grad E
Percentage < 40% :Grad F

 */
var Percentage = 50;
if (Percentage >= 90) {
  console.log("Your Grad is A");
} else if (Percentage >= 80) {
  console.log("Your Grad is B");
} else if (Percentage >= 70) {
  console.log("Your Grade is C ");
} else if (Percentage >= 60) {
  console.console.log("Your Grade is D ");
} else if (Percentage >= 40) {
  console.log("Your Grade is E ");
} else {
  console.log("You are Fail ! Your Grade is F ");
}
// ----------------------
if (
  Percentage >= 90 ||
  Percentage >= 80 ||
  Percentage >= 70 ||
  Percentage >= 60 ||
  Percentage >= 40
) {
  console.log("Your Grade is " + Percentage + "And in lpha is");
}
/*29-Write a program to input day of week name using switch case. */
var dayOfWeek = 9;
switch (dayOfWeek) {
  case 1:
    console.log("Sunday");
    break;
  case 2:
    console.log("Monday");
    break;
  case 3:
    console.log("Tuesday");
    break;
  case 4:
    console.log("Wednesday");
    break;
  case 5:
    console.log("Thursday");
    break;
  case 6:
    console.log("Friday");
    break;
  case 7:
    console.log("Saturday");
    break;
  default:
    console.log("Invalid Input!");
}

/*Write a program to print total number of days in month using switch case. */
var month = "february";
switch (month) {
  case "january":
  case "march":
  case "may":
  case "july":
  case "august":
  case "october":
  case "december":
    var numDaysInMonth = 31;
    console.log(month + "" + "the namber day is" + "" + numDaysInMonth);
    break;
  case "april":
  case "june":
  case "september":
  case "november":
    var numDaysInMonth = 30;
    console.log(month + "" + "the namber day is" + "" + numDaysInMonth);
    break;
  case "february":
    var numDaysInMonth = "28 || 29";
    console.log(month + "" + "the namber day is" + "" + numDaysInMonth);
    break;
  default:
    alert("invalid input");
}

// Complete the following steps to create: Are You Old Enough?

var age = 10;
if (age >= 65) {
  console.log("You get your income from your pension");
} else if (age < 65 && age >= 18) {
  console.log("You get your income from your pension");
} else if (age < 18) {
  console.log("You get an allowance");
} else "The value of the age variable is not numerical";
