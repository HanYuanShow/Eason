<template>
  <div>
    
    <HomeSeek></HomeSeek>
    <FindDoctor></FindDoctor>
    <SencondNav></SencondNav>
    <Swipe></Swipe>
    <HotSale></HotSale>
    <HotService></HotService>
    <DoctotTopic></DoctotTopic>
    <GoodDiscuss></GoodDiscuss>
    <LectrueRoom></LectrueRoom>
    <Tool></Tool>
    <HomeTabbar></HomeTabbar>
  </div>
</template>

<script>
import HomeSeek from "../components/HomeSeek"
import FindDoctor from "../components/FindDoctor"
import SencondNav from "../components/SencondNav"
import Swipe from "../components/Swipe"
import HotSale from "../components/HotSale"
import HotService from "../components/HotService"
import DoctotTopic from "../components/DoctorTopic"
import GoodDiscuss from "../components/GoodDiscuss"
import LectrueRoom from "../components/LectureRoom"
import Tool from "../components/Tool"
import HomeTabbar from "../components/HomeTabbar"
export default {
  data() {
    return {
  
    }
  },
  methods: {

  },
  components:{
      HomeSeek,
      FindDoctor,
      SencondNav,
      Swipe,
      HotSale,
      HotService,
      DoctotTopic,
      GoodDiscuss,
      LectrueRoom,
      Tool,
      HomeTabbar
  }
};
</script>   

<style scoped>
</style>
