// 스카이라인의 변화없이 건물을 올릴 수 있는 높이의 합

function solution(board) {
  // 스카이라인
  let row = [];
  let col = [];
  for (let i = 0; i < board.length; i++) {
    rowMax = colMax = 0;
    for (let j = 0; j < board.length; j++) {
      if (rowMax < board[i][j]) {
        rowMax = board[i][j];
      }
      if (colMax < board[j][i]) {
        colMax = board[j][i];
      }
    }
    row.push(rowMax);
    col.push(colMax);
  }

  // 높이 합
  let answer = 0;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      min = Math.min(row[i], col[j]);
      answer += min - board[i][j];
    }
  }
  return answer;
}
console.log(
  solution([
    [3, 7, 6, 2],
    [5, 3, 8, 7],
    [3, 2, 5, 7],
    [7, 7, 5, 3],
  ])
);

/* 최대 높이 - 원래 높이 = 증가값
7 7 7 7
7 8 9 8
5 5 5 5
7 8 8 8

-

2 5 7 3	 7
6 8 9 7	 9	
3 2 4 5  5
7 2 5 8	 8

7 8 9 8


5 2 0 4
1 0 0 1
2 3 1 0
0 6 3 0
*/

// 강사님
/* function solution(board) {
  let answer = 0;
  let n = board.length;
  let row = Array(n).fill(0);
  let col = Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      row[i] = Math.max(row[i], board[i][j]);
      col[i] = Math.max(col[i], board[j][i]);
    }
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      answer += Math.min(row[i], col[j]) - board[i][j];
    }
  }
  return answer;
}

console.log(
  solution([
    [2, 5, 7, 3],
    [6, 8, 9, 7],
    [3, 2, 4, 5],
    [7, 2, 5, 8],
  ])
); */
