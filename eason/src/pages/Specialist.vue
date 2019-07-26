<template>
  <div id="expert">
    <ReturnComp routerTips="名院专家" class="returnbar"></ReturnComp>
    <div class="expert">
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
        <div class="expertBanner"><img src="../../static/images/w/akv.jpg" alt=""></div>
        <div>
            <!-- 医院筛选 -->
            <Select></Select>
        </div>
        <ul>
            <li class="hospitalList" v-for="(v,i) in hospitalData" :key="i">{{v.hospitalName}}</li>
        </ul>
    </div>
  </div>
</template>

<script>
import Select from "../components/hospitalList/select";
import ReturnComp from "../components/returnComp/returnComp";

export default {
  data() {
    return {
      value: "",
      hospitalData: [],
      rankingBool: false
    };
  },
  components: {
    Select,
    ReturnComp
  },

  created() {
    this.axios({
      url: "/reqHospitalData",
      method: "get"
    }).then(ok => {
      this.hospitalData = ok.data;
      console.log(this.hospitalData);
    });
  },
  methods: {
    onSearch() {
      this.axios({
        url:
          "http://47.112.208.93:8181/doctorinfor/findall?string=" + this.value,
        method: "get"
      }).then(ok => {
        console.log(ok);
      });
    },
    hospitalDoctor(id) {
      this.$router.push("/SpecialistDetails/" + id);
    }
  }
};
</script>

<style scoped>
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

