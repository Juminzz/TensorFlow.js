<template>
  <div>크롤링 데이터 학식정보</div>
  <div>(Nodejs에 크롤링을 명령하고 콜백받은 그 데이터 가져오기)</div>
  <button @click="getData()">명령 후 데이터 가져오기</button>
  <div>{{ data }}</div>
</template>

<script>
/* eslint-disable */
import axios from "axios";
export default {
  name: "app",
  data() {
    return {
      data: "",
    };
  },
  methods: {
    getData: function () {
      this.data = "크롤링중 ...";
      axios.get("/hak").then((res) => {
        this.data = res.data;
      });
    },
  },
};
</script>

<style></style>
