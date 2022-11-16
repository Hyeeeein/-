function solution(s) {
  let answer = "";
  for (x of s) {
    if (x === x.toUpperCase()) answer += x.toLowerCase();
    else if (x === x.toLowerCase()) answer += x.toUpperCase();
  }
  return answer;
}
console.log(solution("StuDY"));
