<template>
  <div><h1>ex8 예제 with Chart.js</h1></div>
  <button @click="chart">Chartjs</button>
  <canvas id="myChart" style="width: 400px; height: 400px"></canvas>
</template>

<script setup>
import Chart from "chart.js/auto";
import data from "../assets/data.js"; // assets에 있는 data.js 가져오기
function chart() {
  const ctx = document.getElementById("myChart");
  new Chart(ctx, {
    type: "radar",
    data,
    options: {
      responsive: false, // 반응형 끄기
      elements: {
        line: {
          borderWidth: 3,
        },
      },
    },
  });
}
</script>

<style></style>
