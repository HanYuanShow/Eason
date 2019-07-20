<template>
  <div>
    <div>
      <HomeSeek></HomeSeek>
      <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
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
      </van-pull-refresh>
    </div>
  </div>
</template>

<script>
import HomeSeek from "../components/HomeSeek";
import FindDoctor from "../components/FindDoctor";
import SencondNav from "../components/SencondNav";
import Swipe from "../components/Swipe";
import HotSale from "../components/HotSale";
import HotService from "../components/HotService";
import DoctotTopic from "../components/DoctorTopic";
import GoodDiscuss from "../components/GoodDiscuss";
import LectrueRoom from "../components/LectureRoom";
import Tool from "../components/Tool";
import HomeTabbar from "../components/HomeTabbar";
export default {
  data() {
    return {
      isLoading: false
    };
  },
  methods: {
    onRefresh() {
      setTimeout(() => {
        this.$toast("刷新成功");
        this.isLoading = false;
        this.count++;
      }, 500);
    }
  },
  components: {
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
