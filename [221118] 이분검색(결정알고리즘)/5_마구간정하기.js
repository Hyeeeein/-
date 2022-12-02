// 최대 좌표까지에다가 c 개의 말을 배치해서 가장 가까운 두 말의 최대 거리를 반환
// 현재 정렬이 되어있지 않으니 정렬을 먼저 시켜줌, right 는 배열 중 가장 큰 값, left 는 가장 작은 값으로 해놓으면 최대거리를 반환할 수 없으니 1 로 설정, 반으로 나눠서 mid 값 두 말의 !!!다시!!!

function solution(nums, c) {
  let answer = 0;
  nums.sort((a, b) => a - b);
  let left = 1,
    right = Math.max(...nums);

  function count(mid) {
    let cnt = 1; // 제일 왼쪽에 말 하나 배치
    let endPoint = nums[0]; // 최근에 넣은 말의 좌표
    for (let i = 1; i < nums.length; i++) {
      //
      if (nums[i] - endPoint >= mid) {
        cnt++;
        endPoint = nums[i];
      }
    }
    return cnt;
  }

  while (left <= right) {
    let mid = parseInt((right + left) / 2);
    if (count(mid) >= c) {
      answer = mid;
      left = mid + 1;
    } else right = mid - 1;
  }

  return answer;
}

console.log(solution([1, 2, 8, 4, 9], 3)); // 3
console.log(solution([5, 9, 10, 12, 14, 15], 3)); // 5
