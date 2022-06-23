/*Write a program that reads unsigned numbers in the range 10-60000 continually until zero is entered. Find and display how many numbers are completely divisible by 9, odd and even. Use while loop statement?*/


let n = 10;
let count = 0;
while(n!=6001 && n!==0 ){
    let temp = Number(prompt('enter a number'));
    n = Number(temp);
    console.log(`You Entered Number is: ${n}`);
    
    
    if(n>=6001){
        console.log(alert(`You cross The limit of [6000]`));
    } else if(n===0){
        console.log(`[0] is Used To end the loop`);
    }  else if(n<10){
        console.log(`Your number is below The limit of [10]`);
    } 
        if(n%9===0){
        console.log(`completely divisible by 9:`);
        mod = (n%9==0)
        count = count + mod;
    
        }
        else if(n%2===0){
            even = n;
            console.log(`${even}: is Even Number `);
        }else{
            odd = n;
            console.log(`${odd}: is Odd Number `);
        }
        
} 

console.log(`Total [${count}] : numbers  Who are completely divisible by 9`);

