// 기출
function solution(s) {
  let answer = "";

  for (let i = 0; i < s[0].length; i++) {
    let sett = new Set();
    for (let x of s) {
      sett.add(x[i]);
    }
    if (sett.size === 1) {
      answer += s[0][i];
    } else {
      break;
    }
  }
  return answer;
}
console.log(solution(["long", "longtime", "longest"]));

// 다시 풀어볼 것 이해 못함
