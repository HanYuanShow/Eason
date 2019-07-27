<template>
  <div id="specialistDetail">
    <ReturnComp :routerTips="hospitalName" class="returnbar"></ReturnComp>
    <div class="specialist">
      <div class="category">
        <DepartmentCategory category="科室" :department="department" :hid="hospitalID" @chiDoctorData="selectDoctor"></DepartmentCategory>
        <!-- <DepartmentCategory category="外科" :department="getSurgicalTitle" @departmentType="getDepartmentType"></DepartmentCategory>
        <DepartmentCategory category="其他" :department="getOtherDepartment" @departmentType="getDepartmentType"></DepartmentCategory> -->
      </div>
      <div>
        <SpecialistDoctorItem :doctorItems="doctorItemsData"></SpecialistDoctorItem>
      </div>  
    </div>
  </div>
</template>

<script>
import Select from "../components/hospitalList/select";
import ReturnComp from "../components/returnComp/returnComp";
import DepartmentCategory from "../components/SpecialistDetails/departmentCategory";
import SpecialistDoctorItem from "../components/SpecialistDetails/specialistDoctorItem";

export default {
  data() {
    return {
      hospitalData: [],
      hospitalName:"",
      hospitalID:0,
      rankingBool: false,
      // medicine: [],
      // surgical: [],
      // otherDepartment: [],
      department: [],
      doctorItemsData: [],
      depType: ""
    };
  },
  components: {
    ReturnComp,
    DepartmentCategory,
    SpecialistDoctorItem
  },

  created() {
    this.hospitalID = this.$route.query.id;
    this.axios({
      url: "http://47.95.140.83:8181/hospital/loadOfficeAndDoctor/"+this.hospitalID,
      method: "get"
    }).then((ok) => {
      console.log(ok.data);
      this.hospitalData = ok.data;
      this.doctorItemsData = this.hospitalData.docs;
      this.hospitalName = this.hospitalData.docs[0].hospital;
      this.department = this.hospitalData.offs;
      console.log(this.department);
    });
  },
  methods: {
    selectDoctor(val) {
      this.doctorItemsData = val;
      // console.log("接收子组件的传值"+this.doctorItemsData);
    }
  }
};
</script>

<style scoped>
.returnbar {
  position: fixed;
  top: 0;
  z-index: 999;
}
.specialist {
  margin-top: 50px;
}
</style>

