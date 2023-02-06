<template>
  <h1>QR 코드 생성</h1>
  <div class="qr">
    <input
      @keyup.enter="sumbit"
      placeholder="주소를 입력하세요"
      v-model="site"
      @focusin="value = ''"
    />
    <button
      class="btn"
      @click="
        value =
          'https://chart.googleapis.com/chart?chs=400x400&cht=qr&chl=' +
          site +
          '&choe=UTF-8'
      "
    >
      생성
    </button>
  </div>
  <div>
    <img :src="value" v-if="this.value.length > 1" />
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "qr",
  data() {
    return {
      site: "",
      value: "",
    };
  },
  methods: {},
};
</script>

<style>
img {
  margin-top: 60px;
}
input {
  width: 300px;
}
</style>
