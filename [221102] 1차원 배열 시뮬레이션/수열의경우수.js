// 봉우리를 지점으로 하는 바이토닉이 몇 개가 있을까 생각
// 봉우리를 기준으로 왼쪽 글자 수 * 오른쪽 글자 수

function solution(nums) {
  let peak = [];
  let answer = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] < nums[i] && nums[i] > nums[i + 1]) {
      peak.push(i);
      // 안에서 console.log(peak.push(i)) 하면 해당 for 문이 돌때마다 그 길이를 출력해서 1 2 3 을 출력하는 것
    }
  }
  for (let p of peak) {
    let left = p;
    let right = p;
    let leftCnt = 0;
    let rightCnt = 0;
    while (nums[left - 1] < nums[left]) {
      left--;
      leftCnt++;
    }
    while (nums[right] > nums[right + 1]) {
      right++;
      rightCnt++;
    }
    answer += rightCnt * leftCnt;
  }
  return answer;
}

console.log(solution([1, 3, 2, 5, 7, 4, 2, 5, 1]));

/* 해석
경우의 수를 이용하면 바이토닉이 되는 수열이 1 3 2 인 경우 중심점을 기준으로 양쪽에 하나씩 있으니 하나만 만들 수 있고
2 5 7 4 2 인 경우 양쪽에 두개씩 있으니 총 4개를 만들 수 있다
그래서 최대길이 바이토닉을 구한 것과 논리가 거의 동일하지만 while 문으로 각 중심점에서 왼쪽으로 갔을 때 leftCnt 도 같이 올려주고, 오른쪽으로 갔을 때 rightCnt 도 같이 올려준다음
그것을 곱해서 각 peak 를 돌때마다 answer 에도 더해주면 수열의 경우 수를 구할 수 있다
*/
