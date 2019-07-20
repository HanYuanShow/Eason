import Vue from 'vue'
import Router from 'vue-router'
import FindHospital from '../pages/findHospital'
import HospitaDetails from '../pages/hospitaDetails'
import HospitalIntro from '../pages/hospitalIntro'
import Location from '../pages/location'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/findHospital',
      name: 'FindHospital',
      component: FindHospital
    },
    {
      path: '/hospitaDetails/:clickId',
      name: 'HospitaDetails',
      component: HospitaDetails
    },
    {
      path: '/hospitalIntro/:clickId',
      name: 'HospitalIntro',
      component: HospitalIntro
    },
    {
      path: '/location/:city/:keyword',
      name: 'Location',
      component: Location
    },
    {
      path: '/*',
      redirect:"/findHospital"
    },
  ]
})
