// bubble sort

// very ineffecient O(n^2)
const bubbleSortFail = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      // compare arr[j] to arr[j+1]
      // swap places if needed
    }
  }
 
  return arr;
};

// better

const bubbleSort = (arr) => {
  let sorted = false;
  while (!sorted) {
    sorted = true;
    for (let i = 0; i < arr.length - 1; i++) {
      // compare arr[i] to arr[i+1]
      if (arr[i] > arr[i+1]) {
        // swap places if needed
        let temp = arr[i]
        arr[i] = arr[i+1]
        arr[i+1] = temp;
      }
      // if swapped, set sorted = false to run while loop again
      sorted = false;
    }
  }
  return arr;
};

// O(n log n)
const { quickSort } = require('./sort');
const numbers = [54, 8, 87, 88, 100, 98, 17, 72, 67, 42, 40, 34, 55, 18, 33, 94, 59, 68, 92, 2];

console.log(quickSort(numbers));




