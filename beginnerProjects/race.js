// simple javascript program to register racers

let raceNumber = Math.floor(Math.random() * 1000);

let regEarly = false
let age = 19

if (regEarly && age >= 18){
  raceNumber += 1000;
}
if (regEarly && age >= 18){
  console.log(`Hello, ${raceNumber} your race will begin at 9:30am`);
} else if (regEarly === false && age >= 18){
  console.log(`Hello ${raceNumber} your race will begin at 11:00am`)
}
if (age < 18){
  console.log(`Hello ${raceNumber}, your race will begin at 12:30 pm`)
} 


