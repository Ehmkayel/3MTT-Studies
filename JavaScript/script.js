let x = 25
x = 10
var y = 22
const z = x - y
let fruit = 'apple'
console.log(x)
console.log(y)
console.log(z)
console.log(fruit)
console.log(typeof fruit)

let a = 6
let b = 8
let check = a > b
console.log(check)
console.log(typeof check)

let check1
console.log(check1)

let text = 70


if(text === Number){
    alert("It's a number")
}else{
    alert("it's a string")
}

const num = typeof text
const age = typeof y

console.log(num)
console.log(age)

const weather = 'Sunny'
switch (weather) {
    case 'rainy' :
    console.log("it is rainy")
    break;
    case 'cloudy':
        console.log("it's cloudy")
    break;
    default:
    console.log(' No need for rain coat.')
}

const profile = 'Jonas Smith'
let userAge = 32
var occupation = 'Developer'

const fullBio = profile + age + occupation
const stats = "Jonas" + "" + "is" + "" + "Teacher"
console.log(fullBio)
console.log(stats)

const betterOption = `Jonas is a ${occupation}`  
console.log(betterOption)

const socialNUmbers = 8 + 8 / 2
console.log(socialNUmbers)

const sarah = 17
const adult = 18

const result = sarah >= adult ? "Sarah is an Adult " : "Sarah is not an adult"
console.log(result)

function mtt (a, b){
    let math = a + b
    console.log(math)
    console.log("text") 
}
mtt(5, 8)
mtt("Ramadan", "Lamidi") 

const expression = function ( x, y ){
    return console.log(x * y)
}
expression(10, 60) 

const ramadan = (x, y) => {
    return console.log(x * y)

}
ramadan(20, 4) 
