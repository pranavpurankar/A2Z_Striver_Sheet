/* 
Ques_1: Summation of first N numbers. Two approach first parameterized
and second is functional returning as function.

1+2+3 = 6
*/

// Parameterised

function summationParameterised(i,sum){
    if(i<1){
        console.log(sum);
        return;
    }
    summationParameterised(i-1, sum+i);
}

summationParameterised(3,0);


// Function way

function summationFunctional(n){
    if(n === 0) return 0;
    return n + summationFunctional(n-1);
}

console.log('Functional',summationFunctional(3));

// Factorial of N

function factorial(n){
    if(n===0) return 1;
    return n*factorial(n-1);
}
console.log('Factorial',factorial(5));