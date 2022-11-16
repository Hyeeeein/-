// k 초 후의 로봇의 위치 : 막히면 회전하고 이동하거나 회전할 때 + 1초
function solution(board, k) {
  let n = board.length;
  let answer = [];
  let dx = [-1, 0, 1, 0];
  let dy = [0, 1, 0, -1];
  let x = 0,
    y = 0,
    d = 1, // 처음은 무조건 오른쪽부터니까 1초 초기 설정
    nx,
    ny;
  let count = 0;

  while (count < k) {
    // 같다 x, while 문에 들어가고 1초가 추가되니까 같다고 하면 10초에서도 실행되어 총 11초가 됨
    count++;
    nx = x + dx[d];
    ny = y + dy[d];

    if (nx < 0 || nx >= n || ny < 0 || ny >= n || board[nx][ny] === 1) {
      // 이동한 값이 지도 바깥이거나 장애물(1)이 있을 때
      d = (d + 1) % 4; // 방향에 1을 추가해주어 방향을 바꿔주고 방향이 마지막 방향(3)일 때는 다시 처음 방향으로 가도록 % 4 해줘서 0 으로 돌아가도록 설정
      continue; // 반복문 처음으로 돌아가기
    }
    x = nx;
    y = ny;
    // 이동한 값을 현재자리로 설정
  }
  answer.push(x);
  answer.push(y);
  return answer;
}
console.log(
  solution(
    [
      [0, 0, 0, 0, 0],
      [0, 1, 1, 0, 0],
      [0, 0, 0, 0, 0],
      [1, 0, 1, 0, 1],
      [0, 0, 0, 0, 0],
    ],
    10
  )
);

// 내가 혼자 다시 쳐보기
