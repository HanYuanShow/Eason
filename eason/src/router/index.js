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
import AllHistory from "../components/AllHistory"
import HistoryEnd from "../components/HistoryEnd"
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
import HomeTabbar from "../components/HomeTabbar";

import MyAdvice from "../pages/MyAdvice"
import NowConsult from "../components/NowConsult"
import MyDoctor from "../components/MyDoctor"
import HistoryCode from "../components/HistoryCode"
import Seek from '../pages/Seek'
import Autognosis from '../pages/autognosis'
import Symptomlist from '../components/symptomlist'
import Bodypic from '../components/bodypic'

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
import FindHospital from '../pages/findHospital'
import HospitaDetails from '../pages/hospitaDetails'
import HospitalIntro from '../pages/hospitalIntro'
import Location from '../pages/location'
import Specialist from "../pages/Specialist"
import SpecialistDetails from "../pages/SpecialistDetails"
import FindDoctor from "../pages/FindDoctor"
import DoctorConsult from '../pages/DoctorConsult'
import Question from '../pages/Question'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Question',
      name: 'Question',
      component: Question
    },
    {
      path: '/DoctorConsult',
      name: 'DoctorConsult',
      component: DoctorConsult
    },
    {
      path: '/FindDoctor',
      name: 'FindDoctor',
      component: FindDoctor
    },
    {
      path: '/findHospital',
      name: 'FindHospital',
      component: FindHospital
    },
    {
      path: '/Specialist',
      name: 'Specialist',
      component: Specialist
    },
    {
      path: '/SpecialistDetails',
      name: 'SpecialistDetails',
      component: SpecialistDetails
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/hospitaDetails/:clickId',
      name: 'HospitaDetails',
      component: HospitaDetails
    },
    {
      path:"/HistoryCode",
      name:"HistoryCode",
      component:HistoryCode
    },
    {
      path:"/AllHistory",
      name:"AllHistory",
      component:AllHistory
    },
    {
      path:"/HistoryEnd",
      name:"HistoryEnd",
      component:HistoryEnd
    },
    {
      path:"/MyAdvice",
      name:"MyAdvice",
      component:MyAdvice,
      children:[
        {
          path:"NowConsult",
          name:"NowConsult",
          component:NowConsult
        },
        {
          path:"MyDoctor",
          name:"MyDoctor",
          component:MyDoctor
        },
      ]},
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
        },
        {
          path:'BothRouter',
          name:'BothRouter',
          component:()=>import('../components/ScienceBodyRouter/BothRouter')
        },
        {
          path:'ManRouter',
          name:'ManRouter',
          component:()=>import('../components/ScienceBodyRouter/ManRouter')
        },

        
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
      path: '/DetailPage',
      name: 'DetailPage',
      component: DetailPage,
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
      path:"/HomeTabbar",
      name:"HomeTabbar",
      component:HomeTabbar
    },
    {
      path:"/*",
      redirect:"/Home"
    }
  ]

})