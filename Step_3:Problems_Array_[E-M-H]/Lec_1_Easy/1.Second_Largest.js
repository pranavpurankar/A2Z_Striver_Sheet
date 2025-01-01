/* 

*/
const arr = [1,2,4,7,7,5]

function secondLargest(arr){
    let largest = arr[0];
    let sLargest = -1;

    for (let i = 0; i < arr.length; i++) {
        if(arr[i] > largest){
            sLargest = largest;
            largest = arr[i]
        }
        else if(arr[i] < largest && arr[i] > sLargest){
            sLargest = arr[i]
        }
    }
    return sLargest;
}

console.log(secondLargest(arr));