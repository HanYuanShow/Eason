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
  }
};
</script>   

<style scoped>
</style>
