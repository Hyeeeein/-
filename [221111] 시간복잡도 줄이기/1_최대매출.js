// 이중 for 문 으로 하면 쉽게 됨
// 하지만 nums의 길이는 300,000 으로 이중 for 문 하면 너무 많아짐
// 처음 k 일 동안의 매출합을 초기화해놓기
// 처음에 k 길이만큼 합을 구하는 것을 창으로 쭈욱 밀어서 풀기(슬라이딩 윈도우)
// 0 부터 k, sum 에 오른쪽 값에서 왼쪽 값 뺀 것만큼만 더해주기

function solution(nums, k) {
  let sum = (answer = 0);
  for (let i = 0; i < k; i++) {
    sum += nums[i];
    answer += nums[i];
  }

  let left = 0;
  for (let right = k; right < nums.length; right++) {
    sum += nums[right] - nums[left];
    answer = Math.max(answer, sum);
    left++;
  }

  return answer;
}
console.log(solution([12, 34, 56, 72, 93, 121, 33, 11, 23, 52], 4));
