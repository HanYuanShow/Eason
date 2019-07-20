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
import Home from "../pages/Home";
import chunyuxieyi from "../pages/chunyuxieyi.vue"
import MessageNotification from "../pages/MessageNotification.vue"
import ChangePassword from "../pages/ChangePassword";
import ChangePhone from "../pages/ChangePhone";
import LocalPassword from "../pages/LocalPassword";
import help from "../pages/help";
import declaraction from "../pages/declaraction";
import useragreement from "../pages/useragreement";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import Maternityinformation from "../pages/Maternityinformation";
import HealthHistory from "../pages/HealthHistory";
import newphone from "../pages/newphone";
import getyanzheng from "../pages/getyanzheng";
import changephonenewpass from "../pages/changephonenewpass";
import setpassword from "../pages/setpassword";
















Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/setpassword',
      name: 'setpassword',
      component: setpassword
    },
    {
      path: '/changephonenewpass',
      name: 'changephonenewpass',
      component: changephonenewpass
    },
    {
      path: '/getyanzheng',
      name: 'getyanzheng',
      component: getyanzheng
    },
    {
      path: '/newphone',
      name: 'newphone',
      component: newphone
    },
    {
      path: '/HealthHistory',
      name: 'HealthHistory',
      component: HealthHistory
    },

    {
      path: '/maternityinformation',
      name: 'Maternityinformation',
      component: Maternityinformation
    },
    {
      path: '/privacyPolicy',
      name: 'PrivacyPolicy',
      component: PrivacyPolicy
    },
    {
      path: '/personalCentter',
      name: 'PersonalCentter',
      component: PersonalCentter
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
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
      path: '/chunyuxieyi',
      name: 'chunyuxieyi',
      component: chunyuxieyi
    },
    {
      path: '/MessageNotification',
      name: 'MessageNotification',
      component: MessageNotification
    },
    {
      path: '/ChangePassword',
      name: 'ChangePassword',
      component: ChangePassword
    },
    {
      path: '/ChangePhone',
      name: 'ChangePhone',
      component: ChangePhone
    },
    {
      path: '/LocalPassword',
      name: 'LocalPassword',
      component: LocalPassword
    },
    {
      path: '/help',
      name: 'help',
      component: help
    },
    {
      path: '/declaraction',
      name: 'declaraction',
      component: declaraction
    },
    {
      path: '/useragreement',
      name: 'useragreement',
      component: useragreement
    },



    {
      path:"/*",
      redirect:"/Home"
    }
  ]
})
