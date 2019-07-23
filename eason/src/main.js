// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
  

import BaiduMap from 'vue-baidu-map'
Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: 'BUbSZS9mXUkBHimbs8jl4f5MT8OE5jQh'   //1ubvYueRQYZXdflH0GYULl4o
})


// import { PasswordInput, NumberKeyboard } from 'vant';

// Vue.use(PasswordInput).use(NumberKeyboard);
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);

Vue.prototype.axios = axios
require('./mock')
import {store} from './store/store'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
