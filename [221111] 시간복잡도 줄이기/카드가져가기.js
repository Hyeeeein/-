// 그리디 알고리즘: 현재 단계에서 가장 좋은 것을 선택, 욕심법?
// 2번째 예제는 30을 가져갈 수 없음 그래서 그리디로 통하지 않음
// 카드를 가져간 나머지를 최대매출처럼 창을 옮겨서 그 중 최소값 반환

/* function solution(nums, k) {
  let answer = nums.reduce((acc, cur) => acc + cur, 0); // nums 의 총합
  let sum = 0;
  let len = nums.length - k; // 나머지 창
  for (let i = 0; i < len; i++) {
    // 창의 총합
    sum += nums[i];
  }
  let minS = sum;
  let left = 0;
  for (let right = len; right < nums.length; right++) {
    sum += nums[right] - nums[left];
    minS = Math.min(minS, sum);
    left++;
  }

  return answer - minS;
}

console.log(solution([2, 3, 7, 1, 2, 1, 5], 4)); // 17
console.log(solution([1, 30, 5, 6, 7], 3)); // 38 */

/* function solution(nums, k) {
  let answer = nums.reduce((a, b) => a + b, 0);
  let len = nums.length - k;
  let sum = 0;
  for (let i = 0; i < len; i++) {
    sum += nums[i];
  }
  let minS = sum;
  let left = 0;
  for (let right = len; right < nums.length; right++) {
    sum += nums[right] - nums[left];
    minS = Math.min(minS, sum);
    left++;
  }
  return answer - minS;
}
console.log(solution([2, 3, 7, 1, 2, 1, 5], 4)); // 17
console.log(solution([1, 30, 5, 6, 7], 3)); // 38 */

/* function solution(nums, k) {
  let answer = nums.reduce((a, b) => a + b, 0);
  let len = nums.length - k;
  let sum = 0;
  for (let i = 0; i < len; i++) {
    sum += nums[i];
  }
  let minS = sum;
  let left = 0;
  for (let right = len; right < nums.length; right++) {
    sum += nums[right] - nums[left];
    minS = Math.min(minS, sum);
    left++;
  }
  return answer - minS;
}
console.log(solution([2, 3, 7, 1, 2, 1, 5], 4)); // 17
console.log(solution([1, 30, 5, 6, 7], 3)); // 38 */

function solution(nums, k) {
  let sum = 0;
  let len = nums.length - k;
  let answer = nums.reduce((a, b) => a + b, 0);
  for (let i = 0; i < len; i++) {
    sum += nums[i];
  }
  let left = 0;
  let minS = sum;
  for (let right = len; right < nums.length; right++) {
    sum += nums[right] - nums[left];
    minS = Math.min(minS, sum);
    left++;
  }
  return answer - minS;
}

console.log(solution([2, 3, 7, 1, 2, 1, 5], 4)); // 17
console.log(solution([1, 30, 5, 6, 7], 3)); // 38
