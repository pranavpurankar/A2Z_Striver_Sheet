/* 
Problem Statement: Given an integer array sorted in non-decreasing 
order, remove the duplicates in place such that each unique element 
appears only once. The relative order of the elements should be kept 
the same.

If there are k elements after removing the duplicates, then the 
first k elements of the array should hold the final result. 
It does not matter what you leave beyond the first k elements.

Note: Return k after placing the final result in the first k slots 
of the array.

Example:
    Input:
        arr [1,1,2,2,3,3]
    Output:
        arr [1,2,3,_,_,_]
*/

function removeDuplicates(arr){
    let i=0;
    for (let j = 1; j < arr.length; j++) {
        if(arr[j] !== arr[i]){
            arr[i+1] = arr[j];
            i++;
        }
    }
    return i+1 ,arr;

}
let arr = [1,1,2,2,3,3]

console.log(removeDuplicates(arr));