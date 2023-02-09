<template>
  <div>
    <div id="display">
      <input
        ref="image"
        type="file"
        name="img"
        accept="image/*"
        multiple="multiple"
        id="input"
        style="display: none"
        @change="upIMG()"
      />
      <label for="input" id="img-box">+</label>
    </div>
    <img ref="img" v-if="imglink" :src="imglink" alt="사진 준비 중.." />
    <hr />
    <div id="result1">{{ result1 }}</div>
    <button @click="predict()">분석</button>
    <div id="result">{{ result }}</div>
    <div v-if="trans" id="trans">{{ trans }}</div>
  </div>
</template>

<script>
import * as tf from "@tensorflow/tfjs";
import * as mobilenet from "@tensorflow-models/mobilenet";
import axios from "axios";

export default {
  name: "app",
  data() {
    return {
      imglink: "",
      result1: "파일을 업로드 후 이미지 분석을 시작하세요.",
      result: "",
      trans: "",
      inData: "",
    };
  },
  methods: {
    upIMG() {
      const image = this.$refs.image.files[0]; // refs로 해당 이미지 태그 선택하기.
      const reader = new FileReader(); // 생성자 인스턴스. 내장 클래스.
      reader.readAsDataURL(image);
      reader.onload = (e) => {
        // console.log(e.target.result);
        this.result1 = e.target.result;
        this.imglink = e.target.result; // base64 코드로만 src에 넣어도 그 사진이 그대로 나옴.
      };
    },
    // base64 코드로 바로 mobilenet 분석이 가능하긴 하지만, ref를 이용해서 분석해보자.
    async predict() {
      const img = this.$refs.img;
      this.result = "이미지 분석 중...";
      this.trans = "번역 중...";

      await mobilenet
        .load()
        .then((model) => model.classify(img))
        .then((rst) => {
          this.inData = rst[0].className;
          this.result = "분석 결과 : " + this.inData;
        });

      /* 텐서로 전환 */
      const tfimg = await tf.browser.fromPixels(img); // 이 명령어를 써 줘야 사진을 텐서로 전환해준다.
      // tfimg.print();
      // tf.dispose(tfimg); // 메모리 날리기.

      const cid = process.env.VUE_APP_nid;
      const csecret = process.env.VUE_APP_pkeynpw;
      const query = this.inData;

      const url = "/v1/papago/n2mt";
      const frm = new FormData();
      frm.append("source", "en");
      frm.append("target", "ko");
      frm.append("text", query);

      axios
        .post(url, frm, {
          headers: {
            "Content-Type": "application/json",
            "X-Naver-Client-Id": cid,
            "X-Naver-Client-Secret": csecret,
          },
        })
        .then((res) => {
          const rst = res.data.message.result.translatedText;
          // console.log(rst);
          this.trans = "번역 결과 : " + rst;
        });
    },
  },
};
</script>

<style>
#img-box {
  display: inline-block;
  width: 100px;
  height: 100%;
  border: 1px solid rgb(238, 199, 232);
  border-radius: 5px;
  background-color: rgb(131, 239, 214);
  color: #fff;
  font-size: 3em;
  text-align: center;
  padding: auto;
  margin: 10px;
  line-height: 100px;
}
img {
  border: 1px solid lightgoldenrodyellow;
  display: inline-block;
  width: 100px;
  height: 100%;
  border-radius: 5px;
}
#result1 {
  width: 95%;
  text-align: center;
  height: 80px;
  overflow: auto;
  word-break: break-all;
  margin: 10px;
}
</style>
