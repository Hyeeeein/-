// 스택 자료구조

// 문제 설명: 소괄호 사이에 존재하는 모든 문자 제거
// 문제 풀이법: ) 빼고 다 스택에 집어 넣고, ) 일 경우 ( 부터 알파벳 까지 빼기, 그렇게 반복하다가, 스택에 남아있는 것을 리턴

// 꼭! 다시 해보기
function solution(s) {
  let stack = [];
  for (x of s) {
    if (x == ")") {
      // x 가 ) 일 경우, 스택에서 데이터를 빼는데
      stack.pop();
      // console.log(stack.pop() != "(");
      while (stack.pop() != "(") {
        // 꺼낸 게 ( 가 아니면 계속 빼
      }
    } else stack.push(x);
  }
  return stack.join("");
}
console.log(solution("(Aab)(EsG)FFD"));
