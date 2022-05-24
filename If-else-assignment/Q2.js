/*
Write a program that creates a simple calculator.
It reads two float numbers N1 ,N2 and a character CH(+,-,*,/),
then perform calculations depending upon the type of character
enter by the user and display the result in the format...N1 op N2=result?
*/

const N1 = prompt('Enter First Number');
const N2 = prompt('Enter Second Number');
const op = prompt('Enter Operator');

if(op===('+')) {
    sum = parseInt (N1) + parseInt (N2);
    console.log(`${N1} + ${N2} = ${sum}`);
} else if (op===('-')) {
    sub = parseInt (N1) + parseInt (N2);
    console.log(`${N1} - ${N2} = ${sub}`);
} else if (op===('*')) {
    multi = parseInt (N1) - parseInt (N2);
    console.log(`${N1} * ${N2} = ${multi}`);
} else if (op===('/')) {
    div = parseInt (N1) / parseInt (N2);
    console.log(`${N1} / ${N2} = ${div}`);
}

