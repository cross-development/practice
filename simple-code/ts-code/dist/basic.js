"use strict";
// ============================================================================================
// Boolean
// ============================================================================================
var isDone = true;
var hasChild = false;
var isUpdated = true;
var hasNodes = false;
// ============================================================================================
// Numbers
// ============================================================================================
var decimal = 5;
var hexNumber = 0xf00d;
var binary = 10;
var octal = 484;
// ============================================================================================
// String
// ============================================================================================
var firstName = 'Vitaliy';
var lastName = 'Derda';
var fullName = firstName + ' ' + lastName;
var age = 31;
var sentence = "Hello, my name is " + fullName + ". I'll be " + (age + 1) + " in June";
// ============================================================================================
// Array
// ============================================================================================
var arrList = [1, 2, 3, 4, 5];
var array = [1, 2, 3, 4, 5];
// ============================================================================================
// Tuple
// ============================================================================================
var x = ['qwe', 123];
var y;
y = [1, 2, 'q'];
// ============================================================================================
// Enum
// ============================================================================================
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var colorBlack = Color.Green;
console.log(colorBlack); //2
var RealColor;
(function (RealColor) {
    RealColor["Red"] = "00ffff";
    RealColor["Green"] = "00ff00";
    RealColor["Blue"] = "0000ff";
})(RealColor || (RealColor = {}));
var myFavColor = RealColor.Blue;
console.log(myFavColor); // "0000ff"
var CustomColor;
(function (CustomColor) {
    CustomColor[CustomColor["Red"] = 1] = "Red";
    CustomColor[CustomColor["Green"] = 10] = "Green";
    CustomColor[CustomColor["Blue"] = 100] = "Blue";
})(CustomColor || (CustomColor = {}));
var myCustomColor = CustomColor.Red;
console.log(myCustomColor); //1
var MyColor;
(function (MyColor) {
    MyColor[MyColor["Black"] = 2] = "Black";
    MyColor[MyColor["White"] = 3] = "White";
    MyColor[MyColor["Red"] = 4] = "Red";
})(MyColor || (MyColor = {}));
var colorName = MyColor[2];
console.log(colorName); // "Black"
// ============================================================================================
// Unknown
// ============================================================================================
//these expressions will work without an error
var notSure = 4;
notSure = 'qwe';
notSure = false;
// const mNumber: number = maybe; // Type 'unknown' is not assignable to type 'number'
if (maybe === true) {
    var aBoolean = maybe;
    // const aString: string = maybe; //Type 'boolean' is not assignable to type 'string'.
}
if (typeof maybe === 'string') {
    // const aBoolean: boolean = maybe; //Type 'string' is not assignable to type 'boolean'.
    var aString = maybe;
}
var str = getValue('QWe-qwe');
var looselyTyped = 4;
looselyTyped.ifItExists(); // OK, ifItExists might exist at runtime
looselyTyped.toFixed(); // OK, toFixed exists (but the compiler doesn't check)
// Unknown type works with error
// let strictlyTyped: unknown = 4;
// strictlyTyped.toFixed(); //Object is of type 'unknown'.
var looselyAnyTyped = {};
var d = looselyAnyTyped.a.b.c.d;
//  ^ = let d: any
// ============================================================================================
// Void
// ============================================================================================
function myLittleFunc() {
    console.log('This is my little function');
}
function myBiggerFunc(str) {
    console.log("Hi, this is " + str);
}
function myComicFunc(args) {
    console.log("Oops, my args " + args + " can by string or number");
}
var unusable = undefined;
unusable = null; // OK if `--strictNullChecks` is not given
// ============================================================================================
// Null and Undefined
// ============================================================================================
var u = undefined; // Not much else we can assign to this variable!
var n = null; // Not much else we can assign to this variable!
var numberWithUndefined = undefined; // OK, because undefined is subtype of all other types
var numberWithNull = null; // Ok, because null is subtype of all other types
// ============================================================================================
// Never
// ============================================================================================
function error(message) {
    throw new Error(message);
}
function fail() {
    return error('Something went wrong');
}
function infiniteLoop() {
    while (true) { }
}
// It's OK
create({ prop: 0 });
create(null);
//But it's wrong
// create("str"); // Argument of type '"str"' is not assignable to parameter of type 'object | null'.
// ============================================================================================
// Type assertions
// ============================================================================================
// One of two forms - as-syntax - works with JSX
var someValue = 'This is a string';
var strLength = someValue.length;
// The other version - angle-bracket
var someValue2 = 'This is a string';
var strLength2 = someValue.length;
