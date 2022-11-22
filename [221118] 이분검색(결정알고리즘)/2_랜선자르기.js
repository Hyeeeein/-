// n 개를 만들 수 있는 랜선의 최대길이 반환
// 답은 갯수에 상관없이 최대길이는 주어진 값 중 가장 큰 것까지임, 따라서 left 는 1 부터 right 는 802 까지임은 확실함. 이진 탐색을 이용해 mid 값을 구하고 mid 값이 답이라고 가정하고 각 랜선의 길이를 mid 로 나눈 값이 랜선을 자른 갯수가 나옴, 근데 그것을 합친 값 n 보다 작다면 right 를 mid 값의 이전으로 좁혀줌, 그렇게 반복해서 각 랜선의 길이를 mid 로 나눈 값이 n 과 같다면 mid 값을 반환. 그러나 해당 mid 값보다 더 큰 값이 있을 수 있으니 left 를 해당 mid 값 바로 이후로 옮기고 right 를 이전의 mid 값으로 옮겨서 반복하여 mid 값 각 랜선의 길이를 mid 로 나눈 값이 n 과 같지 않을때까지 탐색하고 반환.

function solution(nums, n) {
  let answer = 0;
  let left = 1,
    right = Math.max(...nums);

  // 랜선의 길이 계산할 함수
  function count(len) {
    let cnt = 0;
    nums.forEach((e) => {
      cnt += Math.floor(e / len); // 각 랜선을 mid 값으로 잘라줌
    });
    return cnt;
  }

  // count 는 mid 길이의 랜선 갯수
  while (left <= right) {
    let mid = parseInt((left + right) / 2);
    if (count(mid) >= n) {
      answer = mid;
      left = mid + 1;
    } else right = mid - 1;
  }

  return answer;
}
console.log(solution([802, 743, 457, 539], 11));
