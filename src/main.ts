import { createApp } from "vue";
import "./style.css";
import router from "./utils/routers/routers";
import App from "./App.vue";
import { createPinia } from "pinia";

const app = createApp(App);
const pinia = createPinia();

app.use(router);
app.use(pinia);
app.mount("#app");