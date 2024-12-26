// Approach_1: Reverse an Array, using extra array.

function extraArray(arr){
    const reversedArray = [];
    for(let i=arr.length-1; i >= 0; i--){
        reversedArray[arr.length-i-1] = arr[i];
    }
    return reversedArray;
}

let arr = [1,2,3,5,6]
console.log(extraArray(arr));


// Approach_2: Space-optimized iterative method

function optimizedApproach(arr){
    let n = arr.length;
    let p1 = 0, p2=n-1;
    while(p1 < p2){
        let temp = arr[p1];
        arr[p1] = arr[p2];
        arr[p2] = temp;
        p1++,p2--;
    }
    return arr;
}

console.log(optimizedApproach(arr));


/* 
Check if the given string is palindrome or not?
Palindrome: A string on reversal reads the same.

MADAM   -> MADAM
"11211" -> "11211"
*/

function checkPalidrome(i,strg){
    let n = strg.length;
    if(i >= n/2) return true;
    if(strg[i] !== n - strg[i]- 1) return false;
    return checkPalidrome(i+1, strg);
}

console.log("Check Palindrom",checkPalidrome(0,"MADAM"));