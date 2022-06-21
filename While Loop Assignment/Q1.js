/*Write a program that reads a number N, calculates and displays the reverse of the number N? */


let N=prompt('Enter Any Numbers');
let reverse=0;
let Number=N;
while (N!=0){
reverse =(reverse*10) + (N%10);
N=parseInt(N/10);
    
}
console.log( `The reverse Number of ${Number} is: ${reverse}`);
