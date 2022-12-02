// 수직선상의 점과 점사이를 잇는 선들의 총 길이를 반환
// 시작 좌표를 기준으로 오름차순 정렬, 한 선에서 s 는 첫 점이고 e 는 끝 점, 그 다음 선이 e 라는 값이 다음 선의 시작점보다 작은지 큰지 판별하고, 작다면 e 를 다음선의 끝점으로 변경, 그리고 반복해서 판별하여 크다면 끊어진 것을 의미하니 answer 에 e-s 를 누적해주고 마지막 선의 e-s를 answer 에 누적
// for 문은 두번째 선부터 돌고 만약 시작점이 e 값보다 작거나 같고 끝점이 e 보다 클 때 e 는 nums 는 nums[i][1]
// 여기서 선 안에 다른 선이 포함되어 있을 때는 없는 걸로 쳐야 함

function solution(nums) {
  let answer = 0;
  nums.sort((a, b) => a[0] - b[0]);
  let s = nums[0][0];
  let e = nums[0][1];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i][0] <= e && nums[i][1] > e) {
      e = nums[i][1];
    } else if (nums[i][0] > e) {
      answer += e - s;
      s = nums[i][0];
      e = nums[i][1];
    }
  }
  answer += e - s;

  return answer;
}
console.log(
  solution([
    [1, 3],
    [2, 5],
    [7, 10],
  ])
); // 7
console.log(
  solution([
    [5, 6],
    [1, 3],
    [7, 8],
    [9, 10],
  ])
); // 5
