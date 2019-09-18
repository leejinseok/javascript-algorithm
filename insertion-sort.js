function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j+1] < arr[j]) {
        [arr[j+1], arr[j]] = [arr[j], arr[j+1]];
      }
    }
  }
  return arr;
}

const result = insertionSort([5, 6, 1, 2, 4, 3]);
console.log(result);