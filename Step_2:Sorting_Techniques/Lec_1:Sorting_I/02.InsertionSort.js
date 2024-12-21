/* 
Insertion Sort is a simple algorithm that builds a sorted array 
(or list) one element at a time. It works similarly to sorting 
playing cards in your hand. At each step, the algorithm picks an 
element and inserts it into its correct position among the 
elements already sorted
*/

function insertionSort(arr){
    for(let i=0; i< arr.length; i++){
        let key = arr[i];
        let j = i - 1;

        // Shift element that are greater than key
        while(j >= 0 && arr[j] > key){
            arr[j+1] = arr[j];
            j = j-1
        }
        arr[j+1] = key;
    }
    return arr;
}

let arr = [5,3,4,7,2,1];
console.log(insertionSort(arr));