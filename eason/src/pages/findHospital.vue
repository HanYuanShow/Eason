<template>
  <div id="findHospital">
    <ReturnComp routerTips="找医院" class="returnbar"></ReturnComp>
    <div class="findHospital">
      <div>
        <van-search
            v-model="value"
            placeholder="输入地区、医院、科室"
            show-action
            shape="round"
            @search="onSearch"
        >
            <div slot="action" @click="onSearch" style="color: #39D167;">搜索</div>
        </van-search>
      </div>
    <div>
      <!-- 医院筛选 -->
      <van-dropdown-menu active-color="#39D167">
        <van-dropdown-item v-model="value1" :options="option1" @change="site(option1[value1].text,option2[value2].text)"/>
        <van-dropdown-item v-model="value2" :options="option2" @change="department(option1[value1].text,option2[value2].text)"/>
      </van-dropdown-menu>
    </div>
    <div class="hospitalList">
      <HospitalList :hospitalListData="getHospitalData" :notEmpty="isEmpty"></HospitalList>
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
import ReturnComp from "../components/returnComp/returnComp";

export default {
  data() {
    return {
      value: "",
      hospitalData: [],
      rankingBool: false,
      isEmpty: false,
      value1: 0,
      value2: 0,
      activeColor:"#39D167",
      option1: [
        // { text: '全国', value: 0 },
        
      ],
      option2: [
        // { text: '综合', value: 0 },
      
      ]
    };
  },
  components: {
    HospitalList,
    ReturnComp
  },
  methods: {
    onSearch() {
      this.axios({
        url:"http://47.95.140.83:8181/hospital/queryHospital/" + this.value,
        method: "get"
      }).then((ok) => {
        this.hospitalData = ok.data;
        console.log(this.hospitalData);
      });
    },
    rankingBased() {
      this.rankingBool = !this.rankingBool;
    },
    department(site,ks){
      console.log(site,ks);
      this.axios({
        url:"http://47.95.140.83:8181/hospital/selectHospital/"+site+"/"+ks,
        method:"get",
      }).then((ok)=>{
        this.hospitalData = ok.data
        console.log(ok.data)
        // 判断数据是否为空
        if (this.hospitalData.length <= 0) {
          this.isEmpty = false;
        } else {
          this.isEmpty = true;
        }
      })
    },
    site(site,ks){
      console.log(site,ks);
      this.axios({
        url:"http://47.95.140.83:8181/hospital/selectHospital/"+site+"/"+ks,
        method:"get",
      }).then((ok)=>{
        this.hospitalData = ok.data
        console.log(ok.data)
        // 判断数据是否为空
        if (this.hospitalData.length <= 0) {
          this.isEmpty = false;
        } else {
          this.isEmpty = true;
        }
      })
    }
  },
  created() {
    this.axios({
      url: "http://47.95.140.83:8181/hospital/findHospital",
      method: "get"
    }).then((ok) => {
      // 医院数据
      this.hospitalData = ok.data.hospital;
      console.log(this.hospitalData);
      // 判断数据是否为空
      if (this.hospitalData.length <= 0) {
        this.isEmpty = false;
      } else {
        this.isEmpty = true;
      }

      // 城市数据
      var cityArr =ok.data.province
      for(var i=0;i<cityArr.length;i++){
        var obj = {text:"",value:0}
        obj.text = cityArr[i];
        obj.value = i;
        this.option1.push(obj);
      }

      var ksArr =ok.data.office
      for(var i=0;i<ksArr.length;i++){
        var obj = {text:"",value:0}
        obj.text = ksArr[i];
        obj.value = i;
        this.option2.push(obj);
      }
    });
  },
  computed: {
    getHospitalData(){
      return this.hospitalData.slice(0,10);
    }
  },
  
};
</script>

<style scoped>

.van-dropdown-menu {
    height: 42px;
    border: 1px solid #e7e7e7;
    border-right: none;
    border-left: none;
}
.van-dropdown-item--down{
  height: 360px;
  box-shadow: 0px 2px 3px #999;
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

