"use strict";

/*
Oh no, our Math object was "accidently" reset. Can you re-implement some of those functions? We can assure, that only non-negative numbers are passed as arguments. 
So you don't have to consider things like undefined, null, NaN, negative numbers, strings and so on.

Here is a list of functions, we need:

Math.round()
Math.ceil()
Math.floor()
*/

Math.round = (number) => {
  const [normal, decimal] = number.toString().split(".");
  return decimal === undefined || parseInt(decimal[0]) <= 4
    ? parseInt(normal)
    : parseInt(normal) + 1;
};

Math.ceil = (number) => {
  const [normal, decimal] = number.toString().split(".");
  return decimal === undefined ? parseInt(normal) : parseInt(normal) + 1;
};

Math.floor = (number) => {
  return parseInt(number.toString().split(".")[0]);
};

console.log(Math.round(0)); // return 0
console.log(Math.round(0.5)); // return 1

console.log(Math.ceil(0.4)); // return 1
console.log(Math.ceil(0.5)); // return 1

console.log(Math.floor(0.4)); // return 0
console.log(Math.floor(0.5)); // return 0
