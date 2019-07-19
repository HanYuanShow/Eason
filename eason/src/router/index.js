import Vue from 'vue'
import Router from 'vue-router'
import Science from '../pages/Science'
import ContentNews from '../pages/ContentNews'
import Home from '../pages/Home.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:"/Home",
      name:"Home",
      component:Home
    },
    {
      path: '/Science',
      name: 'Science',
      component: Science,
      children:[
        {
          path:'Hot',
          name:'Hot',
          component:()=>import('../components/ScienceBodyRouter/HotRouter')
        },
        {
          path:'Topic',
          name:'Topic',
          component:()=>import('../components/ScienceBodyRouter/TopicRouter')
        },
        {
          path:'Live',
          name:'Live',
          component:()=>import('../components/ScienceBodyRouter/LiveRouter')
        },
        {
          path:'Sleep',
          name:'Sleep',
          component:()=>import('../components/ScienceBodyRouter/SleepRouter')
        },
        {path:'*',component:()=>import('../components/ScienceBodyRouter/HotRouter')}
      ]
    },
    {
      path:'/ContentNews/:id',
      name:'ContentNews',
      component:ContentNews
    },
    {path:'/*',component:Home}
  ]
  
})
