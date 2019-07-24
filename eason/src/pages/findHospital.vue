<template>
  <div id="findHospital">
    <ReturnComp routerTips="找医院" class="returnbar"></ReturnComp>
    <div class="findHospital">
      <div>
        <van-search
            v-model="value"
            placeholder="输入地区、医院、科室、疾病"
            show-action
            shape="round"
            @search="onSearch"
        >
            <div slot="action" @click="onSearch" style="color: #39D167;">搜索</div>
        </van-search>
      </div>
    <div>
      <!-- 医院筛选 -->
      <Select></Select>
    </div>
    <div class="hospitalList">
      <HospitalList :hospitalListData="hospitalData"></HospitalList>
      <!-- <div v-else class="emptycon">暂无数据。。。</div> -->
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
  </div>
</template>

<script>
import HospitalList from "../components/hospitalList/hospitalList";
import Select from "../components/hospitalList/select";
import ReturnComp from "../components/returnComp/returnComp";

export default {
  data() {
    return {
      value: "",
      hospitalData: [],
      rankingBool: false,
      isEmpty: false
    };
  },
  components: {
    HospitalList,
    Select,
    ReturnComp
  },
  methods: {
    onSearch() {
      this.axios({
        url:"http://47.112.208.93:8181/doctorinfor/findall?string=" + this.value,
        method: "get"
      }).then((ok) => {
        this.hospitalData = ok.data;
        console.log(this.hospitalData);
      });
    },
    rankingBased() {
      this.rankingBool = !this.rankingBool;
    }
  },
  created() {
    this.axios({
      url: "/reqHospitalData",
      method: "get"
    }).then((ok) => {
      // console.log(ok);
      this.hospitalData = ok.data;
    });
  },
  // watch: {
  //   hospitalData(){
  //     if(this.hospitalData.length<0){
  //       console.log(this.hospitalData.length)
  //       this.isEmpty = true;
  //     }else{
  //       this.isEmpty = false;
  //     }
  //   }
  // },
};
</script>

<style scoped>
.emptycon {
  padding: 15px;
  width: 100%;
  height: 150px;
  text-align: center;
  line-height: 150px;
  box-sizing: border-box;
}
.findHospital {
  margin-top: 50px;
}
.rankingBased {
  padding: 0 15px;
}
.rankingCon {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.rankingCon span {
  font-size: 14px;
  color: #999;
  text-align: right;
  padding: 15px 5px 15px 15px;
}
.rankingCon img {
  width: 14px;
  height: 14px;
}
.basedOn {
  padding: 10px;
  background: #f9f9f9;
}
.basedOn p {
  font-size: 12px;
  color: #999;
  line-height: 19px;
}
.returnbar {
  position: fixed;
  top: 0;
  z-index: 999;
}
</style>

