// 절반 이상의 컴퓨터가 차가운 공기를 받기 위해 냉각기를 최소 몇 분 가동해야 하는지 반환

// left = 0 ~ right = borad 중 최대값, 전체 합을 구해야하기 때문에 sum 구하기
function solution(borad) {
  let answer = 0;
  let left = 1,
    right = 0,
    sum = 0;
  borad.forEach((el) => {
    right = Math.max(right, Math.max(...el)); // Math.max(...el) 각 배열에서 비교한 것에서 나온 최대 값과 다음 배열에서 나온 최대값을 계속해서 비교함
    sum += el.reduce((a, b) => a + b, 0); // 각 배열을 더해준 값을 sum 에 누적해서 전체 값의 합을 구함
  });
  console.log(right);

  // count function : mid 까지 냉방기를 튼 것의 컴퓨터들을 다 더해줘야 함
  function count(mid) {
    let cnt = 0;
    borad.forEach((e) => {
      for (x of e) {
        if (x >= mid)
          cnt += mid; // x = 9, mid = 5 면 mid 가 더 작으니 mid 까지 더하고
        else cnt += x; // 반대로 x = 3, mid = 5 면 x 가 더 작으니 x 까지만 더해줌
      }
    });
    return cnt;
  }

  // 이분 검색
  while (left <= right) {
    mid = parseInt(left + right / 2); // mid 분까지 냉방기를 튼다
    if (count(mid) >= sum / 2) {
      // 컴퓨터들을 반 나눠서 그것보다 크면 정답
      answer = mid;
      right = mid - 1; // 그러나 더 나은 값을 찾아줘야 하니 더 최소값을 찾기 위해 right 를 mid 보다 작게
    } else left = mid + 1; // 아니라면 더 큰 값을 찾아줘야 하니 정답을 찾기 위해 left 를 mid 보다 크게
  }
  return answer;
}

console.log(
  solution([
    [15, 3, 1, 5, 6],
    [3, 0, 7, 4, 3],
    [8, 5, 7, 5, 6],
    [9, 6, 1, 5, 5],
    [5, 5, 8, 5, 1],
  ])
);
