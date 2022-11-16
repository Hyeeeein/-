// 현재 지점은 x, y 에서 dx(x방향) = [ , ]
// 2차원 배열은 index out of~ 걸림 인덱스 너머로 못가게 해줘야 함
function solution(board) {
  let answer = 0;
  let n = board.length;
  let dx = [-1, 0, 1, 0];
  let dy = [0, 1, 0, -1];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let flag = true; // 현 위치를 잡아주는 for 문에서 ture 로 초기화해줘야 함 안그럼 k for 문에서 false 가 나오면 그대로 계속 flag 는 false 가 되어버림

      for (let k = 0; k <= 3; k++) {
        let nx = i + dx[k];
        let ny = j + dy[k];

        // 배열 밖의 요소를 비교하면 에러나거나 값이 제대로 들어오지 않음
        if (
          nx >= 0 &&
          nx < n &&
          ny >= 0 &&
          ny < n &&
          board[i][j] <= board[nx][ny]
        ) {
          flag = false;
          break;
        }
      }
      if (flag) answer++; // k for 문을 통과해도 true 면 answer++
    }
  }
  return answer;
}

console.log(
  solution([
    [11, 15, 17, 23, 13, 5, 12],
    [25, 18, 11, 16, 21, 7, 22],
    [37, 13, 17, 22, 14, 11, 33],
    [35, 27, 38, 34, 31, 22, 12],
    [38, 22, 33, 21, 25, 33, 11],
    [11, 33, 12, 13, 26, 35, 12],
    [17, 22, 23, 11, 15, 13, 21],
  ])
);
