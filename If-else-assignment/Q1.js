
/* Write a program that reads user age and prints
“CHILD” if age <18,
“ADULT” if 18<=age<35 and
“SENIOR” if age >=35?*/ 

const age = Number (prompt(`Enter Your Age`)); 

if(age<18) {
        console.log('CHILD');
} else if(18<=age && age<35) {
    console.log('ADULT');
} else if(age=>35) {
    console.log('SENIOR');
}