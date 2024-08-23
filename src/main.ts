// --- 08. 22

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

// --- 08.23

function add5(a: string, b: string): string;
function add5(a: number, b: number): number;
function add5(a: any, b: any): any {
    return a + b;
}

add5('hello', 'world');
add5(4, 5);

function example(param: string | null): number;
function example(param: string): string;
function example(param: string | null): string | number {
    if (param) {
        return 'string'
    } else {
        return 123;
    }
}

const result5 = example('what');

interface Added {
    (x: number, y: number): number;
    (x: string, y: string): string;
}

const added: Added = (x: any, y: any) => x + y;

added(1, 2);
added('1', '2');
// added(1, '2');

type El <T> = T extends (infer E)[] ? E : never;
type Str = El <string[]>;
type NumBool = El <(number | boolean)[]>;

type ElementType <T> = T extends (infer U)[] ? U : never;
type NumberArray = number[];
type Ele = ElementType <NumberArray>;

// --- 문제 13

function removeD <T> (arr: T[]): T[] {
    return Array.from(new Set(arr));
}

// --- 문제 14

function returnLen(param: any[]): number;
function returnLen(param: string): number;
function returnLen(param: any): number {
    return param.length;
}

returnLen('123123');

// --- 클래스

interface Human {
    name: string;
    age: number;
    married: boolean;
}

class Person implements Human {
    name;
    age;
    married;

    constructor(name: string, age: number, married: boolean) {
        this.name = name;
        this.age = age;
        this.married = married
    }
}

// ---

class Parent {
    name?: string;
    readonly age: number;
    protected married: boolean;
    private value: number;

    constructor(name: string, age: number, married: boolean) {
        this.name = name;
        this.age = age;
        this.married = married;
        this.value = 0;
    }

    changeAge(age: number) {
        this.age = age; // 읽기 전용 속성이므로 할당할 수 없음
    }
}

class Child extends Parent {
    constructor(name: string, age: number, married: boolean) {
        super(name, age, married);
    }

    sayName() {
        console.log(this.name);
    }

    sayMarried() {
        console.log(this.married);
    }

    sayValue() {
        console.log(this.value); // private 속성이므로 Parent 클래스 내에서만 액세스할 수 있음
    }
}

const child = new Child('Kim', 28, false);

child.name;
child.married; // married 속성은 보호된 속성이며 Parent 및 해당 하위 클래스 내에서만 액세스할 수 있음
child.value; // private 속성이므로 Parent 클래스 내에서만 액세스할 수 있음

// ---

class Man {
    play() {
        console.log('play');
    }

    study() {
        console.log('study');
    }
}

class Employee extends Man {
    work() {
        console.log('work');
    }

    override study() {
        console.log('study');
    }
}

// ---

class Signature {
    [propName: string]: string | number | undefined;
    static [propName: string]: boolean;
}

const sig = new Signature();
sig.hello = 'world';
Signature.isGood = true;

// ---

class Person2 {
    age: number;
    married: boolean;

    constructor(age: number, married: boolean) {
        this.age = age;
        this.married = married
    }

    sayAge() {
        console.log(this.age);
    }

    sayMarried(this: Person) {
        console.log(this.married);
    }

    sayCallback(callback: (this: this) => void) {
        callback.call(this);
    }
}

// --- 추상 클래스

abstract class AbstractPerson {
    name: string;
    age: number;
    married: boolean = false;
    abstract value: number;

    constructor(name: string, age: number, married: boolean) {
        this.name = name;
        this.age = age;
        this.married = married;
    }

    sayName() {
        console.log(this.name);
    }

    abstract sayAge(): void;
    abstract sayMarried(): void;
}

class RealPerson extends AbstractPerson {
    value: number = 0;

    sayAge() {
        console.log(this.age);
    }

    sayMarried() {
        console.log(this.married);
    }
}