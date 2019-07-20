<template>
  <div id="findHospital">
    <ReturnComp></ReturnComp>
    <div>
      <HospitalSearch></HospitalSearch>
    </div>
    <div>
      <!-- 医院筛选 -->
      <Select></Select>
    </div>
    <div class="hospitalList">
      <HospitalList :hospitalListData="hospitalData"></HospitalList>
    </div>
    <!-- 排名依据 -->
    <div class="rankingBased">
      <div class="rankingCon" @click="rankingBased()">
        <span>排名依据</span>
        <img src="../../static/images/w/h4.png" alt="">
      </div>
      <div class="basedOn" v-if="rankingBool">
        <p>医院排名依次参考如下资料：</p>
        <p>(1)  复旦大学医院管理研究所《中国医院及专科声誉排行榜》</p>
        <p>(2)  政府卫生部门评定的临床重点专科和教育部门评定的重点学科分布</p>
        <p>(3)  医院对应科室的高级职称人数</p>
        <p>(4)  医院对应科室的床位数</p>
      </div>
    </div>
  </div>
</template>

<script>
import HospitalList from "../components/hospitalList/hospitalList"
import Select from "../components/hospitalList/select"
import HospitalSearch from "../components/hospitalList/hospitalSearch"
import ReturnComp from "../components/returnComp/returnComp"

export default {
  data() {
    return {
      hospitalData:[],
      rankingBool:false,
    }
  },
  components:{
    HospitalList,
    Select,
    HospitalSearch,
    ReturnComp
  },
  methods: {
    rankingBased(){
      this.rankingBool = !this.rankingBool;
    }
  },
  created() {
    this.axios({
      url:"/reqHospitalData",
      method:"get"
    }).then((ok)=>{
      console.log(ok);
      this.hospitalData = ok.data;
    })
  }
}
</script>

<style scoped>
.rankingBased{
  padding: 0 15px;
}
.rankingCon{
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.rankingCon span{
  font-size: 14px;
  color: #999;
  text-align: right;
  padding: 15px 5px 15px 15px;
}
.rankingCon img{
  width: 14px;
  height: 14px;
}
.basedOn{
  padding: 10px;
  background: #f9f9f9;
}
.basedOn p{
  font-size: 12px;
  color: #999;
  line-height: 19px;
}
</style>

