// map 으로 받아온 값을 저장해서 해당 값이 짝수이고, 그 상태에서 홀수인 값이 두개 이상 있으면 false 하나면 true

// map ver
function solution(s) {
  let sH = new Map();

  for (let x of s) {
    sH.set(x, (sH.get(x) || 0) + 1);
  }

  let answer = 0;

  for (let [key, val] of sH) {
    if (val % 2 === 1) {
      answer++;
      // answer++; 앞쪽에 냅다 리턴 넣으면 안됨!!!! 리턴 넣으면 0 반환
      // 추가 설명: 왜 리턴을 넣으면 안되냐면 console.log(answer++) 만 해주면 초기값인 0 을 반환한 뒤 1 을 더해주기 때문에 그 다음 console.log(answer) 를 찍어보면 1 이 나옴 ++answer 와 같은 효과가 나타나는 것. 그래서 answer++ 을 해준 뒤 밖에서 answer 를 출력해줘야 함
    }
  }
  return answer <= 1;
}
console.log(solution("abbaces"));

// for of 문 ver
function solution2(s) {
  let cnt = {};
  let odd = 0;
  for (let x of s) {
    cnt[x] = (cnt[x] || 0) + 1;
  }
  let keys = Object.keys(cnt);
  for (let x of keys) {
    if (cnt[x] % 2 == 1) odd++;
  }
  return odd <= 1;
}
console.log(solution2("abbac"));
