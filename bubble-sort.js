/**
 * @see https://www.zerocho.com/category/Algorithm/post/57f67519799d150015511c38
 */
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j+1]) {
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
      };
    }
  }
  return arr;
}

const result = bubbleSort([10, 3, 7, 2, 8, 4, 1]);