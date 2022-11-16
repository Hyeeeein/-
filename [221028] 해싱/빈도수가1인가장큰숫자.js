/* function solution(nums) {
  let answer = -1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[i]) {
    }
  }
}
console.log(solution([1, 1, 2, 2, 3, 4, 5, 7, 7])); */

// 강사님 map 사용 ver
/* function solution(nums) {
  let map = new Map();
  for (let x of nums) {
    map.set(x, (map.get(x) || 0) + 1);
  }
  console.log(map);

  let maxN = 0;
  for (let [key, val] of map) {
    if (val === 1) {
      if (key > maxN) {
        maxN = key;
      }
    }
  }
  return maxN === 0 ? -1 : maxN;
}
console.log(solution([1, 1, 2, 2, 3, 4, 5, 7, 7])); */

// 강사님 배열 사용 ver
function solution(nums) {
  let ch = Array(1001).fill(0);
  for (let x of nums) {
    ch[x]++;
  }
  for (let i = 1000; i >= 0; i--) {
    if (ch[i] === 1) return i;
  }
  return -1;
}
console.log(solution([1, 1, 2, 2, 3, 4, 5, 7, 7]));

// 강사님 배열 사용 ver 2 -> 영상보고 다시 필기
function solution(nums) {
  let ch = Array(1001).fill(0);
  for (let x of nums) {
    ch[x]++;
  }
  for (let i = 1000; i >= 0; i--) {
    if (ch[i] === 1) return i;
  }
  return -1;
}
console.log(solution([1, 1, 2, 2, 3, 4, 5, 7, 7]));
