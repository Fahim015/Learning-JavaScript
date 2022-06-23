/*Write a program that reads two numbers find and display their LCM (Least Common Multiple)?*/

let number1 = Number(prompt('Enter First Number'));
let number2 = Number(prompt('Enter Second Number'));

let n1 = number1;
let n2 = number2;

let lar_Number = Math.max(number1, number2);

let i = lar_Number;
while(true){
    if(i % number1==0  && i%number2==0){
        lcm = i;
    }else{
        lcm = (number1 * number2);
    }
    console.log(`LCM of ${n1} & ${n2} is: ${lcm}` );
    break;
}
