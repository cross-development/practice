"use strict";
// ============================================================================================
// Interfaces - simple examples
// ============================================================================================
// One way
function printLabel(labeledObj) {
    console.log(labeledObj.label);
}
var myAwesomeObj = { age: 10, label: 'Size 10 Object' };
printLabel(myAwesomeObj);
function printMyAwesomeLabel(labeledObj) {
    console.log(labeledObj.label);
}
var myOtherObj = { age: 31, label: "I'm 31 years old" };
printLabel(myOtherObj);
// ============================================================================================
// Interfaces - Optional Properties
// ============================================================================================
