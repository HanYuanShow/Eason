import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"
Vue.use(Vuex);
export var store = new Vuex. Store({
    state:{

      uerid:"",

    },
    mutations:{
        amutations(stats){
            stats.uerid=num        
        }
    },
    actions:{
        uerid(context){
            context .commit("amutations")
        }
    }
})
    