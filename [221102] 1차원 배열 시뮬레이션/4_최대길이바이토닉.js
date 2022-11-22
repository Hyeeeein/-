// 바이토닉을 만들 수 있는 최대길이
// 엄청 많이 나오는 문제
// 바이토닉 개수만큼 봉우리가 존재, 봉우리(peak)를 찾는 것이 관건, 봉우리는 왼쪽과 오른쪽 보다 큼
// 1단계 : i 가 1부터 돌면서, 왼쪽 오른쪽보다 크면 해당 인덱스를 peak=[] 에 넣어줌
// 2단계 : peak 에 for 문이 돌아야 함
// whlie 문이 돌면서 바이토닉이 되는지 확인 카운트는 1로 초기화해줘야 함 peak 본인도 세어줘야하기 때문에. left = peak, right = peak 로 해서 각각--, ++해줘서 카운트도 같이 오르도록
// 3단계 : 카운트 중 최고 카운트를 반환

function solution(nums) {
  let peak = [];
  let answer = [];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] < nums[i] && nums[i] > nums[i + 1]) {
      peak.push(i);
      // 안에서 console.log(peak.push(i)) 하면 해당 for 문이 돌때마다 그 길이를 출력해서 1 2 3 을 출력하는 것
    }
  }
  for (let p of peak) {
    let len = 1; // 바이토닉 길이를 매 봉우리마다 초기화해줘야 하기 때문에 peak for 문 안에서 초기화
    let left = p;
    let right = p;
    // left 와 right 를 봉우리 정점으로 초기화

    // 봉우리 정점에서 왼쪽을 비교했을 때 계속 작아진다면
    while (nums[left - 1] < nums[left]) {
      len++; // 바이토닉이 성립하기 때문에 길이 카운트
      left--;
    }
    // 봉우리 정점에서 오른쪽을 비교했을 때 계속 작아진다면
    while (nums[right] > nums[right + 1]) {
      len++; // 바이토닉이 성립하기 때문에 바이토닉 길이 카운트
      right++;
    }
    // 그리고 각 길이를 answer 에 집어넣기
    answer.push(len);
  }
  return Math.max(...answer); // 그 중 최댓값
}

console.log(solution([1, 3, 2, 5, 7, 4, 2, 5, 1]));
