// Hashing in JavaScript: From Basics to Advanced

/* 
What is Hashing?

Hashing is a technique used to map data to a specific location (or index) for
quick access. It combines pre-storing and fetching operations. In simple terms
hashing involes:
    
    1. Pre-storing: Calculating and storing the frequency or occurrence of data
                    beforehand.
    2. Fetching: Directly retrieving stored information without recalculating 
                    every time.


Brute-Force Approach

Problem:
    Given an array of integers, determine the frequency of specific elements
    (queries).

Approach:
    In a brute-force approach, we iterate over the array for every query and
    count the occurrences of the query element.

Algorithm:

    1.For each query, loop through the array and count how many times the query 
    matches an element.

    2.This results in a time complexity of O(n * q), where n is the length of 
    the array, and q is the number of queries.

    3.This approach becomes inefficient for large arrays or multiple queries.


Code (Brute Force):
*/

function bruteForceFrequency(arr,queries){
    const result = [];
    for (let i = 0; i < queries.length; i++) {
        let count = 0;
        for (let j=0; j < arr.length; j++){
            if(queries[i] === arr[j]){
                count++;
            }
        }
        result.push(count);
    }
    return result;
}

// Example usage:
const arr = [1,2,3,3,1,5,12];
const queries = [1,3,12,10];
console.log(bruteForceFrequency(arr,queries));
// Output: [2,2,1,0]


/* 
Optimized Approach Using Hashing

Why use Hashing?

Hashing precomputes the frequency of the element in the array, enabling quick
lookups during the fetching step. This eliminates redudant computation.

Step1: Pre-storing

    • Create a hash structure (array or map) to store the frequency of each
      element in the input array.
    • For each element in the array, increment its corresponding frequency in
      the hash. 

Step 2: Fetching
    • For each query , directly retrieve the precomputed frequency from the hash  
*/

// Optimized Approach using Array
function numberHashing(arr,queries){
    // Step 1: Precompute frequencies
    const maxElement = 12;  // Assumption from the problem
    const hash = new Array(maxElement+1).fill(0);

    arr.forEach( num => hash[num]++);
    // Increment hash for each number in array

    // Step 2: Fetch results for queries
    const results = queries.map(query => hash[query] || 0);
    return results;

}

// Example usage:
const arrO = [1,2,3,3,1,5,12];
const queriesO = [1,3,12,10];
console.log(numberHashing(arrO,queriesO));

// Let's understand .forEach and Map() method. revision
/* 
Understanding arr.forEach
What does forEach do?
The forEach method in JavaScript is used to iterate over each element in an 
array and execute a provided function for each element
*/
// arr.forEach( num => console.log("PracticeforEach:",num));
// arr.forEach( num => hash[num]++));

/* 
Here's what's happening:
1. Iteration: The forEach method goes through each element for the array arr.
    • For example, if arr = [1, 2, 3, 3, 1, 5, 12], it will first take 1, 
    then 2, then 3, and so on.

2. Callback Function: (num => hash[num]++ ):
    • num: Represents the current element in the array during the iteration
    • hash[num]++ : This increments the frequency of the current number (num)
    in the "hash" array.

Logic:
    • The "hash" array starts as an array of 13 zeroes ([0,0,0, ... ,0])
    • For each "num" in the input array:
        • Find the corresponding index in "hash" (the number itself acts as the
        index).
        • Increment the value at that index to record how many times the number
        has appeared.

Example Walkthrough:

Input: arr = [1, 2, 3, 3, 1, 5, 12]

    • On the first iteration (num = 1): hash[1]++ → hash becomes 
        [0, 1, 0, 0, ..., 0].
    • On the second iteration (num = 2): hash[2]++ → hash becomes 
        [0, 1, 1, 0, ..., 0].
    • On the third iteration (num = 3): hash[3]++ → hash becomes 
        [0, 1, 1, 1, ..., 0].
    • Repeat for the remaining elements. Final hash after all iterations: 
        [0, 2, 1, 2, 0, 1, 0, 0, 0, 0, 0, 0, 1].

This means:

    • 1 appears 2 times.
    • 2 appears 1 time.
    • 3 appears 2 times.
    • 12 appears 1 time.

Understanding queries.map

What does "map" do?

The "map" method in JavaScript create a new array by applying a given function
to each element of the original array.

How it is used in this code?
const results = queries.map(query hash[query] || 0);

1. Input Array: "queries" is the array of numbers we are querying, e.g. 
    [1,3,12,10]
2. Callback Function (query => hash[query] || 0):
    • query: Represents the current query number from the "queries" array.
    • hash[query]: Fetches the precomputed frequency of the query number from 
      the "hash" array.
    • || 0 : If the query number does not exist in "hash" (i.e., hash[query] is
    "undefined"), it returns 0.
3. Result: For each query, the "map" method calculates the frequency from "hash"
    and stores it in the "results" array.

Logic:

The map method is used to transform the queries array into an array of 
frequencies by looking up the hash array.

Example Walkthrough:
Input: queries = [1, 3, 12, 10]
Final hash from the earlier step: [0, 2, 1, 2, 0, 1, 0, 0, 0, 0, 0, 0, 1].

    • For query = 1: hash[1] = 2 → Add 2 to results.
    • For query = 3: hash[3] = 2 → Add 2 to results.
    • For query = 12: hash[12] = 1 → Add 1 to results.
    • For query = 10: hash[10] = undefined → Add 0 to results (because of || 0).
Final results array: [2, 2, 1, 0].

Key Differences Between forEach and map
Method  ------> forEach
Purpose ------> Performs an action for each element in an array 
                (no new array is created)
Output  ------> Returns undefined.
------------------------------------------------------------------
Method  ------> map
Purpose ------> Transforms each element and creates a new array.
Output  ------> Returns the new transformed array.
*/

// Reformatting array
const kvArray = [
    {key:1, value:10},
    {key:2, value:20},
    {key:3, value:30}
];

const reformattedArray = kvArray.map(({key, value}) => ({ [key]:[value]}));

console.log("Reformatted Array: " ,reformattedArray);
console.log("KV_Original",kvArray);


/* 
Optimized Implementation 2: using Maps
Maps in Js provides flexibility and better handling or larger ranges of data.
Then dynamically adjust their size and are not limited by the range of values
in the input.
*/

function hashing(arr){
    // Using Map for better perfomance and flexibility
    const hashedArray = new Map();

    // Precompute step: Populate frequencies into hashedArray
    for (let i=0; i< arr.length; i++){
        const element = arr[i];
        hashedArray.set(element, (hashedArray.get(element) || 0) + 1);
    }

    // Return the computed hash
    return hashedArray;
}

const arrNew = [1,2,3,3,1,5,12];
const hashMap = hashing(arrNew);
console.log("Value of 01:",hashMap.get(1));
console.log("Value of 03:",hashMap.get(3));
console.log("Value of 10:",hashMap.get(10));

/* 
Step 2: Understanding the set() and get() Methods

    hashedArray.set(key, value): Adds a new key-value pair to the Map or 
    updates the value for an existing key.
    
    hashedArray.get(key): Retrieves the value associated with the given 
    key from the Map. If the key doesn’t exist, it returns undefined.

Step 3: What Does (hashedArray.get(element) || 0) Mean?

This is the key part of the logic.

    1.hashedArray.get(element):

        • Checks if the current element exists in the Map and gets its value 
          (frequency).
        • If the element is not in the Map (first time seeing it), it returns 
          undefined.
    
    2. || 0:

        • If hashedArray.get(element) returns undefined (element not in Map), we treat its frequency as 0 (since it hasn’t appeared yet).
        • This ensures the program doesn’t break when dealing with new elements.
*/


/* 
Handling Large Values Efficiently:
When array elements are very large, we cannot use them as indices (e.g. 10^7)
Instead:
    1. Use a Map for dynamic keys.
    2. Or apply a hash function to reduce the size of the hash space.
*/

function hashLargeValues(arr, queries){
    const hash = new Map();

    // Precompute using a hash function (modulo division)
    for (const num of arr){
        const key = num % 1000; // Reduce the size of hash space
        hash.set(key, (hash.get(key) || 0) + 1);
    }

    // Fetch results
    const results = queries.map(query => hash.get(query % 1000) || 0);
    return results;
}

// Example usage:
const arrLarge = [1000000001, 1000000002, 1000000003];
const queriesLarge = [1000000001, 1000000005];
console.log(hashLargeValues(arrLarge,queriesLarge));