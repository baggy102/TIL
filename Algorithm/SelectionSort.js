// 선택정렬 (Selection sort)

// 선택정렬은 성능이 좋지 않지만 (O(n^2)), 코드가 간단하고 30 이하의 작은 수에서는 효과적이다.
// 배열을 처음부터 검사해 가장 작은 수를 제일 앞에 가져다 놓는다.
// 이후 다시 배열을 검사해 가장 작은 수를 두 번째 칸에 가져다 놓는다.
// 위를 계속 반복해 끝까지 정렬한다.
// 이처럼 배열을 한번 검사할 때 마다 숫자 하나밖에 정렬을 못 함.

// [5, 1, 4, 7, 2, 6, 8, 3] 배열을 청므부터 검사해 가장 작은 1을 앞으로 보낸다.
// [1, 5, 4, 7, 2, 6, 8, 3] 다시 검사해 2를 앞으로 보낸다.
// [1, 2, 4, 7, 5, 6, 8, 3] 3을 앞으로 보냄.
// [1, 2, 3, 7, 5, 6, 8, 4]
// [1, 2, 3, 4, 5, 6, 8, 7]
// [1, 2, 3, 4, 5, 6, 8, 7]
// [1, 2, 3, 4, 5, 6, 7, 8] 정렬 끝

let selectionSort = function (array) {
  let length = array.length;
  let minIndex = array.length;
  for (i = 0; i < length - 1; i++) {
    // 배열을 처음부터 검사
    minIndex = i;
    for (j = i + 1; j < length; j++) {
      // 최소값의 위치를 찾음
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }
    temp = array[minIndex]; // 최소값을 저장
    array[minIndex] = array[i];
    array[i] = temp; // 최소값을 맨 앞으로 보냄
  }
  return array;
};

selectionSort([5, 1, 4, 7, 2, 6, 8, 3]);
console.log(selectionSort([5, 1, 4, 7, 2, 6, 8, 3]));
