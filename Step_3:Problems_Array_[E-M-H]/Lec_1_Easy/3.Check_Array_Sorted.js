function checkSortedArray(arr){
    for(let i = 1; i < arr.length; i++){
        if(arr[i] >= arr[i-1]){

        }
        else{
            return false;
        }
    }
    return true;
}

let arr = [1,2,5,7,8];
let arrN = [1,2,89,32,56,1];

console.log(checkSortedArray(arr));
console.log(checkSortedArray(arrN));