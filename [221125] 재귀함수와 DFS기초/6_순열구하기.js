// 10 이하의 n 개 자연수 nums 가 주어지면 m 개 를 뽑아 일렬로 나열(중복x)

function solution(n, m) {
  let answer = [];
  let tmp = [];
  let ch = Array(n + 1).fill(0);
  function dfs(L) {
    if (L === m) {
      answer.push(tmp.slice());
    } else {
      for (let i = 1; i <= n; i++) {
        if (ch[i] === 0) {
          ch[i] = 1;
          tmp.push(i);
          dfs(L + 1);
          ch[i] = 0;
          tmp.pop();
        } // 중복이 되면 안되니까 0으로 채워있는 배열을 만들어놓고 0 이 아니면 지나가고 0 이 아니면 비어 있지 않은거니까
      }
    }
  }
  dfs(0);
  return answer;
}

console.log(solution(3, 2)); // [[1, 2], [1, 3], [2, 1], [2, 3], [3, 1], [3, 2]]

// 프로그래머스 자격증 피시시피? 순열 문제가 엄청 많음 그래서 외우기
// 순열 구하기, 중복순열 둘다 [3, 2], [4, 3] 해보기

// 이중 for 문
function solution(n, m) {
  let answer = [];
  let tmp = [];
}

console.log(solution(3, 2));
