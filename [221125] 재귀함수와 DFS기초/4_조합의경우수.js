// n 과 r 이 주어지면 재귀를 이용해 조합수를 반환, nCr = n-1 C r-1 + n-1 C r

// 5C3 = 4C2 + 4C3 : 5C3 은 1 2 3 4 5 학생이 있으면 5명 중에 3명을 뽑는 것, 5번 학생 입장에서 두가지 경우로 분류할 수 있음 무조건 5번 학생이 참여하는 경우와 5가 없는 경우가 있음, 이때 4C2 의 뜻은 5 가 있는 경우이고 4C3 은 5 가 없는 경우임
// n === r 이거나 r === 0 이면 return 1

function solution(n, r) {
  let answer = 0;

  function dfs(n, r) {
    if (n === r || r === 0)
      return 1; // 5명 중에 5명 뽑거나 5명중에 0 명 뽑으면 경우의 수는 1
    else return dfs(n - 1, r - 1) + dfs(n - 1, r); // 공식대로
  }
  answer = dfs(n, r);
  return answer;
}
console.log(solution(5, 3)); // 10
// console.log(solution(33, 19)); // 엄청 늦음

// 메모이제이션 : dfs(n - 1, r - 1) + dfs(n - 1, r) 이 공식에서 이미 나온 경우를 기억해서 나오면 해당값을 사용

function solution(n, r) {
  let answer = 0;
  let dy = Array.from(Array(35), () => Array(35).fill(0));

  function dfs(n, r) {
    if (dy[n][r] > 0) return dy[n][r];
    if (n === r || r === 0)
      return 1; // 5명 중에 5명 뽑거나 5명중에 0 명 뽑으면 경우의 수는 1
    else return (dy[n][r] = dfs(n - 1, r - 1) + dfs(n - 1, r)); // 공식대로
  }
  answer = dfs(n, r);
  return answer;
}

console.log(solution(33, 19)); // 818809200
