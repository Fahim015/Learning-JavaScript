/*
A pharmaceutical company pays 10% house rent and 90% daily allowance of basic salary to its employees
if the basic pay of the employee is less than 1500.
The company pays 20% house rent and 95% daily allowance of basic salary to its employees 
if the basic pay of the employee is greater than or equal to 1500.
Write an algorithm that takes basic salary of an employee and calculate and prints his gross salary?
*/

const b_Pay = prompt('Enter Basic Salary');

if(b_Pay<1500) {
    house_R =  (10/100)*b_Pay;
    daily_A =  (90/100)*b_Pay;
    gross_S = parseInt(house_R) + parseInt (daily_A) + parseInt (b_Pay);

    console.log(`Your Gross Salary is : ${gross_S}`);
} 

else if(b_Pay>=1500) {
    house_R =  (20/100)*b_Pay;
    daily_A =  (95/100)*b_Pay;
    gross_S = parseInt(house_R) + parseInt (daily_A) + parseInt (b_Pay);

    console.log(`Your Gross Salary is : ${gross_S}`);
}


