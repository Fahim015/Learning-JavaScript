/*
Write a program that reads an integer number from the user (within range 1-100).
Then it check that whether the number is greater than, less than or equal to 50?
*/

const number =  prompt('Enter number between 1 to 100');


if(number>50) {
    console.log(`${number} Number is greater then 50`);
} else if(number<50) {
    console.log(`${number} Number is Less then 50`);
} else if (number===('50')) {
console.log(`${number} Number is Equal to 50`);
} 