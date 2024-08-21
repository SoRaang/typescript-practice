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