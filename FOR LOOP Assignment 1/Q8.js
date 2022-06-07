/*Write a program that uses a for statement to determine and promote the largest number of ten numbers input by the user*/

let total_Value= prompt("Enter a Total value");
let largest= prompt("Enter a Number");
for(i=1, i<total_Value, i++){
    let temp= prompt("Enter a Value");
    if(temp>largest){
        largest=temp
    }
} 
console.log(`Largest Integer is: ${largest}`);