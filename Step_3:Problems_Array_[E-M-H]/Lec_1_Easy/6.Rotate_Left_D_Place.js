/* 
Left rotate the array by D places
arr = [1,2,3,4,5,6,7]   d=2

BruteForce:
If the (d)rotation is < 7; then d = d % n


1) Shifting:
*/

arr = [1,2,3,4,5,6,7];

// function leftRotate(arr, rotation){
//     let d = rotation;
//     let n = arr.length;
//     d = d%n
//     // console.log(d);
//     let temp = arr.slice(0,d);
    
//     // Step_1: Shifting
//     for(let i=d; i < n; i++){
//         arr[i-d] = arr[i];
//     }

//     // Step_2: Putting back the temp
//     for(let i=n-d; i<n; i++ ){
//         arr[i] = temp[i-(n-d)];
//     }
//     return arr;
// }


// console.log(leftRotate(arr, 23));

// =================================================================

// This function will reverse the array from start to finish
function reverse(arr, start, end){
    while(start <= end){
        let temp = arr[start]
        arr[start] = arr[end]
        arr[end] = temp
        start++
        end--
    }
}
// Incomplete
function leftRotateOptimal(arr, d){
    reverse(arr,)
}

leftRotateOptimal(arr,2);