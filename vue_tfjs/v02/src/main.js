import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import * as tf from "@tensorflow/tfjs";
import * as tfvis from "@tensorflow/tfjs-vis";
import * as mobilenet from "@tensorflow-models/mobilenet";

const app = createApp(App);
app.config.globalProperties.$tf = tf;
app.config.globalProperties.$tfvis = tfvis;
app.config.globalProperties.$mobilenet = mobilenet;
app.use(store).use(router).mount("#app");
