/*
Write a program that takes the length of two legs of a right triangle as input and calculates the area and hypotenuse?
*/
const base = prompt('Please Enter The Base Value Of Triangle');
const length = prompt('Please Enter The Length Value Of Triangle');

const aria = (base*length)/2;
const a = base**2;
const b = length**2;
const sum = a + b;
const hypotenuse = Math.sqrt(sum);
const x = (aria,hypotenuse);


if(x){
    console.log(`Base: ${base}, Length: ${length}, And Aria of Triangle is : ${aria} 
    and Hypotenuse of a Triangle is: ${hypotenuse}`);
}



