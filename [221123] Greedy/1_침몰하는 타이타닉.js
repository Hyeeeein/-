// sort~~ 어쩌구 하는게 그리디
// 오름차순으로 정렬하고 left 를 가장 작은것으로, right 를 가장 큰 것으로 지정.
// 못 풀었음ㅠㅠ.. 녹화 보기!!!

function solution(nums, m) {
  let answer = 0;
  nums.sort((a, b) => a - b);
  let left = 0,
    right = nums[nums.length - 1];

  while (left < right) {
    if (right + left < m) {
      nums[left];
    } else {
      answer++;
      right--;
    }
  }

  return answer;
}

console.log(solution([90, 50, 70, 100, 60], 140)); // 3
console.log(solution([86, 95, 107, 67, 38, 49, 116, 22, 78, 53], 150)); // 5
console.log(
  solution(
    [
      68, 72, 30, 105, 55, 115, 36, 67, 119, 111, 95, 24, 25, 80, 55, 85, 75,
      83, 21, 81,
    ],
    120
  )
); // 14
