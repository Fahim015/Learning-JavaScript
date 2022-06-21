/*Write an program to calculate : PI = 4-4/3+4/5-4/7+4/9-4/11+4/13*/

let n= 4;
let sign=1;

for(i=1; i<=13; i=i+2){
    let temp = (n/i);
    sign=(sign*-1)+temp; 
    sign=sign+1;
    
}
console.log(`Pi Value is: ${sign}`);
