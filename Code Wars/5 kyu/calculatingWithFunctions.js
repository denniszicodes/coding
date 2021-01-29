"use strict";

/*
This time we want to write calculations using functions and get the results. Let's have a look at some examples:

- seven(times(five())); // must return 35
- four(plus(nine())); // must return 13
- eight(minus(three())); // must return 5
- six(dividedBy(two())); // must return 3

Requirements:

- There must be a function for each number from 0 ("zero") to 9 ("nine")
- There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy (divided_by in Ruby and Python)
- Each calculation consist of exactly one operation and two numbers
- The most outer function represents the left operand, the most inner function represents the right operand
- Division should be integer division. For example, this should return 2, not 2.666666...:

eight(dividedBy(three()));
*/

function initializeNumberFunction(number) {
  return (operation) => {
    return operation ? operation(number) : number;
  };
}

const zero = initializeNumberFunction(0);
const one = initializeNumberFunction(1);
const two = initializeNumberFunction(2);
const three = initializeNumberFunction(3);
const four = initializeNumberFunction(4);
const five = initializeNumberFunction(5);
const six = initializeNumberFunction(6);
const seven = initializeNumberFunction(7);
const eight = initializeNumberFunction(8);
const nine = initializeNumberFunction(9);

// ---

function plus(num2) {
  return (num1) => {
    return num1 + num2;
  };
}

function minus(num2) {
  return (num1) => {
    return num1 - num2;
  };
}

function times(num2) {
  return (num1) => {
    return num1 * num2;
  };
}

function dividedBy(num2) {
  return (num1) => {
    return Math.floor(num1 / num2);
  };
}

console.log(seven(times(five()))); // return 35
console.log(four(plus(nine()))); // return 13
console.log(eight(minus(three()))); // return 5
console.log(six(dividedBy(two()))); // return 3
