// 기출

// 0 을 k 번 1 로 바꿔 연속된 최대길이부분수열의 길이를 반환하기
// 내 풀이: 이거 이전에 비슷한 문제가 있지 않았나..? 0 이 있는 곳의 인덱스를 배열로 넣고 for 문을 돌아 경우의 수로 0 배열에 따른 m 의 경우의 수만큼 변경해서 넣은 후 1 의 연속된 최대길이를 반환하면 될..듯?

// 강사님 : 1 이 정상 도로이고 0 이 망가진 도로로 해석하면 공사비용과 동일, 0 의 갯수를 세기 위해 cnt = 0 초기화, rt 를 옮기면서 0 이 나오면 cnt 카운트, while 문으로 cnt 가 m 보다 클 때 lt 가 1 일때는 변화없이 땡기다가 0이면 cnt 를 하나 빼줌, while 문을 빠져나올 때는 cnt 가 m 보다 같을 때임, 그러면 그 길이 중 긴 것을 반환

function solution(cost, m) {
  let answer = 0;
  let left = 0;
  let cnt = 0;
  for (let right = 0; right < cost.length; right++) {
    if (cost[right] === 0) {
      cnt++;
    }
    while (cnt > m) {
      if (cost[left] === 0) cnt--;
      left++;
    }
    answer = Math.max(right - left + 1, answer);
  }
  return answer;
}

console.log(solution([1, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1], 2)); // 8
console.log(solution([1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1], 3)); // 12
console.log(solution([0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 1], 5)); // 8
