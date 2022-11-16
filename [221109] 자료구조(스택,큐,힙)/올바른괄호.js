// 스택 자료구조

/* 스택
스택은 자스에 없어서 배열로 처리.
자바스크립트에서는 배열로 스택 사용
괄호 문제 나오면 거의 스택으로 풀면 됨
*/

/* 자스에서 스택 사용법
function solution(){
stack=[] // 빈배열 생성
stack.push(1); // 데이터 집어넣기
stack.push(2);
stack.push(3);
console.log(stack.pop()); // 가장 마지막에 넣은 데이터 제거
console.log(stack[stack.length-1]) // 스택의 가장 위에 있는 항목 확인=peak()
console.log(stack.length==0) // 스택이 비어 있는지 확인=empty()
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.length==0)
return stack;
}
console.log(solution());
*/

/* 문제 설명
괄호의 쌍이 올바르게 위치하는지 
 - ')(' 의 경우 ')' 먼저 나왔을 때 스택이 비어있으면 no
 - '(' 만나면 스택에 넣고 ')' 만나면 스택에서 pop, 스택에 남아있는게 0 이 아니면 no, 0 이면 yes
*/

function solution(s) {
  let answer = "YES";
  let stack = [];
  for (x of s) {
    if (x == ")") {
      // x 가 ) 일 경우
      if (stack.length === 0) return "NO"; // 뺄 것이 없으면 바로 no
      stack.pop(); // 뺄 것이 있으면 빼
    } else stack.push(x); // x 가 ( 일 경우 스택에 추가
  }
  if (stack.length > 0) return "NO"; // 스택이 비어있지 않으면 no

  return answer;
}
console.log(solution("(()(()"));
