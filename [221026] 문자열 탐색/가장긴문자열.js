function solution(s) {
  let answer = "";
  let maxL = 0; // 0 으로 한 이유는 첫번째 것이 값으로 나오게 하기 위해
  for (let x of s) {
    if (x.length > maxL) {
      // > 가 아닌 >= 라고 하면 값이 여러 개일 때 다음 마지막 것이 값이 나옴
      maxL = x.length;
      answer = x;
    }
  }
  return answer;
}
console.log(solution(["teacher", "itistimes", "student", "beautiful", "good"]));

// let maxL = 0; -> 0 으로 한 이유는 첫번째 것이 값으로 나오게 하기 위해
// if (x.length > maxL) -> > 가 아닌 >= 라고 하면 값이 여러 개일 때 다음 마지막 것이 값이 나옴
// if (x.length > maxL) {maxL = x.length;} -> 최댓값 구하는 알고리즘
