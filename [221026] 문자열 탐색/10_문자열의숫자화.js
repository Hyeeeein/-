function solution(s) {
  let answer = "";
  const num = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };

  for (key in num) {
    let regExpAll = new RegExp(key, "g");
    s = s.replace(regExpAll, num[key]);
  }
  answer = s;
  answer = Number(answer);
  return answer;
}
console.log(solution("fivesevenzero"));

/* 
replaceAll 메서드 사용해도 되지만 최신 문법이라 안될 수도 있다고 함
그래서 생성자 함수 사용
*/

// 강사님
