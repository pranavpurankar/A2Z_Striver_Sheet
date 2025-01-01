/*
Striver Approach
*/

function quickSort(array, low, high) {
    if (low < high) {
        const pivotIndex = partition(array, low, high);
        quickSort(array, low, pivotIndex - 1); // Left subarray
        quickSort(array, pivotIndex + 1, high); // Right subarray
    }
}

function partition(array, low, high) {
    const pivot = array[high];
    let i = low - 1;

    for (let j = low; j < high; j++) {
        if (array[j] <= pivot) {
            i++;
            [array[i], array[j]] = [array[j], array[i]]; // Swap elements
        }
    }
    [array[i + 1], array[high]] = [array[high], array[i + 1]]; // Place pivot in position
    return i + 1;
}

const arr = [5,3,8,4,2]
quickSort(arr, 0, arr.length-1);
console.log(arr);