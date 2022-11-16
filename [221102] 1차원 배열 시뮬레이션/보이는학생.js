/* 
1. 입력된 자료형이 10만이 넘어서면 이중 for문은 에러남
2. --처음은 무조건 보이니까 1번 인덱스부터 판별 j가 i 보다 크거나 같으면 보이고 작으면 안보임
3. 중간에 
*/

// 이중 for문 ver
function solution(nums) {
  let answer = 1;
  for (let i = 1; i < nums.length; i++) {
    let flag = true;
    for (let j = 0; j < i; j++) {
      if (nums[j] >= nums[i]) {
        flag = false;
      }
    }
    if (flag === true) answer++;
  }
  return answer;
}
console.log(
  `이중 for 문 : ` + solution([130, 135, 148, 140, 145, 150, 150, 153])
);

/* 해석
j for 문 안에 nums[j] 를 찍어보면 i 에 해당하는 데이터 이전의 데이터가 모두 나옴 예를 들어 i 가 140 이면 130, 135, 148 이 나옴. i 앞을 전부 비교해줘야 하기 때문에
따라서 if 문으로 j 가 i 보다 크면 false, 그리고 flag 가 true 면 현재 해당하는 i 가 앞의 j 보다 제일 크다는 의미이기 때문에 answer 를 하나 더해줌
*/

// for 문 하나 ver
function solution2(nums) {
  let answer = 1;
  let max = nums[0];

  // 최대값 알고리즘
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > max) {
      max = nums[i];
      answer++;
    }
  }
  return answer;
}
console.log(
  `for 문 하나 : ` + solution2([130, 135, 148, 140, 145, 150, 150, 153])
);

/* 
현재 가장 앞에 있는 값이 가장 작기 때문에 max 값의 기본으로 가장 앞의 값으로 설정.
for 문을 돌려
*/
