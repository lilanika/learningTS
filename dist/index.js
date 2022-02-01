"use strict";
/* to run the logs in the Terminal:
cd dist
node index

TS
//to compile: tsc index || tsc
//watchmode: tsc --watch index
//init tsconfig: tsc --init

*/
//Basic primitiv Types
let id;
id = 5;
let company = 'LeoCompany';
let isPublished = true;
//any type
let x = 'Ola';
//this has o be an array that only contains numbers
let ids = [1, 2, 3, 4, 5];
let arr = [1, true, 'hi'];
//Tuple: specify the type
let person = [1, 'brad', true];
let flowers;
flowers = [
    [1, 'flower'],
    [2, 'flower'],
    [3, 'flower']
];
//Union: can be a number or string
let dog = 22;
//Enum -> define a set of named constants
// these are going to be numeric values by default //0,1,2, 
var Directon1;
(function (Directon1) {
    Directon1[Directon1["Up"] = 1] = "Up";
    Directon1[Directon1["Down"] = 2] = "Down";
    Directon1[Directon1["Left"] = 3] = "Left";
    Directon1[Directon1["Right"] = 4] = "Right";
})(Directon1 || (Directon1 = {}));
var Directon2;
(function (Directon2) {
    Directon2["Up"] = "Up";
    Directon2["Down"] = "Down";
    Directon2["Left"] = "Left";
    Directon2["Right"] = "Right";
})(Directon2 || (Directon2 = {}));
console.log(Directon1.Left);
console.log(Directon2.Left);
const user = {
    id: 1,
    name: 'John'
};
//Type Assertion two ways
//telling the compiler that I want treat an entity as a different type 
let cid = 1;
let customerId = cid;
//let customerID = cid as number
// customerId = true  = failure
// Functions 
function addNum(x, y) {
    return x + y;
}
