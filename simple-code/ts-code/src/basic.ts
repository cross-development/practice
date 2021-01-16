// ============================================================================================
// Boolean
// ============================================================================================
const isDone: boolean = true;
const hasChild: boolean = false;
let isUpdated: boolean = true;
let hasNodes: boolean = false;

// ============================================================================================
// Numbers
// ============================================================================================
const decimal: number = 5;
const hexNumber: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

// ============================================================================================
// String
// ============================================================================================
let firstName: string = 'Vitaliy';
let lastName: string = 'Derda';
const fullName: string = firstName + ' ' + lastName;
const age: number = 31;
const sentence: string = `Hello, my name is ${fullName}. I'll be ${
	age + 1
} in June`;

// ============================================================================================
// Array
// ============================================================================================
const arrList: number[] = [1, 2, 3, 4, 5];
let array: Array<number> = [1, 2, 3, 4, 5];

// ============================================================================================
// Tuple
// ============================================================================================
const x: [string, number] = ['qwe', 123];
let y: [number, number, string];
y = [1, 2, 'q'];

// ============================================================================================
// Enum
// ============================================================================================
enum Color {
	Red, //1
	Green, //2
	Blue, //3
}

const colorBlack: Color = Color.Green;
console.log(colorBlack); //2

enum RealColor {
	Red = '00ffff',
	Green = '00ff00',
	Blue = '0000ff',
}

const myFavColor: RealColor = RealColor.Blue;
console.log(myFavColor); // "0000ff"

enum CustomColor {
	Red = 1,
	Green = 10,
	Blue = 100,
}

const myCustomColor: CustomColor = CustomColor.Red;
console.log(myCustomColor); //1

enum MyColor {
	Black = 2,
	White,
	Red,
}

let colorName: string = MyColor[2];
console.log(colorName); // "Black"

// ============================================================================================
// Unknown
// ============================================================================================
//these expressions will work without an error
let notSure: unknown = 4;
notSure = 'qwe';
notSure = false;

declare const maybe: unknown;
// const mNumber: number = maybe; // Type 'unknown' is not assignable to type 'number'

if (maybe === true) {
	const aBoolean: boolean = maybe;

	// const aString: string = maybe; //Type 'boolean' is not assignable to type 'string'.
}

if (typeof maybe === 'string') {
	// const aBoolean: boolean = maybe; //Type 'string' is not assignable to type 'boolean'.

	const aString: string = maybe;
}

// ============================================================================================
// Any
// ============================================================================================
declare function getValue(key: string): any;

const str: string = getValue('QWe-qwe');

let looselyTyped: any = 4;
looselyTyped.ifItExists(); // OK, ifItExists might exist at runtime
looselyTyped.toFixed(); // OK, toFixed exists (but the compiler doesn't check)

// Unknown type works with error
// let strictlyTyped: unknown = 4;
// strictlyTyped.toFixed(); //Object is of type 'unknown'.

let looselyAnyTyped: any = {};
let d = looselyAnyTyped.a.b.c.d;
//  ^ = let d: any

// ============================================================================================
// Void
// ============================================================================================

function myLittleFunc(): void {
	console.log('This is my little function');
}

function myBiggerFunc(str: string): void {
	console.log(`Hi, this is ${str}`);
}

function myComicFunc(args: string | number): void {
	console.log(`Oops, my args ${args} can by string or number`);
}

let unusable: void = undefined;
unusable = null; // OK if `--strictNullChecks` is not given

// ============================================================================================
// Null and Undefined
// ============================================================================================

const u: undefined = undefined; // Not much else we can assign to this variable!
const n: null = null; // Not much else we can assign to this variable!

const numberWithUndefined: number = undefined; // OK, because undefined is subtype of all other types
const numberWithNull: number = null; // Ok, because null is subtype of all other types

// ============================================================================================
// Never
// ============================================================================================

function error(message: string): never {
	throw new Error(message);
}

function fail(): never {
	return error('Something went wrong');
}

function infiniteLoop(): never {
	while (true) {}
}

// ============================================================================================
// Object
// ============================================================================================

declare function create(o: object | null): void;
// It's OK
create({ prop: 0 });
create(null);
//But it's wrong
// create("str"); // Argument of type '"str"' is not assignable to parameter of type 'object | null'.

// ============================================================================================
// Type assertions
// ============================================================================================

// One of two forms - as-syntax - works with JSX
const someValue: unknown = 'This is a string';
const strLength: number = (someValue as string).length;

// The other version - angle-bracket
let someValue2: unknown = 'This is a string';
let strLength2: number = (<string>someValue).length;
