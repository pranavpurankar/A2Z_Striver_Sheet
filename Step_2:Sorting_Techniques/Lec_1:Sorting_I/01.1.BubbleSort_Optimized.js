/*
Algorithm:
    1. Start with an array of n elements.
    2. Define the unsorted range as the portion of the array you want 
       to sort, initially the entire array.
    3. Repeat the following steps for n-1 iterations:
        • Compare each pair of adjacent elements in the current range.
        • If the current element is greater than the next, swap them.
        • After each iteration, the largest element of the range is 
          pushed to the end, reducing the unsorted range.
    4. Continue reducing the unsorted range until the array is 
       completely sorted.
    5. Return the sorted array.

    WHEN YOU COMEBACK add optimized part to it.
*/

let sortedArray = [2,3,15,20];

function alreadySorted(arr){
    let n = arr.length;
    for (let i = n-1; i>=1; i++) {
        let didSwap = 0;
        for (let j = 0; j <= i-1; j++) {
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                didSwap = 1;
            }
        }
        if(didSwap === 0){
            break;
        }
        console.log("Im")
    }
    return arr;
}

console.log(alreadySorted(sortedArray));