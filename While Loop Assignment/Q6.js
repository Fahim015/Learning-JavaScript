/*Write a program that reads unsigned numbers in the range 10-60000 continually until zero is entered. Find and display how many numbers are completely divisible by 9, odd and even. Use while loop statement?*/

let n = Number(prompt('enter a number'));
let countEven = 0; 
let countOdd = 0;
let countDiv  = 0;
let even=n, odd=n, divisible=n;
while( n>9 && n<=60000 && n!=0 ){
    
    console.log(`You Entered Number is: ${n}`);
    
        if(n%9===0){
            divisible=n;
        countDiv = countDiv + 1;
        }
        else if(n%2===0){
            even=n;
            countEven = countEven+1;
        }else{
            odd=n;
            countOdd = countOdd + 1;
        }
        n = Number(prompt('enter a number'));
} 
console.log(`[${countOdd}] Numbers is Odd `);
console.log(`[${countEven}] Numbers is Even`);
console.log(`Total [${countDiv}] numbers  Who are completely divisible by 9`);

