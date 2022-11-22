function solution(s) {
  let answer = 0;
  for (let x of s) {
    if (x.charCodeAt() >= 65 && x.charCodeAt() <= 90) answer++;
  }
  return answer;
}
console.log(solution("KoreaTimeGood"));

// charCodeAt 메서드는 문자 하나를 의미하기 때문에 x 만 해줘야 함
/* uppercase 메서드 활용
if (x === x.toUpperCase()) answer++; 
=> 기존 x 와 x 를 대문자로 바꾼 것이 같다면 answer ++
=> 하지만 공백도 대문자로 인식하기 때문에 공백 없애주기 -> s= s.split(' ').join('');
*/
