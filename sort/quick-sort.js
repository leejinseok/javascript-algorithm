/**
 * @see https://gmlwjd9405.github.io/2018/05/10/algorithm-quick-sort.html
 */
function quickSort(array) {
  if (array.length < 2) return array;

  const pivot = array[0];

  let lowCursor = 1;
  let highCursor = array.length - 1;
  while(lowCursor <= highCursor) {

    // 왼쪽수가 기준보다 크고 오른쪽 수가 기준보다 작으면 위치를 바꿉니다 (swap)
    if (array[lowCursor] > pivot && array[highCursor] < pivot) {
      [array[lowCursor], array[highCursor]] = [array[highCursor], array[lowCursor]];
      lowCursor++;
      highCursor--;
    }

    // 왼쪽 수는 기준보다 작으면 다음으로 넘어가고, 크면 가만히 있습니다
    if (array[lowCursor] <= pivot) {
      lowCursor++;
    }

    // 오른쪽 수는 기준보다 크면 다음으로 넘어가고, 작으면 가만히
    if (array[highCursor] >= pivot) {
      highCursor--;
    }
  }

  [array[0], array[lowCursor-1]] = [array[lowCursor-1], array[0]];
  const left = array.splice(0, lowCursor-1);
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