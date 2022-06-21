/*Write an algorithm that determines the first n (user supplied number) Fibonacci numbers*/


let n1= 0, n2= 1,fib_Number;
let fib_limit= prompt("Enter Fibonacci Numbers Limit")
for(i=2; i<=fib_limit; i++){
    fib_Number= n1 + n2;
    n1 = n2;
    n2 = fib_Number;
    console.log(n1);
}

