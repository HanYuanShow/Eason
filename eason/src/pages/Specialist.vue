<template>
  <div id="expert">
    <ReturnComp routerTips="名院专家" class="returnbar"></ReturnComp>
    <div class="expert">
        <div>
          <van-search
            v-model="value"
            placeholder="输入省份、医院、科室、医生"
            show-action
            shape="round"
            @search="onSearch"
          >
            <div slot="action" @click="onSearch" style="color: #39D167;">搜索</div>
        </van-search>
        </div>
        <div class="expertBanner"><img src="../../static/images/w/akv.jpg" alt=""></div>
        <div>
            <!-- 医院筛选 -->
          <van-dropdown-menu active-color="#39D167">
            <van-dropdown-item v-model="value1" :options="option1" @change="site(option1[value1].text,option2[value2].text)"/>
            <van-dropdown-item v-model="value2" :options="option2" @change="department(option1[value1].text,option2[value2].text)"/>
          </van-dropdown-menu>
        </div>
        <ul v-if="bool">
            <li class="hospitalList" @click="hospitalDoctor(v.id)" v-for="(v,i) in hospitalData" :key="i">{{v.name}}</li>
        </ul>
        <ul v-else>
          <SpecialistDoctorItem  :doctorItems="searchData"></SpecialistDoctorItem>
        </ul>
    </div>
  </div>
</template>

<script>

import ReturnComp from "../components/returnComp/returnComp";
import SpecialistDoctorItem from "../components/SpecialistDetails/specialistDoctorItem";

export default {
  data() {
    return {
      value: "",
      hospitalData: [],
      rankingBool: false,
      bool:true,
      searchData:[],
      value1: 0,
      value2: 0,
      activeColor:"#39D167",
      option1: [
        
      ],
      option2: [
       
      ]
    };
  },
  components: {
    ReturnComp,
    SpecialistDoctorItem
  },

  created() {
    this.axios({
      url: "http://47.112.208.93:8181/hospital/findHospital",
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
  methods: {
    onSearch() {
      this.axios({
        url:"http://10.12.156.83:8181/hospital/queryDoctor/" + this.value,
        method: "get"
      }).then(ok => {
        this.searchData = ok.data;
        if(ok.data.length!==0){
          this.bool=false
        }
        console.log(ok);
      });
    },
    hospitalDoctor(id) {
      console.log(id)
      this.$router.push("/SpecialistDetails?id=" + id);
    },
    department(site,ks){
      console.log(site,ks);
      this.axios({
        url:"http://10.12.156.83:8181/hospital/selectHospital/"+site+"/"+ks,
        method:"get",
      }).then((ok)=>{
        this.hospitalData = ok.data;
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
        url:"http://10.12.156.83:8181/hospital/selectHospital/"+site+"/"+ks,
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
  }
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
  height: 320px;
  box-shadow: 0px 2px 3px #999;
}
.expert {
  margin-top: 50px;
}
.expert ul {
  padding: 10px 15px;
}
.hospitalList {
  padding: 15px 0;
  border-bottom: 1px solid #e7e7e7;
}
.expertBanner img {
  display: block;
  width: 100%;
}
.returnbar {
  position: fixed;
  top: 0;
  z-index: 999;
}
</style>

