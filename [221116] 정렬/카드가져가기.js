// 우선권 k 개를 써서 최대 점수를 반환
// 내림차순으로 설정하고, 현수가 우선권이 없다고 생각하면 현수가 가져가는 점수는 홀수 인덱스마다 가져가게 됨, diff 변수를 만들어 배열에 각 라운드마다의 차이를 저장, 그리고 diff 를 내림차순으로 정렬, 그래서 k 만큼의 length 를 더해줌, 그 이유는 점수차가 클 때 우선권을 사용해야 최대 점수를 얻을 수 있으므로.

function solution(nums, k) {
  let n = nums.sort((a, b) => b - a);
  let answer = 0;
  let diff = [];
  for (let i = 1; i < n.length; i += 2) {
    answer += n[i];
  }
  for (let i = 1; i < n.length; i += 2) {
    diff.push(n[i - 1] - n[i]);
    diff = diff.sort((a, b) => b - a);
  }
  for (let i = 0; i < k; i++) {
    answer += diff[i];
  }
  return answer;
}
console.log(solution([7, 8, 5, 9, 3, 1, 3, 1, 1, 9], 2)); // 25
console.log(solution([8, 2, 12, 12, 12, 12, 2, 2], 2)); // 34
