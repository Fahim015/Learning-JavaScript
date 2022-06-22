/*Write a program that reads unsigned numbers in the range 10-60000 continually until zero is entered. Find and display how many numbers are completely divisible by 9, odd and even. Use while loop statement?*/


let n = 10;
while(n!=6001 && n!==0 ){
    let temp = Number(prompt('enter a number'));
    n = Number(temp);
    console.log(`You Entered Number is: ${n}`);
    
    
    if(n>=6001){
        console.log(alert(`You cross The limit of [6000]`));
    }else if(n<=0){
        console.log(alert(`[0] is Used To end the loop`));   
    }else if(n<10){
        console.log(alert(`Your number is below The limit of [10]`));} 
    else if(n){
            
            let div = (n/9);
            console.log(`Divisible by 9 answer is: [${div}]`);
        }
}

