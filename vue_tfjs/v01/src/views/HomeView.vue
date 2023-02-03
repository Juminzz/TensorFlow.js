<template>
  <div class="home">
    <!-- 버튼 클릭을때 select값에 따라 이동함 (component :is="select" 코드)  -->
    <button @click="select = 'USD'">달러</button>
    <button @click="select = 'JPY'">엔화</button>

    <!-- keep-alive는 달러에 숫자적고 엔화로 넘어가서 적고 다시 돌아와도 숫자가 안사라지고 그대로있는 기능  -->
    <!-- keep-alive안에 주석 넣으면 에러뜸 -->
    <keep-alive>
      <component :is="select"></component>
    </keep-alive>
    <!-- USD로 이동 (한줄만) -->
  </div>
</template>

<script>
/* eslint-disable */
// @ is an alias to /src
import USD from "@/components/USD.vue";
import JPY from "@/components/JPY.vue";

export default {
  name: "HomeView",
  data() {
    return {
      select: "USD",
    };
  },
  components: {
    USD,
    JPY,
  },
};
</script>
<!--  style은 전역으로 설정 style scoped는 그 안에서만 스타일 가능 -->
<style>
input {
  /* width: 80px; */
  /* text-align: right; */
  /* border-style: none; */
  /* font-size: 1em; */
  /* border-bottom: 1px solid cadetblue; */
  /* border-bottom-color: cadetblue; */
}
input:focus {
  /* outline: none; */
  color: #42b983;
}
input:hover {
  /* outline: none; */
  color: #e71809;
}
</style>
