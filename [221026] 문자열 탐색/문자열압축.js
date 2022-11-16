function solution(s) {
  let answer = "";
  s = s + " ";
  cnt = 1;
  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] === s[i + 1]) {
      cnt += 1;
    } else {
      answer += s[i];
      if (cnt > 1) {
        answer += cnt.toString();
      }
      cnt = 1;
    }
  }
  return answer;
}
console.log(solution("KKHSSSSSSSE"));

/* 다시. 이해못했음 */
