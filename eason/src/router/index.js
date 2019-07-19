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
      path:"/*",
      redirect:"/Home"
    }
  ]
})
