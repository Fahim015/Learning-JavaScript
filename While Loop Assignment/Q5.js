/*Write a program that reads numbers repeatedly until zero is entered, find and display the smallest and the largest number. Use while loop statement.*/

let n = 1;
let Minimum_Number = Infinity;
let Maximum_Number = - Infinity;
while(n !== 0){
    let tempN=Number(prompt('Enter a Number'));
    console.log(tempN);
    n = Number(tempN);
    if(n>Maximum_Number){
        Maximum_Number = n;
    }if(n<Minimum_Number){
        Minimum_Number = n;
    }
}

console.log(`Minimum Number is : ${Minimum_Number}`);
console.log(`Maximum Number is : ${Maximum_Number}`);
