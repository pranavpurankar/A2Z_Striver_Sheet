// Selection Sort

let arraySort = [9,46,24,52,20,13];

function selectionSort(arr){
    let sortedArray = [];
    for (let i = 0; i < arr.length; i++) {
        let mini = i;
    
        for (let j=i; j<=arr.length-1; j++) {
            if(arr[j] < arr[mini]){
                mini=j;
            }
        }

        let temp = arr[mini];
        arr[mini] = arr[i];
        arr[i] = temp;
        sortedArray.push(arr[i]);
    }
    return sortedArray;
}

const sortedArray = (selectionSort(arraySort));
console.log(sortedArray);