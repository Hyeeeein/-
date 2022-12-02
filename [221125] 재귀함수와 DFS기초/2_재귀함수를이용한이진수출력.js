// 재귀함수를 이용해 10진수 n 이 입력되면 2진수로 변환하여 반환

function solution(n) {
  let answer = 0,
    tmp = [];
  function dfs(n) {
    if (n === 0) return;
    else {
      dfs(parseInt(n / 2));
      tmp.push(n % 2); // 11 % 2 가 먼저x, 1 % 2 가 먼저여야 함, 순서대로 들어가면 안되니까 dfs 호출한 뒤로
    }
  }
  dfs(n);
  answer = tmp.reverse();
  return answer.join("");
}

console.log(solution(11));
