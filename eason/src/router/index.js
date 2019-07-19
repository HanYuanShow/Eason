import Vue from 'vue'
import Router from 'vue-router'
import Question from '../pages/Question'
import FindDoctor from '../pages/FindDoctor'
import Bbb from '../pages/bbb'
import DoctorConsult from '../pages/DoctorConsult'
import DoctorList from '../pages/DoctorList'
import Home from '../pages/Home'
import Science from '../pages/Science'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Question',
      name: 'Question',
      component: Question
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/Science',
      name: 'Science',
      component: Science
    },
    {
      path: '/Bbb',
      name: 'Bbb',
      component: Bbb
    },
    {
      path: '/FindDoctor',
      name: 'FindDoctor',
      component: FindDoctor
    },
    {
      path: '/DoctorConsult',
      name: 'DoctorConsult',
      component: DoctorConsult
    },
    {
      path: '/DoctorList',
      name: 'DoctorList',
      component: DoctorList
    }
  ]
})
