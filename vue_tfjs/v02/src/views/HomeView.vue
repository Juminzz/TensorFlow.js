<template>
  <div>
    <h2>
      특강 part2. 딥러닝 프로젝트
      <a href="https://www.tensorflow.org/js?h1=ko" target="_blank"
        >(tensorflowjs)
      </a>
    </h2>
    <button @click="tfc">console 체크</button>
    <button @click="e1()">예제1</button>
    <button @click="e2()">예제2</button>
    <button @click="e3()">예제3</button>
    <button @click="e4()">예제4</button>
    <button @click="choice = 'ex5'">예제5</button>
    <button @click="choice = 'ex6'">예제6</button>
    <button @click="choice = 'ex7'">예제7</button>
    <button @click="choice = 'ex8'">예제8</button>
    <!-- ex1~4랑 ex5~7이랑 같은 값 다른방식 !  -->
  </div>
  <hr />
  <component :is="choice"></component>
</template>

<script>
// @ is an alias to /src
import ex1 from "@/components/ex1.vue";
import ex2 from "@/components/ex2.vue";
import ex3 from "@/components/ex3.vue";
import ex4 from "@/components/ex4.vue";
import ex5 from "@/components/ex5.vue";
import ex6 from "@/components/ex6.vue";
import ex7 from "@/components/ex7.vue";
import ex8 from "@/components/ex8.vue";

export default {
  name: "HomeView",
  data() {
    return {
      choice: ex1,
    };
  },
  methods: {
    tfc: function () {
      console.log(this.$tf);
      console.log(this.$tfvis);
    },
    e1: function () {
      this.choice = "ex1";
    },
    e2: function () {
      this.choice = "ex2";
    },
    e3: function () {
      this.choice = "ex3";
    },
    e4: function () {
      this.choice = "ex4";
    },
  },
  components: {
    ex1,
    ex2,
    ex3,
    ex4,
    ex5,
    ex6,
    ex7,
    ex8,
  },
};
</script>
