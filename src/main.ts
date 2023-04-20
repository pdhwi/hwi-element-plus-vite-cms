import { createApp } from "vue";
import App from "./App.vue";

 //import "~/styles/element/index.scss";

 import ElementPlus from "element-plus";
 import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
 //import all element css, uncommented next line
 import "element-plus/dist/index.css";

// or use cdn, uncomment cdn link in `index.html`

import router from './router/index'
import 'uno.css'
import { createPinia } from 'pinia'

// If you want to use ElMessage, import it.
import "element-plus/theme-chalk/src/message.scss"
const pinia = createPinia()

const app = createApp(App);
 app.use(ElementPlus,{
  locale: zhCn,
 });
 app.use(pinia)
     .use(router)
app.mount("#app");
