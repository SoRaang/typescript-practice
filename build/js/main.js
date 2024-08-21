"use strict";
const obj = { name: "kim" };
const arr = [1, 2, 'string'];
const arr1 = ['1', '2', '3'];
const arr2 = [1, 2, 3];
const tuple = [1, true, 'hello'];
const strNumBools = ['hello', 1, false, true, false];
const arr3 = ['hello', true];
const arr4 = [1, ...arr3];
const [a, ...rest] = ['hello', 1, 2, 3];
const [b, ...rest2] = ['hello', 1, 2, 3];
function add(x, y) { return x + y; }
const add2 = (x, y) => x + y;
function unionType(value) {
    if (typeof value === 'string') {
        return parseInt(value);
    }
    return value;
}
unionType('1');
unionType(1);
const x = '123';
const any1 = x + 1;
const any2 = x - 1;
const any3 = x + '1';
fetch('url').then((response) => {
    return response.json();
}).then((result) => {
});
const result = JSON.parse('{"hello": "json"}');
try {
}
catch (e) {
    const error = e;
    console.log(error.message);
}
const func = () => 3;
const value = func();
// --- 문제
let person = 'Kim';
function add3(a, b) {
    return a + b;
}
function isEven(num) {
    return num % 2 === 0;
}
