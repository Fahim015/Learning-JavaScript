/*
Read two positive integer numbers N1 & N2 and then test whether the larger number is exactly divisible by the smaller one.
In the process, check that the input numbers are valid (N1 &N2>0) and then check which of the number is greater?
*/


const n1 = prompt('Enter first integer number');
const n2 = prompt('Enter second integer number');

if(n1>n2){
console.log(`max number in ${n1}, ${n2}, is: ${n1}`);
} else{
    console.log(`max number in ${n1} and ${n2} is: ${n2}`); 
} if(n1<n2){
    console.log(`min number in ${n1} and ${n2} is: ${n1}`);
} else{
    console.log(`min number in ${n1} and ${n2} is: ${n2}`);
}