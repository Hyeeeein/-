function solution(s) {
  let cnt = {};
  let odd = 0;
  let answer;
  for (let x of s) {
    cnt[x] = (cnt[x] || 0) + 1;
  }
  let keys = Object.keys(cnt);
  for (let x of keys) {
    if (cnt[x] % 2 == 1) {
      odd++;
    }
  }
  return odd <= 1 ? (answer = s.length) : (answer = s.length - odd + 1);
}
console.log(solution("abcbbbccaa"));

// 홀수인 문자열을 카운트한 odd 가 1 이하일 때 참이면 s 의 길이만큼, 거짓이면 s 의 길이에서 odd 를 빼고 1 을 더해줌
// 여기서 s.length - odd + 1 의 이유는 팰린드롬은 홀수인 문자열이 0 이거나 1 이면 되는거니까 만약 홀수인 문자열이 4개(odd)면 [각 문자열의 갯수를 하나씩 잘라서 모두 짝수가 되도록 만들어주고] = [s.length-odd] 홀수인 문자열이 하나까지 있어도 팰린드롬이 되니까 거기에 -1 을 해주면 팰린드롬의 최대길이가 됨.
