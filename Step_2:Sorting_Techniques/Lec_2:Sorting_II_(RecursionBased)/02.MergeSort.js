// Prefer chatGpt response, it is accurate and based on JS
// Striver explained in excellent manner, but js -> chtgpt

let arr = [3,1,2,4,1,5,6,2,4];

function merge(arr, low, mid, high){
    let temp = [];
    let left = low;
    let right = mid + 1;
    while(left <= mid && right <= high){
        if(arr[left] <= arr[right]){
            left++;
        }
        else{
            temp.push(arr[right]);
            right++;
        }
    }
    while(left <= mid){
        temp.push(arr[left]);
        left++;
    }
    while(right <= high){
        temp.push(arr[right]);
        right++;
    }

    for (let i = low; i <= high; i++) {
        arr[i] = temp[i-low];
        
    }
}

function mergeSort(arr, high, low){
    if(low >= high) return;
    mid = ((low+high)/2);
    mergeSort(arr, low, mid);
    mergeSort(arr, low, high);
    return merge(arr, low, mid, high);
}

console.log(mergeSort(arr,0,8));