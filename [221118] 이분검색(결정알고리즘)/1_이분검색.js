// 설명
// 선형탐색을 해서 찾으면 간단하지만 n 바퀴를 돌아야 하기 때문에 시간복잡도가 좋지 않음
// 이분 검색: 검색할 자료양을 줄여줌
// 이분 검색 방법 : 정렬된 자료는 선형 탐색할 필요없이 이진 탐색하면 됨.배열의 양 끝에 left, right 로 정하고 m 변수에(left + right) / 2 를 해줌, 그러면 중앙 지점(mid)이 나오게 되는데 그 값이 찾으려는 값(target)인지 확인하는 것, mid 가 target 보다 작다면 오른쪽을 탐색하고 크다면 왼쪽을 탐색함 그러면 탐색할 양이 반으로 줄어버림, 그리고 왼쪽 값을 탐색한다면 right 값을 mid - 1 로 설정하고 while 문으로 left 와 right 만날때까지 target 값이 같은지 탐색, mid 와 m 이 같다면

function solution2(nums, m) {
  nums.sort((a, b) => a - b); // 오름차순 정렬
  let left = 0,
    right = nums.length - 1;

  // left 와 right 는 양 끝을 의미하고 mid 가 m 과 같을 때까지 찾기 때문에 <= 로 해주는 것
  while (left <= right) {
    let mid = parseInt((left + right) / 2);
    if (nums[mid] === m) return mid + 1;
    else if (nums[mid] > m) right = mid - 1;
    else left = mid + 1;
  }
  return;
}
console.log(solution2([23, 87, 65, 12, 57, 32, 99, 81], 32)); //3
