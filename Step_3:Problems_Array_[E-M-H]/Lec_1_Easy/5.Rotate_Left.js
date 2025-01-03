/* 
Given an array of N integers, left rotate the array by one place.

Input: N=5, array[] = {1,2,3,4,5}
Output: 2,3,4,5,1
*/

function rotateLeft(arr){
    let temp = arr[0];
    let n = arr.length;
    for (let i = 1; i < n; i++) {
        arr[i-1] = arr[i];
    }
    arr[n-1] = temp
    return arr;
}

let arr = [1,2,3,4,5]
console.log(rotateLeft(arr));