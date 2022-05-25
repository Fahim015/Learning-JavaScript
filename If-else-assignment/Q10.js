/*
01/01/1900, the day was Monday. If any year is input through keyboard,
write a program to find out the day on 
of that year?
*/


const year = new Date(prompt('Enter year'));

if(year) {

    const day = year.getDay();
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    console.log(year.toDateString());  
}

