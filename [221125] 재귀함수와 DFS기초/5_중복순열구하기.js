// n 과 m 이 주어지면 1 부터 n 까지 번호가 적힌 구슬을 중복을 허락하여 m 번을 뽑아 일렬로 나열하여 반환

// 중복이 가능하기 때문에 3개의 숫자가 각 2개에 3, 3 이 들어갈 수 있기 때문에 경우의 수는 9

// 무슨 말인지 1도 모르겠다 다시 보자...

function solution(n, m) {
  let answer = [];
  let tmp = [];
  function dfs(L) {
    if (L === m) {
      answer.push(tmp.slice());
    } else {
      for (let i = 1; i <= n; i++) {
        tmp.push(i);
        dfs(L + 1);
        tmp.pop();
      }
    }
  }
  dfs(0);
  return answer;
}

console.log(solution(3, 2));
