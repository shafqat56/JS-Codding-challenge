// JS Assignment#01
// Task#01

const string =" Hello world!";
console.log(string);


// Task#02


console.log("I'm Shafqat Abbas") 
console.log("I am Learning JavaScript via Full Stack Bootcamp of DiaaTech.")
console.log("I will become best developer by hard work.")
console.log("I am doing commitment to do code with consistency.")



// Task#03(1)  variables


const myName = 'Shafqat Abbas';
let myAge = 20;
console.log("My name is  " + myName + " and I am " + myAge + " years of age.")

// Task#03(2)

const firstName = 'Shafqat';
const secondName = 'Abbas';
console.log(`I'm ${firstName} ${secondName}
I am Learning JavaScript via Full Stack Bootcamp of DiaaTech.
I will become best developer by hard work.
I am doing commitment to do code with consistency.`)


// Task#03(3)


let number1 = 10;
let number2 = 7;
let sum = number1 + number2;
let minus = number1 - number2;
let multiply = number1 * number2;
let divide = number1 / number2;
console.log(`sum is : ${sum}
minus is: ${minus}
multiply is: ${multiply}
divide is: ${divide}`)



// Task#04 BMI


let markMass = 350;
let markHieght = 14;
let johnMass = 290;
let johnHieght = 17;
let markBMI = markMass / (markHieght * markHieght);
let johnBMI = johnMass / (johnHieght * johnHieght);
console.log(markBMI, johnBMI);
let isMarkHighBMI = markBMI > johnBMI;
console.log(isMarkHighBMI);

// Assignment#02

console.log(`Mark's BMI is : (${markBMI})`);
console.log(`John's BMI is : (${johnBMI})`);

if (isMarkHighBMI) {
    console.log(`Marks's BMI is higher then John's`)
}
else {
    console.log(`John's's BMI is higher then Marks's`)
}



// Question#02(Part-1)


let userAge = prompt("Please enter your age to see your vote status : ");
if (userAge >= 18)
{
    console.log("User is old enough to cast a vote.")
}
else {
    console.log("User is not old enough to cast a vote.")
}
    

// Question#02(Part-2)


let studentGrade = prompt("Please Enter Your Grade : ")
if (studentGrade == "A" || studentGrade == "a")
{
    console.log("Excellent!");
}
    else if (studentGrade == "B" || studentGrade == "b")
{
    console.log("Great!");
}
else if (studentGrade == "C" || studentGrade == "c")
{
    console.log("Good!");
}
else if (studentGrade == "D" || studentGrade == "d")
{
    console.log("Not Bad");
}
 else if (studentGrade == "F" || studentGrade == "f")
{
    console.log("Poor Fail!!");
}
else {
    console.log("Invalid Input!")
}




// Question#02(Part-3)


let age = prompt("Enter Your Age : ");
if (age > 0 && age <= 2) {
    console.log("Baby");
}
else if (age >= 3 && age <= 5) {
    console.log("toddler");
}
else if (age >= 6 && age <= 12) {
    console.log("child");
}
else if (age >= 13 && age <= 18) {
    console.log("Teenager");
}
else if (age >=19) {
    console.log("Adult");
}
else {
    console.log("Invalid Input!")
}



// Question#02(Part-4)


let number = prompt("Please Enter a Number : ")
if (number ==0)
{
     console.log("The given number is Zero!!")
    
     }
else if (number < 0)
{
    console.log("The given number is Negative")
}
else {
   console.log("The given number is Positive")
     }











