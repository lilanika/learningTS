/* to run the logs in the Terminal: 
cd dist
node index

TS
//to compile: tsc index || tsc
//watchmode: tsc --watch index
//init tsconfig: tsc --init

*/

//Basic primitiv Types
let id: number
id = 5

let company: string = 'LeoCompany'
let isPublished: boolean = true
//any type
let x: any = 'Ola'

//this has o be an array that only contains numbers
let ids:number[] = [1,2,3,4,5]
let arr: any[] = [1,true , 'hi']

//Tuple: specify the type
let person: [number,string, boolean] = [1, 'brad', true]

let flowers: [number, string][]

flowers = [
[1, 'flower'],
[2, 'flower'],
[3, 'flower']
]

//Union: can be a number or string
let dog: string | number = 22

//Enum -> define a set of named constants
// these are going to be numeric values by default //0,1,2, 
enum Directon1 {
  Up = 1,
  Down, 
  Left, 
  Right
}

enum Directon2 {
  Up = 'Up',
  Down = 'Down',
  Left = 'Left',
  Right = 'Right'
}

console.log(Directon1.Left)
console.log(Directon2.Left)

//Objects 

/* 
const user: {
  id:number, 
  name:string
} = {
  id:1, 
  name:'John'
}

*/ 

type User = {
  id: number, 
  name:string
}

const user: User = {
  id: 1, 
  name:'John'
}

//Type Assertion two ways
//telling the compiler that I want treat an entity as a different type 

let cid: any = 1
let customerId = <number> cid
//let customerID = cid as number
// customerId = true  = failure


// Functions 
function addNum(x,y) {
  return x + y
}


