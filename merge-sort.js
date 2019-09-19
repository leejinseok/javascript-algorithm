/**
 * @see https://gmlwjd9405.github.io/2018/05/08/algorithm-merge-sort.html
 * @see https://www.zerocho.com/category/Algorithm/post/57ee1fc107c0b40015045cb4
 */
function mergeSort(array) {
  if (array.length < 2) return array;
  const mid = Math.floor(array.length / 2);
  const left = array.splice(0, mid);
  const right = array;

  return merge(mergeSort(left), mergeSort(right));
} 

function merge(left, right) {
  const result = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  while (left.length) result.push(left.shift());
  while (right.length) result.push(right.shift());

  return result;
}

const result = mergeSort([5,2,4,7,6,1,3,8]);
console.log(result);