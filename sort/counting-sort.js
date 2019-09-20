function countingSort(array) {
  let max = array[0];
  let min = array[0]; 

  for (let i = 1; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    } else {
      min = array[i];
    }
  }

  // 각 인덱스별 등장 횟수 계수
  const gap = max-min+1;
  const count = new Array(gap).fill(0);

  for (let i = 0; i < array.length; i++) {
    // 예) array[i] - min = 10 - 4 => 6
    const index = array[i] - min;
    count[index]++;
  }

  // 누적합
  console.log(array);
  console.log(count);

}

// const result = countingSort([3,4,0,1,2,4,2,4]); // [0,1,2,2,3,4,4,4]
const result = countingSort([10,12,12,13,13,4,4,4]); // [0,1,2,2,3,4,4,4]

