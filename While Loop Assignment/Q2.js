/*Write a program that reads a five-digit integer and determines whether the number is palindrome?*/

let number=Number(prompt('Enter a Number'));
let x = number; 
let reverseOfNumber=0;
while(number!==0){
    let mod = number%10;
    number = Math.trunc (number/10);
    reverseOfNumber = (reverseOfNumber*10) +(mod);

}
if(x===reverseOfNumber){
    console.log(`${x} is palindrome`);
} else {
    console.log(`${x} is not palindrome`);
}
