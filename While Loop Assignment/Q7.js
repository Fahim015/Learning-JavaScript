/*Write a program that uses a while loop statement to calculate and print the average of several integers. 
Assume the last value read is sentinel 9999?*/

let n =1;
let totalNumber = 0;
let sum = 0;

    while(n!=-1){
    
    let temp = Number(prompt('Enter a number'));
    n = temp;
    totalNumber = (totalNumber +1);
    sum = (sum + n);
    let average = (sum/totalNumber);
    console.log(` New Number is : ${n} 
                  Total Number is : ${totalNumber}
                  Sum is : ${sum} `);
                  
        if(n==-1){
            console.log(`Average is : [${average}]`);
        }          
    }
    


