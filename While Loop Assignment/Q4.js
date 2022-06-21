/*Write a program that reads two numbers find and display their LCM (Least Common Multiple)?*/

let number1 = Number(prompt('Enter First Number'));
let number2 = Number(prompt('Enter Second Number'));

let lar_Number = Math.max(number1, number2);
let small_Number = Math.min(number1,number2);

let i = lar_Number;
while(i % small_Number !==0){
    i +=lar_Number;
}
console.log(`LCM of ${number1} & ${number2} is: ${i}` );
