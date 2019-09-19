function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let min = i;
    for (j = i + 1; j < array.length; j++) {
      if (array[min] > array[j]) {
        min = j;
      }
    }
    [array[i], array[min]] = [array[min], array[i]];
  }
  return array;
}

const result = selectionSort([5,1,4,7,2,6,8,3]);
console.log(result);