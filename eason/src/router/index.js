import Vue from 'vue'
import Router from 'vue-router'
import BuyMedicine from '../pages/buyMedicine'
import DrugDetails from '../pages/drugDetails'
import ShopStore from '../pages/shopStore'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/buyMedicine',
      name: 'BuyMedicine',
      component: BuyMedicine
    },
    {
      path: '/drugDetails',
      name: 'DrugDetails',
      component: DrugDetails
    },
    {
      path: '/shopStore',
      name: 'ShopStore',
      component: ShopStore
    }
  ]
})
