function solution(s) {
  let answer;
  let sH = new Map();
  for (let x of s) {
    sH.set(x, (sH.get(x) || 0) + 1);
  }
  let max = Number.MIN_SAFE_INTEGER; // 지원하는 값 중에 가장 작은 값
  for (let i of s) {
    if (sH.get(s[i]) === 1) {
      return Number(i) + 1;
    }
  }
  return answer;
}
console.log(solution("statitsics"));

// 다른 수강생
function solution(s) {
  let answer = -1;
  let map = new Map();
  for (let x of s) {
    map.set(x, (map.get(x) || 0) + 1);
  }
  for (let i in s) {
    if (map.get(s[i]) === 1) {
      return Number(i) + 1;
    }
  }
  return answer;
}
console.log(solution("aabb"));
