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
