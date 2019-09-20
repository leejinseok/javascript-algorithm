/**
 * @see https://gmlwjd9405.github.io/2018/05/10/algorithm-quick-sort.html
 */
function quickSort(array) {
  if (array.length < 2) return array;

  const pivot = array[0];

  let leftCursor = 1;
  let rightCursor = array.length - 1;
  while(leftCursor <= rightCursor) {
    // 왼쪽 수는 기준보다 작으면 다음으로 넘어가고, 크면 가만히 있습니다
    if (array[leftCursor] < pivot) {
      leftCursor++;
    }

    // 오른쪽 수는 기준보다 크면 다음으로 넘어가고, 작으면 가만히
    if (array[rightCursor] > pivot) {
      rightCursor--;
    }

    // 왼쪽수가 기준보다 크고 오른쪽 수가 기준보다 작으면 위치를 바꿉니다 (swap)
    if (array[leftCursor] > pivot && array[rightCursor] < pivot) {
      [array[leftCursor], array[rightCursor]] = [array[rightCursor], array[leftCursor]];
      leftCursor++;
      rightCursor--;
    }
  }

  [array[0], array[leftCursor-1]] = [array[leftCursor-1], array[0]];
  const left = array.splice(0, leftCursor-1);
  const mid = array.splice(0, 1);
  const right = array;

  return [
    ...quickSort(left),
    ...mid,
    ...quickSort(right)
  ];
}


const result = quickSort([5,3,8,4,9,1,6,2,7]);
console.log(result);