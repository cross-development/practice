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
