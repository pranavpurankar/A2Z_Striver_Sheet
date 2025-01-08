/* 
Linear search
*/

function linearSearch(arr,num){
    for(let i=0; i < arr.length; i++){
        if(arr[i] === num){
            return i;
        }
    }
    return -1;
}

let arr = [6,7,8,4,1]

console.log(linearSearch(arr,7));