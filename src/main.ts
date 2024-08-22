const obj = { name: "kim" } as const;
const arr = [1, 2, 'string'];

const arr1: string[] = ['1', '2', '3'];
const arr2: Array<number> = [1, 2, 3];

const tuple: readonly [number, boolean, string] = [1, true, 'hello'];

const strNumBools: [string, number, ... boolean[]] = ['hello', 1, false, true, false];
const arr3 = ['hello', true];
const arr4 = [1, ... arr3];

const [a, ... rest] = ['hello', 1, 2, 3];
const [b, ... rest2]: [string, ... number[]] = ['hello', 1, 2, 3];


function add(x: number, y: number) { return x + y }
const add2: typeof add = (x: number, y: number) => x + y;

function unionType(value: string | number): number {
    if (typeof value === 'string') {
        return parseInt(value);
    }

    return value;
}

unionType('1');
unionType(1);

const x: any = '123';
const any1 = x + 1;
const any2 = x - 1;
const any3 = x + '1';

fetch('url').then< { data: string } >((response) => {
    return response.json();
}).then((result) => {

});

const result: { hello: string } = JSON.parse('{"hello": "json"}');

try {

} catch(e) {
    const error = e as Error;

    console.log(error.message);
}

const func: () => void = () => 3;
const value = func();

// --- 문제

let person: string = 'Kim';

function add3(a: number, b: number): number {
    return a + b;
}

function isEven(num: number): boolean {
    return num % 2 === 0
}

function func1() {
    throw new Error('에러');
}

// const result1: never = func1();

const func2 = () => {
    throw new Error('에러');
}

const result2 = func2();

function infinite() {
    while(true) {
        console.log('반복');
    }
}

function strNum(param: string | number) {
    if (typeof param === 'string') {

    } else if (typeof param === 'number') {

    } else {
        param;
    }
}

interface Person {
    name: string,
    age: number,
    married: boolean
}

const person1: Person = {
    name: 'Kim',
    age: 28,
    married: false
}

interface Func {
    (x: number, y: number): number;
}

const add4: Func = (x, y) => x + y;

interface Arr {
    length: number;
    [key: number]: string;
}

const arr5: Arr = ['1', '2', '3'];

interface NoProp {}

const obj2: NoProp = {
    txt: '에러 안 남'
}

const resultX: NoProp = '안녕';
// const resultY: NoProp = null;

interface Animal {
    name: string;
}

interface Bear extends Animal {
    honey: boolean;
}

const bear1: Bear = {
    name: 'honey bear',
    honey: true
}

type Bear2 = Animal& {
    honey: boolean
}

const bear2: Bear = {
    name: 'honey bear',
    honey: true
}

// --- 문제

type Name = string;

let firstName: Name = '';
let lastName: Name = '';

// --- 문제 2

type MathO = (x: number, y: number) => number;

const adding: MathO = (x, y) => x + y;
const multiplying: MathO = (x, y) => x * y;

// --- 문제 3

interface Shape {
    color: string;
}

interface Circle extends Shape {
    radius: number;
}

const myCircle: Circle = {
    color: 'red',
    radius: 5
}

// --- 문제 4

interface Animals {
    name: string,
    age: number
}

interface Dog extends Animals {
    breed: string
}

const myDog: Dog = {
    name: 'Peanut',
    age: 3,
    breed: 'Korean Shorthair'
}

namespace Exam {
    export interface Inner {
        test: string;
}

    export type test2 = number;
}

const ex1: Exam.Inner = {
    test: 'hello'
}

const ex2: Exam.test2 = 123;

const obj4 = {
    hello: 'world',
    name: 'Kim',
    age: 28
}

type Keys = keyof typeof obj4;
type Values = typeof obj4[Keys];

// 집합

type A = string | boolean;
type B = boolean | number;
type C = A & B;
type D = {} & (string | null);
type F = unknown | {};
type G = never & {};
type H = {a: 'b'} & number;
type I = null & {a: 'b'};
type J = {} & string;

// const what: J = 213;

// --- 문제 5

interface Product {
    name: string,
    price: number,
    description?: string
}

const product1: Product = {
    name: '오가닉 김',
    price: 2000,
    description: '실제 맛있음'
}

const product2: Product = {
    name: '바이오 스시',
    price: 5000,
}

// --- 문제 6

interface Dictionary {
    [key: string]: string;
}

const dictionary: Dictionary = {
    name: 'Book'
}

// --- 문제 7

function firstEl <T> (arr: T[]): T {
    return arr[0];
}

console.log(firstEl([1, 2, 3]));

// --- 문제 8

function leng <T extends { length: number }> (item: T) {
    console.log(item.length);
}

leng('hello');

// --- 문제 9 생략 문제 10

function numBig <T> (a: T, b: T): T {
    return a > b ? a : b;
}

console.log(numBig(1, 5));