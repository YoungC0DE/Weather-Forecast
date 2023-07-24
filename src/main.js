import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import ToastPlugin from 'vue-toast-notification';

import '@/assets/all.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'vue-toast-notification/dist/theme-default.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

const app = createApp(App);

app.use(ToastPlugin);
app.use(router);
app.mount('#app');
