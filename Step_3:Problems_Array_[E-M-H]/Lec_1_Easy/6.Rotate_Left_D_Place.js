/* 
Left rotate the array by D places
arr = [1,2,3,4,5,6,7]   d=2

BruteForce:
1) Shifting:
*/

arr = [1,2,3,4,5,6,7];

function leftRotate(arr, rotation){
    let d = rotation;
    let n = arr.length;
    d = d%n
    // console.log(d);
    let temp = arr.slice(0,d);
    
    // Step_1: Shifting
    for(let i=d; i < n; i++){
        arr[i-d] = arr[i];
    }

    // Step_2: Putting back the temp
    for(let i=n-d; i<n; i++ ){
        arr[i] = temp[i-(n-d)];
    }
    return arr;
}


console.log(leftRotate(arr, 23));