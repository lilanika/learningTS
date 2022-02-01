//to compile: tsc index || tsc
//watchmode: tsc --watch index
//init tsconfig: tsc --init

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


console.log('id',id)

