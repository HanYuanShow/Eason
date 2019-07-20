import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import PersonalCentter from "../pages/PersonalCenter"
import PersonalInformation from "../pages/PersonalInformation"
import Install from "../pages/Install.vue"
import MessageCenter from '../pages/MessageCenter'
import HealthRecord from "../pages/HealthRecord.vue"
import MyCollect from "../pages/MyCollect.vue"
import Opinion from "../pages/Opinion.vue" 
import InviteSomeOne from "../pages/InviteSomeOne.vue" 
import logon from "../pages/logon.vue" 
import denglu from "../pages/denglu.vue" 
import forgetpass from "../pages/forgetpass.vue" 
import test from "../pages/test.vue" 
import password from "../pages/password.vue" 
import ModifyPersonalInformation from "../pages/ModifyPersonalInformation.vue" 
import Home from "../pages/Home"









import Seek from '../pages/Seek'
import Autognosis from '../pages/autognosis'
import Symptomlist from '../components/symptomlist'
import Bodypic from '../components/bodypic'
// import Automenu from '../components/automenu'
import DrugStore from '../pages/DrugStore'
import Body from '../components/symptomlist/body'
import Skin from '../components/symptomlist/skin'
import Head from '../components/symptomlist/head'
import Throat from '../components/symptomlist/throat'
import Breast from '../components/symptomlist/breast'
import Belly from '../components/symptomlist/belly'
import Reproduction from '../components/symptomlist/reproduction'
import Bone from '../components/symptomlist/bone'
import Arm from '../components/symptomlist/arm'
import Belt from '../components/symptomlist/belt'
import Hip from '../components/symptomlist/hip'
import SelfTest from '../pages/SelfTest'
import DetailPage from '../pages/DetailPage'
import Science from '../pages/Science'
import ContentNews from '../pages/ContentNews'
import ContentTopic from '../pages/ContentTopic'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:"/Home",
      name:"Home",
      component:Home
    },
    {
      path: '/personalCentter',
      name: 'PersonalCentter',
      component: PersonalCentter
    },
    {
      path: '/personalInformation',
      name: 'PersonalInformation',
      component: PersonalInformation
    },
    {
      path: '/install',
      name: 'Install',
      component: Install
    },
    {
      path: '/messageCenter',
      name: 'MessageCenter',
      component: MessageCenter
    },
    {
      path: '/healthRecord',
      name: 'HealthRecord',
      component: HealthRecord
    },
    {
      path: '/myCollect',
      name: 'MyCollect',
      component: MyCollect
    },
    {
      path: '/opinion',
      name: 'Opinion',
      component: Opinion
    },
    {
      path: '/inviteSomeOne',
      name: 'InviteSomeOne',
      component: InviteSomeOne
    },
    {
      path: '/logon',
      name: 'Logon',
      component: logon
    },
    {
      path: '/denglu',
      name: 'denglu',
      component: denglu
    },
    {
      path: '/forgetpass',
      name: 'forgetpass',
      component: forgetpass
    },
    {
      path: '/seek',
      name: 'Seek',
      component: Seek
    },
    {
      path: '/autognosis',
      name: 'Autognosis',
      component: Autognosis,
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
        }
        
      ]
    },


    {
      path: '/test',
      name: 'test',
      component: test
    },
    {
      path: '/password',
      name: 'password',
      component: password
    },
    {
      path: '/modifyPersonalInformation',
      name: 'ModifyPersonalInformation',
      component: ModifyPersonalInformation
    },






    {
      path: '/DrugStore',
      name: 'DrugStore',
      component: DrugStore,
    },
    {
      path:'/ContentTopic/:id',
      name:'ContentTopic',
      component:ContentTopic
    },
    {
      path:'/ContentNews/:id',
      name:'ContentNews',
      component:ContentNews
    },
    {
      path:"*",
      redirect:"/Home"
    }
  ]
  
})