/*Write a program that reads two numbers find and display their GCD (Greatest Common Divisor)?*/

let n1 = Number(prompt('Enter First Number'));
let n2 = Number(prompt('Enter Second Number'));
let a = n1;
let b = n2;

while(n1!=n2){
    if(n1>=n2){
        n1-=n2;
    }else {
        n2-=n1;
    }
    
}
console.log(`Greatest Common Divisor of ${a} & ${b} is : ${n1}`);
