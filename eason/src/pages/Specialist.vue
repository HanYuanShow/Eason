<template>
  <div id="expert">
    <ReturnComp routerTips="名院专家" class="returnbar"></ReturnComp>
    <div class="expert">
        <div>
            <HospitalSearch></HospitalSearch>
        </div>
        <div class="expertBanner"><img src="../../static/images/w/akv.jpg" alt=""></div>
        <div>
            <!-- 医院筛选 -->
            <Select></Select>
        </div>
        <ul>
            <li class="hospitalList" @click="hospitalDoctor(v.id)" v-for="(v,i) in hospitalData" :key="i">{{v.hospitalName}}</li>
        </ul>
    </div>
  </div>
</template>

<script>
import Select from "../components/hospitalList/select";
import HospitalSearch from "../components/hospitalList/hospitalSearch";
import ReturnComp from "../components/returnComp/returnComp";

export default {
  data() {
    return {
      hospitalData: [],
      rankingBool: false,
    };
  },
  components: {
    Select,
    HospitalSearch,
    ReturnComp
  },
  
  created() {
    this.axios({
      url: "/reqHospitalData/search",
      method: "get"
    }).then(ok => {
      this.hospitalData = ok.data.hospital;
      console.log(this.hospitalData);
    });
  },
  methods: {
    hospitalDoctor(id){
      this.$router.push("/SpecialistDetails/"+id);
    }
  },
};
</script>

<style scoped>
.expert {
  margin-top: 50px;
}
.expert ul{
  padding: 10px 15px;
}
.hospitalList{
  padding: 15px 0;
  border-bottom: 1px solid #E7E7E7;
}
.expertBanner img{
    display: block;
    width: 100%;
}
.returnbar {
  position: fixed;
  top: 0;
  z-index: 999;
}
</style>

