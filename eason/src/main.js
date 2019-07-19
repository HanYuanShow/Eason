
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

Vue.prototype.axios = axios
require('./mock')
import {store} from './store/store'
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
