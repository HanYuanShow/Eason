import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'



import BaiduMap from 'vue-baidu-map'
Vue.use(BaiduMap, {
 
  ak: 'BUbSZS9mXUkBHimbs8jl4f5MT8OE5jQh'  
})


Vue.prototype.axios = axios
require('./mock')
import {store} from './store/store'
Vue.config.productionTip = false

import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
