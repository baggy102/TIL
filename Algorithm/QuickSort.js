// 퀵 정렬

// 분할 정복 기법을 사용한다.
// 문제를 해결하지 못할 때 작게 쪼개어 해결하는 것

// pivot(중심축) 을 정하고, 중심축 보다 작은 값들은 왼쪽으로 큰 값들은 오른쪽으로 보내는 것이다.
// 이렇게 pivot을 정해서 왼쪽 오른쪽으로 나누고 다시금 왼쪽 오른쪽에 대해
// 재귀적으로 pivot을 정해서 왼쪽 오른쪽을 나누고, 이 과정을 반복.

// 정렬되지 않은 1~8까지의 배열이 존재 할 때
// [4, 1, 7, 6, 5, 8, 2, 3] 중 어떤 한 숫자를 고른다.(5)
// [4, 1, 7, 6, 3, 8, 2, 5] (5)를 가장 오른쪽으로 보낸다.
// 왼쪽에는 기준보다 작은 수, 오른쪽에는 기준보다 큰 수가 나오도록 조정.

// [4, 1, 7, 6, 3, 8, 2, 5] 5를 제외한 가장 왼쪽과 가장 오른쪽 수를 조작한다.
// 왼쪽 수는 기준보다 작으면 다음으로 넘기고, 크면 가만히 놔둔다.
// 오른쪽 수는 기준보다 크면 다음으로 넘기고, 작으면 가만히  놔둔다.
// 왼쪽은 기준보다 크고, 오른쪽은 기준보다 작으면 서로 바꿔준다.

// [4, 1, 7, 6, 3, 8, 2, 5] 왼쪽 4는 기준(5)보다 작기 때문에 다음 수로 넘어가고,
// 오른쪽 2는 기준보다 작기 때문에 가만히 있는다.

// [4, 1, 7, 6, 3, 8, 2, 5] 왼쪽 1은 기준보다 작기 때문에 다음 수로 넘어가고,
// 오른쪽 2는 가만히

// [4, 1, 7, 6, 3, 8, 2, 5] 왼쪽 7은 기준보다 크고, 오른쪽 2는 기준보다 작기 때문에 서로 바꿔 줌
// [4, 1, 2, 6, 3, 8, 7, 5] 왼쪽 6은 기준보다 크기 때문에 가만, 오른쪽 8은 기준보다 크기 때문에
// 다음 수로 넘어간다.

// [4, 1, 2, 6, 3, 8, 7, 5] 왼쪽 6은 기준보다 크고, 오른쪽 3은 기준보다 작기 때문에 서로 바꿔 줌.
// [4, 1, 2, 3, 6, 8, 7, 5] 다음 왼쪽 수와 오른 쪽 수가 만남 -> 6과 기준 수 (5) 서로 바꿔 줌.
// [4, 1, 2, 3, 5, 8, 7, 6]
// 5를 기준으로 왼쪽은 5보다 작은 수, 오른쪽은 5보다 큰 수만 남는다.

// 5를 기준으로 왼쪽 ([4, 1, 2, 3]), 오른쪽 ([8, 7, 6])을 재귀적으로 퀵 정렬한다.

// 정렬, 재귀 부분으로 나누어 코드 작성

let partition = function (array, left, right, pivotIndex) {
  // 정렬하는 부분
  let temp;
  let pivot = array[pivotIndex];
  while (left <= right) {
    // 왼쪽, 오른쪽 수를 규칙과 비교해 다음 수로 넘어갑니다.
    while (array[left] < pivot) left++;
    while (array[right] > pivot) right--;
    if (left <= right) {
      // 왼쪽이 기준보다 크고, 오른쪽이 기준보다 작으면
      temp = array[left];
      array[left] = array[right];
      array[right] = temp; // 서로 바꿔줍니다.
      left++;
      right--;
    }
  }
  temp = array[left];
  array[left] = array[pivotIndex];
  array[pivotIndex] = temp; // 마지막으로 기준과 만난 수를 바꿔줍니다. 기준의 위치는 이제 i입니다.
  return left;
};

let quickSort = function (array, left, right) {
  // 재귀하는 부분
  if (!left) left = 0;
  if (!right) right = array.length - 1;
  let pivotIndex = right; // 배열 가장 오른쪽의 수를 기준으로 뽑습니다.
  pivotIndex = partition(array, left, right - 1, pivotIndex);
  // right - 1을 하는 이유는 기준(현재 right)을 제외하고 정렬하기 위함입니다.
  if (left < pivotIndex - 1) quickSort(array, left, pivotIndex - 1); // 기준 왼쪽 부분 재귀
  if (pivotIndex + 1 < right) quickSort(array, pivotIndex + 1, right); // 기준 오른쪽 부분 재귀
  return array;
};

quickSort([4, 1, 7, 6, 3, 8, 2, 5]); // [1,2,3,4,5,6,7,8]
