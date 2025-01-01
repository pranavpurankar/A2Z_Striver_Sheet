/* 
Given an array arr[]. The task is to find the largest element 
and return it.
*/

let arr = [3,2,1,5,2];

function largestElement(arr){
    let largest = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] > largest){
            largest = arr[i];
        }
    }
    return largest;
}

console.log(largestElement(arr))

