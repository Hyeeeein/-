function solution(s) {
  let answer = -1;
  let map = new Map();

  for (x of s) {
    map.set(x, (map.get(x) || 0) + 1);

    if (map.get(x) >= 2) {
      return x;
    }
  }
  return answer;
}

console.log(solution("abccbaacz"));
console.log(solution("aabb"));
console.log(solution("abcdefg"));

// 강사님
function solution(s) {
  let map = {};
  let answer;
  for (x of s) {
    map[x] = (map[x] || 0) + 1;
    if (map[x] >= 2) return x;
  }
  return -1;
}

console.log(solution("abccbaacz"));
console.log(solution("aabb"));
console.log(solution("abcdefg"));
