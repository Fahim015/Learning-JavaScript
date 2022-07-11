/*Write a program that reads numbers repeatedly until zero is entered, find and display the smallest and the largest number. Use while loop statement.*/

let tempN=Number(prompt('Enter a Number'));

let Minimum_Number = tempN;
let Maximum_Number = tempN;
while(tempN!== 0){
    if(tempN>Maximum_Number){
        Maximum_Number =tempN;
    } else if(tempN<Minimum_Number){
        Minimum_Number =tempN;
    }
    tempN=Number(prompt('Enter a Number'));
}

console.log(`Minimum Number is : ${Minimum_Number}`);
console.log(`Maximum Number is : ${Maximum_Number}`);
