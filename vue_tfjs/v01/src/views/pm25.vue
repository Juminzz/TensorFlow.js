<template>
  <div>공공API 공기질 데이터</div>
  <hr />
  <button @click="[getpm25()]">부산지역 공지질 데이터 가져오기</button>
  <div>{{ pm25 }}</div>
</template>

<script>
/* eslint-disable */
export default {
  name: "app",
  data() {
    return {
      pm25: "",
    };
  },
  methods: {
    getpm25: function () {
      const key = process.env.VUE_APP_pkey;
      const surl =
        "http://apis.data.go.kr/6260000/AirQualityInfoService/getAirQualityInfoClassifiedByStation?serviceKey=" +
        key +
        "&pageNo=1&numOfRows5&areaIndex=221162&resultType=json";
      this.pm25 = "데이터 로드 중";
      fetch(surl)
        .then((res) => res.json())
        .then((body) => {
          const _ =
            body.getAirQualityInfoClassifiedByStation.body.items.item[0];
          this.pm25 = `부산의 초미세먼지 : ${_.pm25} \n미세먼지 : ${_.pm10} \n일산화탄소 : ${_.co}`;
        });
    },
  },
};
</script>

<style></style>
