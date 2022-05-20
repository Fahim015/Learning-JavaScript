/*
Write a program that takes the length of two legs of a right triangle as input and calculates the area and hypotenuse?
*/
const base = prompt('Please Enter The Base Value Of Triangle');
const length = prompt('Please Enter The Length Value Of Triangle');

const aria = (base*length)/2;
if(aria){
    console.log(`Base: ${base}, Length: ${length}, And Aria of Triangle is : ${aria}`);
}
