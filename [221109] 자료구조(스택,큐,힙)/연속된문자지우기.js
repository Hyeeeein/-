// 스택 자료구조

// 연속된 문자를 제거하고 제거한 문자열을 다시 검색해 제거하는 것을 반복하여 남는 문자열을 출력
// 풀이: 현재 있는 값도 푸시되지 않음, 그리고 다음 것이 스택에 마지막 남은 것과 같다면 그 문자도 현재 값을 스택에 넣지 않고 마지막 남은 것도 삭제

function solution(s) {
  let stack = [];
  for (x of s) {
    // 스택이 비어있지 않고 를 추가
    if (stack.length !== 0 && x === stack[stack.length - 1]) {
      stack.pop();
    } else stack.push(x);
  }
  return stack.join("");
}
console.log(solution("acbbcaa")); // a
console.log(solution("bacccaba")); // bacaba
console.log(solution("bcaacccbaabccabbaa")); // ba
// 왜 됐지..?
