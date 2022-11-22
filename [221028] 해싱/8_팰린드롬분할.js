function solution(s, k) {
  let cnt = {};
  let odd = 0;
  for (let x of s) {
    cnt[x] = (cnt[x] || 0) + 1;
  }
  // 빈도수 카운팅 알고리즘 : 빈 객체에 x 라는 키를 할당하는데 그 값으로는 cnt[x] 의 값이 있으면 거기에 + 1, 없으면 0 을 반환하여 거기에 +1 을 해서 넣어줌. 값이 없으면 undefined 가 나오는데 or 연산자는 양쪽이 false 값이면 false 를 반환하지 않고 마지막 값을 반환, 따라서 0 을 반환함.
  let keys = Object.keys(cnt);
  for (let x of keys) {
    if (cnt[x] % 2 == 1) odd++;
  }
  return odd <= k && s.length >= k;
}
console.log(solution("abcabcabc", 10));

// 홀수인 문자열을 카운트한 odd가 k 개 이하일 때만 false 가 나오도록 설정 : 홀수가 0 이거나 1 일 때 팰린드롬이 성사되는데 k 개만큼 분할한다면 각 k 개만큼 홀수인 문자열을 하나씩 가운데에 배치할 수 있으니 홀수인 문자열이 k 개 이하일 때 팰린드롬이 성사될 수 있는 것.
// !!!추가!!! s 의 길이가 k 개를 초과하여 쪼개질 수 없으니까 s 길이가 k 이하일 때도 추가해줘야 함
