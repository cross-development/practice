// ============================================================================================
// Interfaces - simple examples
// ============================================================================================

// One way
function printLabel(labeledObj: { label: string }): void {
	console.log(labeledObj.label);
}

let myAwesomeObj = { age: 10, label: 'Size 10 Object' };

printLabel(myAwesomeObj);

// The other version
interface ILabelValue {
	label: string;
}

function printMyAwesomeLabel(labeledObj: ILabelValue): void {
	console.log(labeledObj.label);
}

const myOtherObj = { age: 31, label: "I'm 31 years old" };

printLabel(myOtherObj);

// ============================================================================================
// Interfaces - Optional Properties
// ============================================================================================

interface ISquareConfig {
	color?: string;
	width?: number;
}

type SquareType = {
	color: string;
	area: number;
};

function createSquare(config: ISquareConfig): SquareType {
	const newSquare = { color: 'white', area: 10 };

	if (config.color) {
		newSquare.color = config.color;
	}

	if (config.width) {
		newSquare.area = config.width * config.width;
	}

	return newSquare;
}

const mySquare = createSquare({ color: 'black' });

// ============================================================================================
// Interfaces - Readonly properties
// ============================================================================================

interface IPoint {
	readonly x: number;
	readonly y: number;
}

const p1: IPoint = { x: 10, y: 20 };
// p1.x = 20; // Cannot assign to 'x' because it is a read-only property.

const a: number[] = [1, 2, 3, 4, 5];
const ro: ReadonlyArray<number> = a;

// ro[0] = 10; //Index signature in type 'readonly number[]' only permits reading.
// push, pop, shift, unshift doesn't work
// change in length doesn't work

let b: number[] = [1, 2, 3, 4, 5];
const roO: ReadonlyArray<number> = b;

b = roO as number[];

// ============================================================================================
// Excess Property Checks
// ============================================================================================
