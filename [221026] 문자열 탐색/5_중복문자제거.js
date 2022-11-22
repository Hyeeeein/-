// 기출

function solution(s) {
  let answer = "";

  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) === i) answer += s[i];
  }
  return answer;
}
console.log(solution("ksekkset"));

/* 제한사항 추가 : 소문자로만 구성된다 */
