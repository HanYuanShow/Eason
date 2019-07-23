import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)

export const store= new Vuex.Store({
    state:{
        axiosdata:[],
        info:""
    },
    mutations:{
        cartMutation(state,value){
           state = value
        }
    }
})