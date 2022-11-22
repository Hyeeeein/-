// 문자열로 전환한 뒤 정렬하기 때문에 숫자의 앞자리만 인식해서 .sort() 만 해주면 10, 2, 1 을 sort 하면 1, 10, 2 를 반환한다
// 따라서 .sort((a, b) => a + b) 를 해줘야 한다
// 내림차순 정렬은 .sort((a, b) => b-a)

// sort 는 시간복잡도가 n logn? 자료가 1000 이면 1000*10 으로 10000 이 되는 것

// 좌표 정렬 :
// x 값에 의한 오름차순 정렬
function solution(nums) {
  nums.sort((a, b) => a[0] - b[0]);
  return nums;
}
console.log(
  solution([
    [2, 3],
    [1, 4],
    [3, 1],
    [1, 2],
  ])
);
// [ [ 1, 4 ], [ 1, 2 ], [ 2, 3 ], [ 3, 1 ] ]

// y 값에 의한 오름차순 정렬
function solution(nums) {
  nums.sort((a, b) => a[1] - b[1]);
  return nums;
}
console.log(
  solution([
    [2, 3],
    [1, 4],
    [3, 1],
    [1, 2],
  ])
);
// [ [ 3, 1 ], [ 1, 2 ], [ 2, 3 ], [ 1, 4 ] ]

// x 값 오름차순을 하되, x 값이 같다면 y 오름차순
function solution(nums) {
  nums.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1];
    } else {
      return a[0] - b[0];
    }
  });
  return nums;
}
console.log(
  solution([
    [2, 3],
    [1, 4],
    [3, 1],
    [1, 2],
  ])
);
// [ [ 1, 2 ], [ 1, 4 ], [ 2, 3 ], [ 3, 1 ] ]
