// ox 문제 : 맞으면 1점, 틀리면 0점. 단, 연속 정답은 1점 가산.
// 앞에 것과 비교하여 바로 앞이 0 이고 현재 값이 1 일 경우 answer 에 +, 현재 값이 1일 경우 0 이 나올 때까지 1 을 탐색하여 현재 값까지 점수를 더해서 answer 에 +. 현재 값이 0 이면 continue

// 못 품
/* function solution(nums) {
  let answer = nums[0];
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      // console.log(nums[i]);
      if (nums[i] === 1) {
        answer += 1;
      } else if (nums[i] === nums[j] && nums[j] === 0) {
        duble = nums[i] + nums[j];
        answer += duble;
      }
    }
    if (nums[i] === 0) continue;
  }
  return answer;
}
console.log(solution([1, 0, 1, 1, 1, 0, 0, 1, 1, 0])); */

// 이삭님 코드
/* function solution(input) {
  let score = [input[0]];
  let ans = input[0];

  for (let i = 1; i < input.length; i++) {
    score.push(input[i] * (score[i - 1] + 1));
    ans += input[i] * (score[i - 1] + 1);
  }
  return ans;
}
let input = [0, 1, 0, 1, 0, 1, 1, 1];
let output = solution(input);
console.log(output); */
/* 해석
score 는 input 의 0번 인덱스를 넣어 초기값을 설정하여 배열로 넣고
ans 는 input 의 첫번째 값으로 설정
그리고 input 의 1번 인덱스부터 for 문을 돌아서

input 의 1번 인덱스 값에 score 의 0번 인덱스, 즉 input 의 현재 인덱스 값의 이전 값에다가 + 1 을 해준 것을 곱해준다
=> 그러면 현재 인덱스값이 0 일 경우 0 을 곱해준 것이 되니까 결국 값이 0이 되고, 현재 인덱스값이 1이고 이전 이전 인덱스값도 1인 경우 1*(1+1) 가 되어 값이 2가 나온다
이제 그 값을 비교해야 하기 때문에 이전 인덱스 값을 지정해줬던 곳(score)에 그 값을 넣어서 해당 값을 모두 더해줘야 하기 때문에 ans 에 그 값을 더해준다 

for 문이 종료될 때까지 위 공식을 반복하면 결국 최종값이 나오게 된다
*/

// 이삭님 수정 코드 : reduce 메서드를 이용하여 answer 를 사용하지 않고 score 배열의 모든 값을 더해줌
// reduce : 대상 배열의 길이만큼 주어진 콜백을 실행하고, 마지막에 호출되는 콜백의 반환 값을 반환합니다. 각 콜백의 반환 값은 다음 콜백으로 전달됩니다. 반환값이 accumulator 로 전달된다는 말. 아이템의 개수만큼 실행.

/* function solution(s) {
  let score = [s[0]];

  for (let i = 1; i < s.length; i++) {
    score.push(s[i] * (score[i - 1] + 1));
  }
  return score.reduce((a, b) => a + b, 0);
}
console.log(solution([0, 1, 0, 1, 0, 1, 1, 1])); */

// 강사님 : 1을 만나면 1씩 증가, 그리고 그걸 바로 ans 에 저장, 0 은 answer 도 0, 1 을 만나면 1씩 증가,...
// 강사님이 말한대로 구현해보기
// 이해못함 다시 해석 해볼 것

function solution(nums) {
  let score = 0;
  let answer = 0;

  // self 는 호출한 객체 자체(nums)
  nums.forEach((el, i, self) => {
    if (el === 1) {
      score++;
      answer += score;
    } else score = 0;
  });

  return answer;
}
console.log(solution([1, 0, 1, 1, 1, 0, 0, 1, 1, 0]));
