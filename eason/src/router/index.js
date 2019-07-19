import Vue from 'vue'
import Router from 'vue-router'
import Home from "../pages/Home"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    //路由重定向
    {
      path: "/*",
      redirect: "/home"
    },
  ]
})
