const TelegramBot = require("node-telegram-bot-api");
const invariant = require("tiny-invariant");
const { Configuration, OpenAIApi } = require("openai");

// const { brotliCompressSync } = require("zlib");
require("dotenv").config();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const token = process.env.botid;
const openai = new OpenAIApi(configuration);

invariant(token, "Couldn't read the token the enviroment variable");

const bot = new TelegramBot(token, { polling: true });

bot.on("message", async (msg) => {
  const response = await openai.createCompletion({
    model: "text-davinci-003", // 사용할 모델의 ID (필수)
    // 가장 유능한 GPT-3 모델. 다른 모델이 할 수 있는 모든 작업을 수행할 수 있으며, 종종 더 높은 품질, 더 긴 출력 및 더 나은 지침 준수로 수행할 수 있습니다. 또한 텍스트 내에 완성 삽입 을 지원합니다.
    prompt: `${msg.text}.\n`, // 문자열, 문자열 또는 배열, 토큰 배열로 인코딩된 문자를 생성하는 프롬프트 (기본값은 <|endoftext|>)
    // suffix : null, // 삽입된 텍스트가 완료한 뒤에 오는 접미사 (기본값 null)
    max_tokens: 500, // 완료 시 생성할 최대 토큰 수, 대부분 모델은 컨텍스트 길이가 2048토큰이다 (4096을 지원하는 최신모델 제외, 기본값 16)
    temperature: 0, // 0과 2사이에 사용할 샘플링 온도, 0.8과 높은 값은 출력을 더 무작위로 하고 0.2 와 같은 낮은 값은 더 집중적이고 결정적으로 만듬 (기본값은 1)
    top_p: 1, // 모델이 top_p 확률 질량으로 토큰의 결과를 고려하는 핵 샘플링이라는 온도를 사용한 샘플링의 대안이다 (기본값은 1)
    n: 1, // 각 프롬프트에 대해 생성할 완료 수 (기본값은 1)
    // stream : false ,  // 부분 진행 상황을 스트리밍 할지 여부이다. 설정되면 토큰이 사용가능해져서 데이터 전용 서버전송이벤트로 전송되며 스트림은 메세지에 의해 종료됨 (기본값 false)
    logprobs: null, // logprobs가장 가능성이 높은 토큰과 선택한 토큰 에 대한 로그 확률을 포함합니다 . 예를 들어 logprobs5인 경우 API는 가능성이 가장 높은 5개의 토큰 목록을 반환합니다. API는 항상 샘플링된 토큰을 반환 하므로 응답에 logprob최대 요소가 있을 수 있습니다
    // echo: false, // 프롬프트들 되풀이함 (기본값 false)
  });

  const chatId = msg.chat.id;

  //   bot.sendMessage(chatId, "please wait a few seconds");

  const responsee = response.data.choices.pop();

  if (!responsee?.text) {
    return bot.sendMessage(
      chatId,
      "please try again, AI couldn't send the data"
    );
  }

  bot.sendMessage(chatId, responsee?.text);
});

bot.on("error", (err) => console.log(err));
