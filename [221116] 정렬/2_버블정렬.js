// 선택 정렬과 반대로 큰 것을 맨뒤에 순차적으로 넣는 방식
// 강사님 : i 과 j 는 0 부터 돌고 i 는 nums 의 길이 그 이전까지, j 는 nums 의 길이에 i 와 1 를 빼준 값(j 는 자리 잡은 값까지는 돌지 않음), j for 문 안에 만약 j 가 j+1 보다 크면 큰 값이 앞에 있다는 소리니까 둘의 위치를 변경, 그럼 j for 문이 다 돌고 난 후에는 계속 교환되기 때문에 큰 값이 가장 마지막으로 배치됨. i 가 n-1 까지만 도는 이유는 for 문 마지막에는 결국 가장 작은 값이 맨 앞에 배치될테니까

function solution(nums) {
  let n = nums.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (nums[j] > nums[j + 1]) {
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
      }
    }
  }
  return nums;
}
console.log(solution([2, 8, 3, 6, 1, 7, 5, 9])); // [1, 2, 3, 5, 6, 7, 8, 9]
console.log(solution([7, 6, 10, 9, 8])); // [6, 7, 8, 9, 10]
