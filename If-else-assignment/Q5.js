/* 
Write a program that finds minimum and maximum of three numbers using multiple-if or nested-if statement?
*/

const a = prompt('Enter First number'); 
const b = prompt('Enter Second number');
const c = prompt('Enter Third number');

if(a > b && a > c){
    console.log(`The max Number of ${a}, ${b}, ${c}, is ${a}`);
} else if (b > a && b > c){
    console.log(`The max Number of ${a}, ${b}, ${c}, is ${b}`);
} else {
    console.log(`The max Number of ${a}, ${b}, ${c}, is ${c}`);
} 
if(a < b && a < c){
    console.log(`The min Number of ${a}, ${b}, ${c}, is ${a}`);
} else if (b < a && b < c){
    console.log(`The min Number of ${a}, ${b}, ${c}, is ${b}`);
} else{
    console.log(`The min Number of ${a}, ${b}, ${c}, is ${c}`);
}
