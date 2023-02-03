<template>
  <div>공공API 코로나 데이터</div>
  <button @click="test()">console 환경변수 테스트</button>
  <hr />
  <select name="sel" id="selbox" v-model="local">
    <option value="부산">부산</option>
    <option value="대전">대전</option>
    <option value="대구">대구</option>
    <option value="광주">광주</option>
    <option value="서울">서울</option>
  </select>
  <select name="sel2" id="selbox2" v-model="day">
    <option value="어제">어제</option>
    <option value="오늘">오늘</option>
  </select>
  <button @click="getcorona">
    {{ day }} {{ local }} 지역 코로나 데이터 가져오기
  </button>
  <div>{{ corona }}</div>
</template>

<script>
/* eslint-disable */
export default {
  name: "app",
  data() {
    return {
      local: "부산", // 기본으로 부산으로됨
      day: "어제", // 기본으로 어제로 설정
      corona: "",
    };
  },
  methods: {
    getcorona: function () {
      const key = process.env.VUE_APP_pkey;
      const url =
        "http://apis.data.go.kr/1352000/ODMS_COVID_04/callCovid04Api?servicekey=" +
        key +
        "&apiType=JSON&gubun";
      this.corona = "로드중..";
      const date = new Date();
      const curTime =
        `${date.getFullYear()}-` +
        "0" +
        `${date.getMonth() + 1}-` +
        "0" +
        `${date.getDate()}`;
      fetch(url)
        .then((res) => res.json())
        .then((body) => {
          // console.log(body.items[0]);
          // this.corona = `${_.localOccCnt}`;

          body.items.forEach((v) => {
            if (v.gubun == this.local) {
              this.corona = `${this.local} 지역발생수 : ${v.localOccCnt}`;
            }
          });
        });
    },
  },
};
</script>

<style></style>
