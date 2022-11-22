// 너무너무 어렵다 다시다시!!!
// 강사님 : i=1, j=i-1, j for 문은 i 의 삽입 위치를 탐색하기 위해 있는 것, tmp 를 넣는 이유는 복사해서 없어졌기 때문에 i 에 있던 것을 임시 지정한 것

function solution(nums) {
  let n = nums.length;
  for (let i = 1; i < n; i++) {
    let tmp = nums[i];
    let j;
    for (j = i - 1; j >= 0; j--) {
      if (nums[j] > tmp) nums[j + 1] = nums[j];
      else break;
    }
    nums[j + 1] = tmp;
  }
  return nums;
}

console.log(solution([2, 8, 3, 6, 1, 7, 5, 9])); // [1, 2, 3, 5, 6, 7, 8, 9]
console.log(solution([7, 6, 10, 9, 8])); // [6, 7, 8, 9, 10]
