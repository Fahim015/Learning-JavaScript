/*Write an program that uses for loop statement to find  the smallest of several integers.
Assume that the first value read specifies the number of values remaining and 
the first number is not one of the integers to compare?  */

let total_Values= prompt("Enter a Total Value");
let smallest= prompt("Enter a Number");
for(i=1; i<total_Values; i++){
    let temp= prompt("Enter a Value");
    if(temp<smallest){
        smallest=temp
    }
    }
    console.log(`Smallest Integer is: ${smallest}`);