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
        p1++,p2--
    }
    return arr;
}

console.log(optimizedApproach(arr));

// Approach_3: Recursive method
// function reverseArray(arr, start, end){
//     let n = arr.length;

// }