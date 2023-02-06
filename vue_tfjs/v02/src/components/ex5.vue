<template>
  <div><h1>ex5 예제</h1></div>
  <button @click="tf1">Table</button>
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
      const headers = ["col 1", "col 2", "col 3"];
      const values = [
        [1, 2, 3],
        ["4", "5", "6"],
        ["<strong>7</strong>", true, false],
      ];
      const surface = { name: "Table", tab: "Charts" };
      this.$tfvis.render.table(surface, { headers, values });
    },
  },
};
</script>

<style></style>
