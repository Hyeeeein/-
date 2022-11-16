// 정렬 알고리즘 이론 배우는 것
// 선택정렬 방법으로 오름차순으로 정렬하기
// 선택정렬 : 작은 수를 맨 처음에 순차적으로 넣는 방식

// 강사님 : for 문을 돌려서 i~n-1 까지 돌려서 minIndex 값을 i 로 정해주기, for 문을 또 돌려서 j 는 i+1 부터 n까지, 만약 nums 의 minIndex 가 nums 의 j 보다 크면 minIndex 는 작은 j 을 가르킴, 그럼 이 j for 문이 끝나면 minIndex 에 가장 작은 값이 도출, 그리고 만약 i 와 minIndex 와 같지 않으면 즉, 가장 작은 값이 맨 앞으로 가지 않으면 nums[i] 와 nums[minIndex] 위치를 변경

function solution(nums) {
  let n = nums.length;
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (nums[j] < nums[minIndex]) minIndex = j;
    }
    if (i !== minIndex) {
      [nums[i], nums[minIndex]] = [nums[minIndex], nums[i]];
    }
  }
  return nums;
}

console.log(solution([2, 8, 3, 6, 1, 7, 5, 9])); // [1, 2, 3, 5, 6, 7, 8, 9]
console.log(solution([7, 6, 10, 9, 8])); // [6, 7, 8, 9, 10]
