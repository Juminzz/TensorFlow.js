require("dotenv").config();
const request = require("request");
const REST_API_KEY = process.env.kogpt;

function kogptAPI(prompt, max_tokens = 32, temperature, topP, n) {
  // prompt, max_tokens 필수
  const url = "https://api.kakaobrain.com/v1/inference/kogpt/generation";
  const headers = {
    "Content-Type": "application/json",
    Authorization: "KakaoAK" + REST_API_KEY,
  };
  const options = {
    url,
    method: "POST",
    body: {
      prompt,
      max_tokens,
      temperature,
      top_p: topP,
      n,
    },
    headers,
    json: true,
  };
  request.post(options, (e, res, body) => {
    const rst = body;
    console.log(rst);
  });
}
const prompt = `튀르키예 강진 피해 지역으로 급파된 대한민국 긴급구호대가 9일 오전 5시(현지시간) 구호 활동에 돌입해 생존자 1명을 구조했다.

외교부에 따르면 하타이주 안타키아 고등학교 등에서 구호 활동에 들어간 긴급구호대는 70대 중반 남성 1명을 구조했다. 그는 의식이 있는 상태로, 건강에 큰 문제가 없는 것으로 확인됐다고 외교부는 덧붙였다.

구호대는 생존자를 구출한 곳에서 사망자 4명도 추가로 확인했다.

한국 긴급구호대는 튀르키예 측 요청에 따라 하타이주 안타키아를 구조 활동 지역으로 전날 선정했으며 이 지역 내 셀림 아나돌루 고등학교에 베이스캠프를 설치했다.

정부 파견으로는 역대 최대규모인 이번 긴급구호대는 외교부 1명, 국방부 49명, 소방청 62명, KOICA 6명 등 총 118명으로 구성됐다.

이들은 튀르키예 측 요청에 따라 탐색 구조팀 중심으로 꾸려졌다. 한줄 요약:`;
kogptAPI(prompt, 32, 0.9, 0.7, 1);
