<template>
  <div><h1>ex4 예제</h1></div>
  <button @click="tf1">히트맵</button>
  <div id="plot1"></div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {};
  },
  methods: {
    tf1: function () {
      const data = {
        values: [
          [1, 0, 0],
          [0, 0.3, 0.7],
          [0, 0.7, 0.3],
          // heatMap에 전달되는 값은 중첩된 자바스크립트 배열 또는 2D tf.tensor
        ],
        xTickLabels: ["Apple", "orange", "Tangerline"], // 밑에 xLabel와 다른것이니 주의!!, x축에 따라 개별행 라벨들
        yTickLabels: ["Apple", "orange", "Tangerline"], // 밑에 yLabel와 다른것이니 주의!!, y축에 따라 개별행 라벨들
      };
      const option = {
        width: 500,
        height: 300,
        xLabel: "Actual Fruit",
        yLabel: "Recognized Fruit",
        colorMap: "blues", // 그 외 greyscale, viridis
      };
      this.$tfvis.render.heatmap(
        document.getElementById("plot1"),
        data,
        option
      );
    },
  },
};
</script>

<style></style>
