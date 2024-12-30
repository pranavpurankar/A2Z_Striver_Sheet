let arr = [3,2,5,7,2,4];

function mergeSort(arr){
    // Base case
    if(arr.length <=1 ) return arr;
    
    let mid = arr.length/2;
    let left = mergeSort(arr.slice(0,mid));
    let right = mergeSort(arr.slice(mid));

    return merge(left,right);
}

function merge(left,right){
    let result = [];
    while(left.length && right.length){
        if(left[0] <= right[0]){
            result.push(left.shift());
        }
        else{
            result.push(right.shift());
        }        
    }

    return result.concat(left).concat(right);
}

console.log(mergeSort(arr));