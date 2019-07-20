<template>
  <div class="hospitalDetail">
    <ReturnComp :routerTips="hospitalName" class="returnbar"></ReturnComp>
    <div class="hospitalDetailCon">
      <HospitalDetailHeader :hospitalRankingList="rankingList" :hospitalName="hospitalName"></HospitalDetailHeader>
      <RegisteredWay :registeredWayData="registeredWay"></RegisteredWay>
      <OnlineDoctor :onlineDoctor="doctorOnLine"></OnlineDoctor>
      <HospitalIntroduction :hospitalIntro="hospitalIntroCon" :id="hospitalId"></HospitalIntroduction>  
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
      registeredWay:[],
      rankingList:[],
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
    this.axios({
      url:"/reqHospitalData/hospitalDetail",
      method:"get"
    }).then((ok)=>{
      this.hospitalDetailData = ok.data;
      this.rankingList = ok.data.ranking;
      this.hospitalName = ok.data.hospitalName;
      this.hospitalId = ok.data.id;
      this.registeredWay = ok.data.registeredWay;
      this.doctorOnLine = ok.data.onlineDoctor;
      this.hospitalIntroCon = ok.data.HospitalIntroduction;  
      console.log(this.rankingList);
    })
  }
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

