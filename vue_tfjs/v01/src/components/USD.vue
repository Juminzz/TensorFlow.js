<template>
  <div>1. 실시간 환율 API</div>
  원화로 계산할 달러는 <input v-model="input" />달러
  <div>현 시세 : 1달러에 {{ onedollar }} 원 입니다.</div>
  <br />
  <div>입력하신 {{ input }} 달러에 {{ result }}</div>
</template>

<script>
/* eslint-disable */
export default {
  name: "app",
  data() {
    return {
      input: 0,
      onedollar: 0,
      result: "숫자를 입력하세요.",
    };
  },
  watch: {
    input: function () {
      const dollar = this.input;
      if (isNaN(dollar)) {
        this.result = "계산중.....";
        return;
      }
      const url =
        "https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes=FRX.KRWUSD";
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          this.onedollar = data[0].basePrice;
          const mydata = this.input * this.onedollar;
          this.result = `${mydata.toLocaleString("ko-KR")}`;
        });
    },
  },
  methods: {},
};
</script>

<!--  style은 전역으로 설정 style scoped는 그 안에서만 스타일 가능 -->
<style>
input {
  width: 80px;
  text-align: right;
  border-style: none;
  font-size: 1em;
  border-bottom: 1px solid cadetblue;
  border-bottom-color: cadetblue;
  text-align: center;
}
input:focus {
  outline: none;
}
</style>
