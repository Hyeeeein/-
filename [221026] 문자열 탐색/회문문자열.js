function solution(s) {
  let S = s.split("").map((e) => e.toUpperCase());
  let reverseS = s
    .split("")
    .reverse()
    .map((e) => e.toUpperCase());
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
console.log(solution("gooG"));

/* 
이게.. 맞나?
*/

// 다른 수강생
let result = "";
function solution(s) {
  let result = "YES";
  s = s.toUpperCase();
  for (let i = 0; i < s.length / 2; i += 1) {
    if (s[i] !== s[s.length - 1 - i]) return "NO";
  }
  return result;
}
console.log(solution("gooG"));

// 다른 수강생
function solution(s) {
  let answer = "";
  let sUp = s.toUpperCase();
  const x = sUp.split("").reverse().join("");
  if (sUp === x) {
    answer = "YES";
  } else {
    answer = "NO";
  }
  return answer;
}
console.log(solution("gooG"));

// 다른 수강생
function isPalindrome(input) {
  input = input.toUpperCase();

  // left right 쓰는 것 중요
  let l = 0;
  let r = input.length - 1;

  while (l < r) {
    if (input[l] !== input[r]) {
      console.log(input[l], input[r]);
      return false;
    }
    l++;
    r--;
  }
  return true;
  //
}

/* function solution(input) {
  if (isPalindrome(input)) {
    return "YES";
  } else {
    return "NO";
  }
} */
let input = "goog";
const output = solution(input);
console.log(output);
