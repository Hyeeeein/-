function solution(nums) {
  let answer = Number.MAX_SAFE_INTEGER;
  let nH = new Map();
  for (let x of nums) {
    nH.set(x, (nH.get(x) || 0) + 1);
  }
  for (let [key, val] of nH) {
    if (key === val) {
      if (key < answer) answer = key;
    }
  }
  return answer === Number.MAX_SAFE_INTEGER ? -1 : answer;
}
console.log(solution([1, 2, 3, 1, 3, 3, 2, 4]));
