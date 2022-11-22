// shift 는 대문자가 있을 경우 한번만 카운트하면 됨
// 중복 문자도 하나만 있으면 되니까 두개 있어도 하나 카운트

function solution(s, n) {
  let upper = 0;

  // set 자료형은 중복을 제거해주기 때문에 문자를 모두 제거해준 뒤 set 에 넣어줌
  const set = new Set(s.toLowerCase());

  for (let x of s) {
    if (x.charCodeAt() >= 65 && x.charCodeAt() <= 90) upper = 1; // shift 키를 추가해줘야 하니까 문자열을 하나씩 탐색해 해당 문자열의 코드가 대문자 코드에 부합하면 upper=1
  }

  return set.size + upper <= n ? true : false;
  // 받아온 값을 소문자화하여 중복을 제거한 것 + shift키 사용 <= 사용할 수 있는 키의 개수 ? ture : false
}

console.log(solution("teacher", 6)); // true
console.log(solution("Teacher", 6)); // false
console.log(solution("TeacHer", 7)); // true
console.log(solution("LifeisGood", 8)); // false
console.log(solution("Gabg", 4)); // true

// 강사님 코드 (가져와서 해석하기)
//
