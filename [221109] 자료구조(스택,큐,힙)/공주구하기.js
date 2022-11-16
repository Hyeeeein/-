// 큐 자료구조
// 큐 단독으로 해서 풀 수 있는 문제는 없음

/* 큐
처음 추가한 항목이 가장 먼저 제거
push(), shift() 사용
*/

/* 자바스크립트에서 큐 사용법
function solution(){
queue=[] // 빈 배열 생성
queue.push(1); // 데이터 추가
queue.push(2);
queue.push(3);
console.log(queue.shift()); // 가장 먼저 있는 데이터 삭제
console.log(queue.length===0) // 큐가 비어 있는지 확인
console.log(queue.shift());
console.log(queue.shift());
console.log(queue.length===0)
return queue;
}
console.log(solution());
*/

/* 문제 설명 */
// n 만큼의 숫자가 1번부터 n번까지 있을 때 특정 숫자(k) 번째를 제거한 후 그 다음부터 k 번째를 또 제거하는 것을 반복하여 남은 숫자를 출력
// 풀이 : 일단 큐에 하나씩 넣고 k번 인덱스면 삭제,
// 큐 배열 하나를 n 개 로 초기화, 쉬프트로 앞에꺼 꺼내서 뒤에다 푸시, k 외치면 넣지말고 삭제, 그거 반복하다가 큐 안에 하나 남으면 반환

// 컨트롤 d = 동일한 것 전부 바꾸기

function solution(n, k) {
  let queue = [];
  for (let i = 0; i < n; i++) {
    queue.push(i + 1);
  }
  while (queue.length) {
    // 1 이 true 고 0 이 false 니까
    for (let i = 1; i < k; i++) {
      queue.push(queue.shift()); // 앞에꺼 뒤로 보내기
    }

    // k 개면 없애기만 해주기
    queue.shift();

    // 큐의 길이가 1이면 큐에서 뺀 게 답
    // 또는 return 큐의 0번 인덱스
    if (queue.length === 1) answer = queue.shift();
  }
  return answer;
}
console.log(solution(8, 3));
