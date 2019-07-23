import Vue from 'vue'
import Router from 'vue-router'
import BuyMedicine from '../pages/buyMedicine'
import DrugDetails from '../pages/drugDetails'
import ShopStore from '../pages/shopStore'
import Address from '../pages/address'
import NewAdress from '../pages/newAdress'
import Cart from '../pages/cart'
import Payoff from '../pages/Payoff'
import Code from '../pages/code'
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
    },
    {
      path: '/address',
      name: 'Address',
      component: Address
    },
    {
      path: '/newAdress',
      name: 'NewAdress',
      component: NewAdress
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/payoff',
      name: 'Payoff',
      component: Payoff
    },
    {
      path: '/code',
      name: 'Code',
      component: Code
    },
  ]
})
