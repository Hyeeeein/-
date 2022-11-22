/* 내가 한 것

function solution(s, c) {
  let answer = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i].includes(c)) {
      answer += 1;
    }
  }
  return answer;
}
console.log(solution("COMPUTERPROGRAMMING", "R")); 
*/

function solution(s, c) {
  let answer = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === c) answer++;
  }
  return answer;
}
console.log(solution("COMPUTERPROGRAMMING", "R"));

// s.includes(s[i]) -> 모두 한번씩 돌기 때문에 효율적으로 좋지 않음
// if (s[i] === c) answer++; -> 이렇게 생짜로 하는게 효율이 좋음

/* 리터럴로 해줘도 됨
for (let x of s) {
  if (x === c) answer++;
} 
*/
