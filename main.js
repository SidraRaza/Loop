"use strict";
// 1.Basic For Loop
for (let i = 0; i < 5; i++) {
    console.log(`Iteration ${i}`);
}
// This loop iterates from 0 to 4 and prints each iteration number.
// 2.For...of Loop
const array = [10, 20, 30, 40];
for (const value of array) {
    console.log(value);
}
// This loop iterates over the values of an array and prints each value.
// 3.For...in Loop
const object = { a: 1, b: 2, c: 3 };
for (const key in object) {
    if (object.hasOwnProperty(key)) {
        console.log(`Key: ${key}, Value: ${object[key]}`);
    }
}
// This loop iterates over the keys of an object and prints each key-value pair.
// 4.While Loop
let i = 0;
while (i < 5) {
    console.log(`While loop iteration ${i}`);
    i++;
}
// This loop runs as long as the condition i < 5 is true.
// 5.Do...While Loop
let j = 0;
do {
    console.log(`Do...while iteration ${j}`);
    j++;
} while (j < 5);
// This loop runs at least once and continues as long as the condition j < 5 is true.
// 6.Loop with Break
for (let i = 0; i < 10; i++) {
    if (i === 5)
        break;
    console.log(`Break loop iteration ${i}`);
}
// This loop breaks out when i equals 5.
// 7.Loop with Continue
for (let i = 0; i < 10; i++) {
    if (i % 2 === 0)
        continue;
    console.log(`Continue loop iteration ${i}`);
}
// This loop skips the even numbers and prints only the odd numbers.
// 8.Nested Loops
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        console.log(`i = ${i}, j = ${j}`);
    }
}
// This example demonstrates nested loops.
// 9.Loop Over a String
const str = "TypeScript";
for (const char of str) {
    console.log(char);
}
// This loop iterates over each character in a string.
// 10.Loop Over a Map
const map = new Map([
    ['a', 1],
    ['b', 2],
    ['c', 3]
]);
for (const [key, value] of map) {
    console.log(`Key: ${key}, Value: ${value}`);
}
// This loop iterates over the entries of a Map object and prints each key-value pair.
