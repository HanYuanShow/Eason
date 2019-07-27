<template>
  <div class="hospitalDetail">
    <ReturnComp :routerTips="hospitalName" class="returnbar"></ReturnComp>
    <div class="hospitalDetailCon">
      <HospitalDetailHeader :hospitalRankingList="rankingList" :hospitalName="hospitalName"></HospitalDetailHeader>
      <RegisteredWay></RegisteredWay>
      <OnlineDoctor :onlineDoctor="filterOnlineDoctor"></OnlineDoctor>
      <HospitalIntroduction :hospitalIntro="hospitalIntroCon" :hID="hospitalId"></HospitalIntroduction>  
    </div>
  </div>
</template>

<script>
import HospitalDetailHeader from "../components/hospitalDetail/hospitalDetailHeader"
import RegisteredWay from "../components/hospitalDetail/registeredWay"
import OnlineDoctor from "../components/hospitalDetail/onlineDoctor"
import HospitalIntroduction from "../components/hospitalDetail/hospitalIntroduction"
import ReturnComp from "../components/returnComp/returnComp";

export default {
  data() {
    return {
      hospitalDetailData:{},
      hospitalIntroCon:"",
      doctorOnLine:[],
      // registeredWay:[],
      rankingList:["暂无排名数据"],
      hospitalName:"",
      hospitalId:0
    }
  },
  components:{
    HospitalDetailHeader,
    RegisteredWay,
    OnlineDoctor,
    HospitalIntroduction,
    ReturnComp
  },
  created() {
    // 获取路由传过来的医院id
    var hospitalID = this.$route.params.clickId
    console.log("在详情页获取到的id："+hospitalID);
    this.axios({
      url:"http://47.95.140.83:8181/hospital/loadHospitalAndDoctor/"+hospitalID,
      method:"get"
    }).then((ok)=>{
      this.hospitalDetailData = ok.data[0];
      this.hospitalName = ok.data[0].name;  
      this.hospitalId = ok.data[0].id;
      // this.registeredWay = ok.data.registeredWay;
      this.doctorOnLine = ok.data[0].doctors;
      this.hospitalIntroCon = ok.data[0].info;
      // console.log(this.hospitalId);
    })
  },
  computed: {
    filterOnlineDoctor(){
      return this.doctorOnLine.slice(0,2)
    }
  },
}

</script>

<style scoped>
.hospitalDetail{
  background: #f1f1f1;
  margin-top: 50px;
}
.returnbar {
  position: fixed;
  top: 0;
  z-index: 999;
}
</style>

