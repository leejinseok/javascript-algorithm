function radixSort(array) {
  // 길이 10의 배열
  const queue = [[],[],[],[],[],[],[],[],[],[]];
  let digits = 10;

  // 최초 1의 자리 정렬
  for (let i = 0; i < array.length; i++) {
    const index = getIndex(array[i], digits);
    queue[index].push(array[i]);
  }

  while(true) {
    digits *= 10;

    for (let i = 0; i < queue.length; i++) {
      const cur = queue[i];
      for (let j = 0; j < cur.length; j++) {
        const index = getIndex(cur[j], digits);
        if (i !== index) {
          queue[index].push(queue[i].splice(j, 1)[0]);
          j--;
        }
      }
    }

    if (array.every(item => item < digits)) {
      break;
    }
  }

  const result = [];
  for (let i = 0; i < queue.length; i++) {
    const cur = queue[i];
    for (let j = 0; j < cur.length; j++) {
      if (cur[j]) {
        result.push(cur[j]);
      }
    }
  }

  return result;
}

function getIndex(val, digits) {
  return Number((val % digits).toString().substring(0, 1));
}

const result = radixSort([15,27,64,25,50,17,39,28]);
console.log(result);