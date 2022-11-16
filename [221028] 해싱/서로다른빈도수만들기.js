function solution(s) {
  let map = new Map();
  for (x of s) {
    map.set(x, (map.get(x) || 0) + 1);
  }
  let answer = 0;
  let set = new Set();
  for ([key, val] of map) {
    console.log(key, val);
    /// while 문 안에 첫번째 문자열에 빈도수가 set 자료형에 있냐는 조건문 넣기
    console.log(set);
    while (set.has(val)) {
      val--;
      answer++;
    }
    if (val === 0) continue;
    set.add(val);
    // console.log(set.add(val));
  }
  return answer;
}

console.log(solution("aebbbbc"));

// aebbbbc 인 경우 빈도수가 1 인 것이 세개 있을 때 1 인 것을 두개 지워서 0 이 되면 0 이 또 두개가 되기 때문에 0 을 또 하나 지웠다고 answer 가 하나 더 들어남. 그래서 value 가 0 일 경우 반복을 끝날 때까지 계속해서 지나가라고 continue 를 실행해줘야 함
