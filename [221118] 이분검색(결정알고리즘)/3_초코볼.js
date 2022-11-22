// k 의 최소 개수
// 답이 되더라도 계속 최소 k 를 계속 구해나가는 것이 관점
// k 는 모든 초코볼을 h 시간 안에 다 먹을 수 있는 최소 양, 따라서 k 는 1 ~ 29 개 가는 것은 확실함

function solution(nums, h) {
  let answer = 0;
  let left = 1,
    right = Math.max(...nums);

  function count(amg) {
    let cnt = 0;
    nums.forEach((e) => (cnt += Math.ceil(e / amg)));
    return cnt; // mid 갯수씩 먹으면 몇시간 안에 다 먹을 수 있을지 반환
  }
  while (left <= right) {
    let mid = parseInt((left + right) / 2);
    if (count(mid) <= h) {
      answer = mid;
      right = mid - 1; // 최소값을 찾아줘야 하니 탐색 범위를 작은 값 쪽으로 줄여주고
    } else left = mid + 1;
    // 그렇게 먹어서는 h 시간 안에 다 못먹으니까 한시간 안에 먹을 수 있는 초코볼 값을 큰 값 쪽으로 늘려줘야 함(=mid)
  }
  return answer;
}
console.log(solution([29, 12, 24, 5, 19], 6));
