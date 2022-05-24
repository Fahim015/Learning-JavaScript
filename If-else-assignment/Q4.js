/*
Write segment of a program that reads a grade A,B,C,D or F and
then prints Excellent, Good, Fair, Poor or Failure depending on the grade.
Use multiple if statement?
*/
const grade = prompt('Enter Your Grade');
if(grade===('A')){
console.log('Excellent');
} else if (grade===('B')) {
    console.log('good');
} else if (grade===('C')) {
    console.log('Fair');
} else if (grade===('D')) {
    console.log('Poor');
} else if (grade===('F')) {
    console.log('Fail');
}
