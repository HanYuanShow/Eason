<template>
  <div id="specialistDetail">
    <ReturnComp routerTips="名院专家" class="returnbar"></ReturnComp>
    <div class="specialist">
        <DepartmentCategory></DepartmentCategory>
    </div>
  </div>
</template>

<script>
import Select from "../components/hospitalList/select";
import ReturnComp from "../components/returnComp/returnComp";
import DepartmentCategory from "../components/SpecialistDetails/departmentCategory";

export default {
  data() {
    return {
      hospitalData: [],
      rankingBool: false,
    };
  },
  components: {
    ReturnComp,
    DepartmentCategory
  },
  
  created() {
    this.axios({
      url: "/reqHospitalData",
      method: "get"
    }).then(ok => {
      this.hospitalData = ok.data;
      console.log(this.hospitalData);
    });
  }
};
</script>

<style scoped>
.specialist {
  margin-top: 50px;
}

</style>

