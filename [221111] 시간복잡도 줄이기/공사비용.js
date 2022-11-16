// 한정된 예산(m) 으로 고칠 수 있는 연속 구간(cost) 의 길이 구하기

// 내 풀이: 부분수열에서 사용한 투 포인터스를 이용해 창의 길이를 늘리고 줄여서 각 데이터를 합한 것이 m 에 가까울 때의 창의 길이를 반환해야될 것 같음

// 강사님 : sum+=right, sum 이 m 보다 크면 while~, answer 에 길이 넣고 계속 하다가 가장 긴 길이를 비교해서 answer 에 넣기

function solution(cost, m) {
  let left = 0;
  let sum = 0;
  let answer = 0;
  let maxL = 0;
  for (let right = 0; right < cost.length; right++) {
    sum += cost[right];
    while (sum > m) {
      sum -= cost[left];
      left++;
    }
    maxL = right - left + 1;
    answer = Math.max(answer, maxL); // left~right 의 길이?
  }
  return answer;
}

console.log(solution([0, 150, 100, 0, 150, 0, 70, 140], 350)); // 5
console.log(solution([100, 200, 300, 400, 500, 100], 300)); // 2
console.log(solution([100, 50, 120, 50, 150, 0, 50, 60], 400)); // 5

function solution(cost, m) {
  let left = 0;
  let sum = 0;
  let answer = 0;
  for (let right = 0; right < cost.length; right++) {
    sum += cost[right];
    while (sum > m) {
      sum -= cost[left];
      left++;
    }
    answer = Math.max(right - left + 1, answer);
  }
  return answer;
}
console.log(solution([0, 150, 100, 0, 150, 0, 70, 140], 350)); // 5
console.log(solution([100, 200, 300, 400, 500, 100], 300)); // 2
console.log(solution([100, 50, 120, 50, 150, 0, 50, 60], 400)); // 5
