// 이진수화는 나머지가 0이 나올때까지 2 로 나누는 것
// for each 를 하나 돌리고 e 는 배열의 현재값이고 tmp 는 해당 값을 저장하고 cnt 를 0 으로 초기화(초기화해주지 않으면 cnt 값이 계속 누적됨), while 문으로 tmp 가 0 보다 크다면 cnt 에 나머지를 누적(tmp%2)하고 tmp 는 몫으로 바뀌어야 하니까 parseInt 로 tmp/2 로 해서 5가 들어가면 cnt 에 나머지(0 또는 1) 을 더해주고 tmp 즉, 나눠줄 값은 5 를 나눈 몫인 2가 됨 몫이 0 이 될 때까지 반복, pair 라는 빈 배열을 만들어서 foreach 가 끝에 [e, cnt] 를 넣어주기, 그래서 cnt 를 기준으로 오름차순을 해주는데 cnt 가 같을 경우에는 e 가 작은 순으로 정렬해야 하니 y 기준 x 오름차순도 적용해줌,  x 값을 answer 에 넣어서 반환
// tmp 를 만들어주는 이유는 while 문을 지나면 tmp 는 0이 되기 때문에

function solution(nums) {
  let answer = [];
  let cnt = 0;
  let pair = [];
  let tmp;
  nums.forEach((e) => {
    tmp = e;
    cnt = 0;
    while (tmp > 0) {
      cnt += tmp % 2;
      tmp = parseInt(tmp / 2);
    }
    pair.push([e, cnt]);
  });
  pair = pair.sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    else return a[1] - b[1];
  });
  pair.forEach((e) => {
    answer.push(e[0]);
  });

  return answer;
}
console.log(solution([5, 6, 7, 8, 9])); // [8, 5, 6, 9, 7]
console.log(solution([5, 4, 3, 2, 1])); // [1, 2, 4, 3, 5]
