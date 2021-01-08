"use strict";

// Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

// array = [[1,2,3],
//          [4,5,6],
//          [7,8,9]]
// snail(array) #=> [1,2,3,6,9,8,7,4,5]
// For better understanding, please follow the numbers of the next array consecutively:

// array = [[1,2,3],
//          [8,9,4],
//          [7,6,5]]
// snail(array) #=> [1,2,3,4,5,6,7,8,9]

// NOTE: The idea is not sort the elements from the lowest value to the highest; the idea is to traverse the 2-d array in a clockwise snailshell pattern.

// NOTE 2: The 0x0 (empty matrix) is represented as en empty array inside an array [[]].

function snail(arr) {
  if (arr[0].length === 0) return [];
  let way = [];
  while (arr.length > 0) {
    if (arr.length >= 1) way.push(...arr.shift());
    for (let i = 0; i < arr.length - 1; i++) {
      way.push(arr[i].pop());
    }
    if (arr.length >= 1) way.push(...arr.pop().reverse());
    for (let k = arr.length - 1; k > 0; k--) {
      way.push(arr[k].shift());
    }
    console.log(arr);
  }
  return way;
}

console.log(snail([[1]]));
