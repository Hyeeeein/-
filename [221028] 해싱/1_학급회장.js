function solution(s) {
  let answer;
  let sH = new Map();
  for (let x of s) {
    sH.set(x, (sH.get(x) || 0) + 1);
  }
  let max = Number.MIN_SAFE_INTEGER; // -9007199254740991
  for (let [key, val] of sH) {
    if (val > max) {
      max = val;
      answer = key;
    }
  }
  return answer;
}
console.log(solution("BACBACCACCBDEDE"));

/* 
answer 변수에 빈 값을 설정

sH 라는 map 객체 하나를 생성

for of 문으로 받아온 s 의 각 요소를 x 로 지정하여 sH에 x 를 key 로 집어 넣고  sH 의 x 를 가져오거나 0 이면 1 을 더해서 value 값으로 넣음

max 변수에 JavaScript에서 지원하는 안전한 최소 정수값을 넣음
for 문으로 sH 의 key 
*/
