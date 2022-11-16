// 기출
function solution(s) {
  let maxC = 0;
  let answer = [];
  let map = new Map();
  for (let x of s) {
    map.set(x, (map.get(x) || 0) + 1);
  }
  console.log(map);
  for (let x of "abc") {
    if (val > maxC) {
      maxC = val;
    }

    answer.push(maxC - val);
  }
  return answer;
}
console.log(solution("aaabb"));

// 다른 수강생 + 강사님
/* function solution(s) {
  let answer = [];
  let map = new Map();
  for (let i of s) {
    map.set(i, (map.get(i) || 0) + 1);
  }
  let max = Math.max(...map.values());
  for (let x of "abc") {
    answer.push(max - (map.get(x) === undefined ? 0 : map.get(x)));
  }
  return answer;
}
console.log(solution("aabb")); */
