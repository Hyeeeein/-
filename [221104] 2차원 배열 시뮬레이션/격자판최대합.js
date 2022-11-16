// 각 행의 합, 각 열의 합, 두 대각선의 합 중 최대합
// reduce 메서드 사용해서

function solution(board) {
  let n = board.length;
  let answer = 0;
  for (let i = 0; i < n; i++) {
    let sum1 = 0;
    let sum2 = 0;
    for (let j = 0; j < n; j++) {
      sum1 += board[i][j];
      sum2 += board[j][i];
    }
    answer = Math.max(answer, sum1, sum2); // 이해 안됨ㅠㅠ
  }

  sum1 = 0;
  sum2 = 0;
  for (let i = 0; i < n; i++) {
    sum1 += board[i][i];
    sum2 += board[i][n - i - 1];
  }
  answer = Math.max(answer, sum1, sum2);
  return answer;
}

console.log(
  solution([
    [10, 13, 10, 12, 15],
    [12, 39, 30, 23, 11],
    [11, 25, 50, 53, 15],
    [19, 27, 29, 37, 27],
    [19, 13, 30, 13, 19],
  ])
);

// 강사님
/* function solution(nums) {
  let answer = 0;
  for (let i = 0; i < nums.length; i++) {
    let sum1 = (sum2 = 0); // 초기화?
    for (let j = 0; j < 5; j++) {
      sum1 += nums[i][j];
      sum2 += nums[j][i];
    }
    answer = Math.max(answer, sum1, sum2);
  }

  sum1 = sum2 = 0;
  for (let i = 0; i < nums.length; i++) {
    sum1 += nums[i][i];
    sum2 += nums[i][nums.length - i - 1];
  }
  answer = Math.max(answer, sum1, sum2);
  return answer;
}

console.log(
  solution([
    [17, 19, 12, 11, 15],
    [17, 36, 30, 83, 11],
    [19, 30, 70, 53, 75],
    [17, 22, 67, 47, 37],
    [15, 37, 78, 93, 59],
  ])
); */

// 봐도 이해가 안됨 강사님 설명 들어야 할 듯
