// 바이토닉 수열 확인

// 다른 수강생 : 무조건 감소로 끝나면 yes 이기 때문에 중간에 감소했다가 증가해도 감소로 끝나면 yes 가 나옴
// function solution(num) {
//   let answer = "NO";
//   let flag = 0;

//   // 증가를 해야하기 때문에 전이 더 크면 no 를 바로 반환
//   if (num[0] > num[1]) return answer;

//   for (let i = 1; i < num.length; i++) {
//     if (num[i] > num[i - 1]) {
//       // 뒤에가 더 크면 flag 0
//       flag = 0;
//     } else if (num[i] < num[i - 1]) {
//       // 앞에가 더 크면 flag 1
//       flag = 1;
//     } else return answer; // 같은 값이 연속해 있으면 바로 NO
//   }
//   // answer
//   answer = flag === 1 ? "YES" : "NO";
//   return answer;
// }

// console.log(solution([1, 2, 3, 4, 5, 3, 1])); // YES ↗️↘️
// console.log(solution([1, 2, 5, 5, 6, 4, 3])); // NO →
// console.log(solution([1, 3, 8, 5, 3, 9])); // NO ↗️↘️↗️
// console.log(solution([1, 2, 3, 4, 5])); // NO ↗️
// console.log(solution([5, 4, 3, 2, 1])); // NO ↘️

// 강사님이 말한대로 구현
// 감소수열 만나는 순간 while 문 스탑, i 가 0 으로 있을때 즉 증가를 하지 않았을때 no(54321), i 가 input 의 길이 일때=끝까지 갔을 때(12345)
// 산 봉우리가 만났을 때 감수수열 while 문 스타트, i가 n-1 이 아닐때=끝까지 가지 못했을 때 no, 마지막까지 갔으면 yes
// for 문을 돌릴 필요없음 왜냐 i++ 을 해줬기 때문에 자연스럽게 for 문 처럼 증가하고 있음
// 끝에 index 가 없는데 비교하려고 하면 다른 언어에서는 에러가 남 그래서 i < end && 를 추가해주면 i 가 끝 번호 전까지만 비교하도록 가능

function solution(nums) {
  let i = 0;
  let end = nums.length - 1;

  while (nums[i] < nums[i + 1]) i++;
  if (i === 0 || i === end) return "YES";
  while (nums[i] > nums[i + 1]) i++;
  if (i !== end) return "NO";

  return "YES";
}
console.log(solution([1, 3, 4, 5, 5, 6, 4, 3]));
