import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入通用scss文件
import "@/stylesheets/main.scss"
// 引入swiper.min.css样式文件
import "swiper/css/swiper.min.css"
// 引入rem.js
import "@/modules/rem.js"
// 引入axios
import axios from "axios"
Vue.prototype.$http = axios
Vue.config.productionTip = false
// 引入图片懒加载组件
import { Lazyload,Header,Button,Tabbar, TabItem } from 'mint-ui';


Vue.use(Lazyload);
Vue.component("mt-header", Header);
Vue.component("mt-button", Button);
Vue.component("mt-tabbar", Tabbar);
Vue.component("mt-tab-item", TabItem);

// 引入无限滚动组件
import { InfiniteScroll } from 'mint-ui';
Vue.use(InfiniteScroll);
// 引入directive
import "./modules/directive";


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
