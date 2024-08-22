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
function func1() {
    throw new Error('에러');
}
// const result1: never = func1();
const func2 = () => {
    throw new Error('에러');
};
const result2 = func2();
function infinite() {
    while (true) {
        console.log('반복');
    }
}
function strNum(param) {
    if (typeof param === 'string') {
    }
    else if (typeof param === 'number') {
    }
    else {
        param;
    }
}
const person1 = {
    name: 'Kim',
    age: 28,
    married: false
};
const add4 = (x, y) => x + y;
const arr5 = ['1', '2', '3'];
const obj2 = {
    txt: '에러 안 남'
};
const resultX = '안녕';
const bear1 = {
    name: 'honey bear',
    honey: true
};
const bear2 = {
    name: 'honey bear',
    honey: true
};
let firstName = '';
let lastName = '';
const adding = (x, y) => x + y;
const multiplying = (x, y) => x * y;
const myCircle = {
    color: 'red',
    radius: 5
};
const myDog = {
    name: 'Peanut',
    age: 3,
    breed: 'Korean Shorthair'
};
const ex1 = {
    test: 'hello'
};
const ex2 = 123;
const obj4 = {
    hello: 'world',
    name: 'Kim',
    age: 28
};
const product1 = {
    name: '오가닉 김',
    price: 2000,
    description: '실제 맛있음'
};
const product2 = {
    name: '바이오 스시',
    price: 5000,
};
const dictionary = {
    name: 'Book'
};
// --- 문제 7
function firstEl(arr) {
    return arr[0];
}
console.log(firstEl([1, 2, 3]));
// --- 문제 8
function leng(item) {
    console.log(item.length);
}
leng('hello');
// --- 문제 9 생략 문제 10
function numBig(a, b) {
    return a > b ? a : b;
}
console.log(numBig(1, 5));
