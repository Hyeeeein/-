// 못품
function solution(s) {
  let S = s.split("");
  let reverseS = s.split("").reverse();
  console.log(reverseS);
  let answer = "";
  for (let i = 0; i < S.length; i++) {
    if (S[i] === reverseS[i]) {
      answer = "YES";
    } else {
      answer = "NO";
    }
  }
  return answer;
}
console.log(solution("abcbdcba"));

// 다른 수강생
function solution6(s) {
  let answer = "";
  let sArr = s.split("");

  backArr = s.split("").reverse();

  if (s.split("").reverse().join("") === s) {
    answer = "YES";
  } else {
    for (let i = 0; i < sArr.length; i++) {
      sArr.splice(i, 1);
      if (sArr.join("") === sArr.reverse().join("")) {
        answer = "YES";
        break;
      } else {
        answer = "NO";
      } // 첫번째 것 잘랐다고 no 를 넣어버리면 안됨 다 돌고 나서도 안될때 no 를 해야함 고칠 것
      sArr = s.split("");
    }
  }
  return answer;
}
console.log(solution6("abababa"));
console.log(solution6("abcabbakcba"));
console.log(solution6("abcacbakcba"));
console.log(solution6("abccba"));
// 이때 문자열 s 의 길이가 100000 가 넘어버리면 타임에러가 뜸

// 다른 수강생
function solution(s) {
  let answer = "NO";
  let str = "";

  for (let i = 0; i < s.length; i++) {
    str = s.split("");
    str.splice(i, 1);
    if (str.join("") === str.reverse().join("")) answer = "YES";
  }

  return answer;
}

console.log(solution("abcbdcba")); // YES
console.log(solution("abcabbakcba")); // YES
console.log(solution("abcacbakcba")); // NO
// 로직 상 자르지 않아도 맞는게 yes 가 나오면 안됨 반례 찾아볼 것

// 강사님 코드 영상 보고 작성하고 이해해보기
