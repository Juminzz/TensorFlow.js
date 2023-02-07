<template>
  <div>
    <div id="display"></div>
    <button @click="main()">스샷 동작</button>
    <button @click="alog()">디버거</button>
    <div>{{ result }}</div>
    <div :value="trans">{{ trans }}</div>
  </div>
</template>

<script>
import * as tf from "@tensorflow/tfjs";
import * as mobilenet from "@tensorflow-models/mobilenet";
import axios from "axios";
const videoElement = document.createElement("video"); // 캠 태그 생성
export default {
  name: "app",
  data() {
    return {
      result: "스샷을 찍어 이미지를 분석을 시작하세여.",
      trans: "",
      indata: "",
    };
  },
  methods: {
    alog: function () {
      console.log(tf);
    },
    main: async function () {
      const cid = process.env.VUE_APP_nid;
      const csecret = process.env.VUE_APP_pkeynpw;
      const query = this.inData;
      const url = "/v1/papago/n2mt";

      this.result = "이미지 분석중 ...";
      const display = document.getElementById("display");
      display.appendChild(videoElement); // 캠 태그 부착
      videoElement.width = 400; // 캠 사이즈 조절
      videoElement.height = 400; // 캠 사이즈 조절
      const cam = await tf.data.webcam(videoElement);
      const net = await mobilenet.load(); // 위아래 바꾸면 동작 안함
      const img = await cam.capture();
      const cresult = await net.classify(img);
      console.log(cresult);
      img.print();
      tf.dispose(img);

      this.result =
        "result: " +
        cresult[0].className +
        "(" +
        (cresult[0].probability * 100).toFixed(2) +
        "%)";

      this.trans = "번역 : ";
      const frm = new FormData();
      frm.append("source", "en");
      frm.append("target", "ko");
      frm.append("text", this.result);
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
          console.log(rst);
          this.trans = rst;
        });
    },
  },
};
</script>

<style></style>
