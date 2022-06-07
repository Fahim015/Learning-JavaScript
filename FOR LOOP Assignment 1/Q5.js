/* Write an program that uses for loop statement to sum a sequence of integers.
Assume that the first integer read specifies the number of values remaining to be entered.
Your program should read only one value per statement. A typical input statement might be 5	100	200	300	400 500?*/

let b=0;
let a= prompt("Please enter a number");
for(i=1; i<=a; i++){
    let x =prompt("enter a number");
    b =parseInt(x) + parseInt(b);
}
console.log(b);