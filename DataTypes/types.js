let name= " Asif saeed";
let age = 22;
let city= "Lahore"
//console.log([name,age,city])


// ------ Data Types -----
// number    1, 22
// String     Asif
//boolean  true,false
// null    Standalone value (subject)
// Undefined     ==> undefined

//console.log(typeof  null)
// ---------------------------------------------------------------------------------------------------
// -----------------------------------------DataType Conversion----------------------

let score= "33abc";
//console.log(typeof score)
//console.log(typeof (score))

let ChangeNumber = Number(score)
//console.log (typeof ChangeNumber)


let booleanNumber = "1";
let booleanform = Boolean(booleanNumber)
console.log(booleanform)

// 1 ==> true and 0==> false
// "" ==> false 
// " asif" ==> true 






// ++++++++++++++++++++++++++++++++++++++++++++ Memory in JS ++++++++++++++++++++++++++++++++++++++++++++++++++++

// Premitive( Stack)  and No Premitive( Heap)

let myName = "Asif Saeed"
let anOther=  myName
 anOther = " Aqib Saeed"

//console.log(myName)
//console.log(anOther)

// +++++HEAP+++++

let user= {
    name:"asif",
    email:" rana@gmail.com",
}
let user1= user
user1.email = "asif@gmail.com"
// console.log(user)
// console.log(user1)

