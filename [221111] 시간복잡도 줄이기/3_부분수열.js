// 투 포인터스 알고리즘 : 같은 지점의 포인트(ri,le)를 두개 쓴다고 해서 투 포인터스

// 내 풀이 : 창의 길이를 nums 의 길이만큼 for 문으로 매번 변경해서 합이 m 만큼 되는 경우를 카운트하기

// 강사님 : lt 와 rt 가 0인 상황에서, for문으로 right 만 증가하고 sum 에 rt 값을 계속 더해줌, while 문으로 sum 이 m 보다 크면 sum 에 lt 만큼 빼고 lt 인덱스를 증감하여 lt 의 포인트를 하나씩 당겨오게 만듦, while 문을 거치고 내려온 sum 값은 m 보다 작거나 같은 상황 그래서 sum 과 m 이 같으면 answer 를 ++

// 시간복잡도: 5n승? 5의 n?

function solution(nums, m) {
  // 창의 길이를 계속 변경해주기, 이중 for 문..?
  let sum = 0;
  let left = 0;
  let answer = 0;
  for (let right = 0; right < nums.length; right++) {
    sum += nums[right];
    while (sum > m) {
      sum -= nums[left];
      left++;
    }
    if (sum === m) answer++;
  }
  return answer;
}

console.log(solution([1, 1, 2, 1, 3, 1, 1, 1, 2], 6)); // 3
console.log(solution([1, 1, 1, 1, 1, 1, 3], 3)); // 5
console.log(solution([1, 2, 1, 2, 1, 2, 1], 3)); // 6
