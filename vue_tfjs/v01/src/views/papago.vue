<template>
  <div>기업API 파파고 번역기</div>
  <button @click="check">console로 env 체크</button>
  <hr />
  <textarea
    name=""
    id=""
    cols="30"
    rows="10"
    v-model="inData"
    placeholder="번역 할 내용을 입력하세요"
  ></textarea>
  = <button @click="geTtrans()">한영 번역하기</button>=>
  <textarea
    readonly
    name=""
    id=""
    cols="30"
    rows="10"
    :value="trans"
  ></textarea>
</template>

<script>
/* eslint-disable */
import axios from "axios";
export default {
  name: "app",
  data() {
    return {
      inData: "",
      trans: "",
    };
  },
  methods: {
    check: function () {
      const key = process.env.VUE_APP_nid;
      console.log(key);
    },
    geTtrans: function () {
      const cid = process.env.VUE_APP_nid;
      const csecret = process.env.VUE_APP_pkeynpw;
      const query = this.inData;

      const url = "/v1/papago/n2mt";
      this.trans = "번역중...";

      const frm = new FormData();
      frm.append("source", "ko");
      frm.append("target", "en");
      frm.append("text", query);
      // console.log(frm);
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
