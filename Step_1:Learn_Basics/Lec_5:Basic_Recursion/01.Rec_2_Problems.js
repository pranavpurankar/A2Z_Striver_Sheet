/* 
Ques_1: Print the name N times using recursion
*/

function printName(i,n){
    if(i > n)return;
    console.log("I am Pranav");
    printName(i+1, n);
}

printName(1,3);

/* 
Ques_2: Print 1 to N using recursion.
*/

function printNumber(i,n){
    if(i>n) return;
    console.log(i)
    printNumber(i+1, n);
}

printNumber(1,3);

/* 
Ques_3: Print in the reverse order. Print in terms of N-1
*/

console.log("\n");
function reverseNumber(i,N){
    if(i < 1) return;
    console.log(i);
    reverseNumber(i-1, N);
}

reverseNumber(3,3);

/* 
Ques_4: Print linearly from 1 to N (using BackTracking)
The last gets executed first, that is the idea here.
*/
console.log("\n");

function backTrackIntro(i,n){
    if(i<1) return;
    backTrackIntro(i-1, n)
    console.log(i);
}

backTrackIntro(3,3);

/* 
Ques_5: Print from N to 1 using BackTracking
*/
console.log("\n")

function backTrackPractice(i,n){
    if(i > n)return;
    backTrackPractice(i+1,n);
    console.log(i);
}

backTrackPractice(1,3);