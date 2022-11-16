//
// 연속 부분수열의 합이 n 일 때의 가지수를 구하기
// 연속된 자연수를 가지고 있는 nums 라는 배열을 만들어야함, sum 이 n 보다 클때 while, 만약 n 과 sum 과 같다면 cnt 증감

function solution(n) {
  let m = n - 1;
  let nums = new Array(m).fill(1); // n 을 넣어주면 n 의 값을 포함하기 때문에 반으로 나누고 하나 더해줌
  for (let i = 0; i < m; i++) nums[i] = i + 1;
  let answer = 0;
  let left = 0;
  let sum = 0;
  for (let right = 0; right < nums.length; right++) {
    sum += nums[right];
    while (sum > n) {
      sum -= nums[left];
      left++;
    }
    if (sum === n) answer++;
  }
  return answer;
}

console.log(solution(15)); // 3
console.log(solution(45678)); // 7
console.log(solution(98765)); // 3
