<template>
  <div id="specialistDetail">
    <ReturnComp :routerTips="hospitalName" class="returnbar"></ReturnComp>
    <div class="specialist">
      <div class="category">
        <DepartmentCategory category="内科" :department="getMedicineTitle" @departmentType="getDepartmentType"></DepartmentCategory>
        <DepartmentCategory category="外科" :department="getSurgicalTitle" @departmentType="getDepartmentType"></DepartmentCategory>
        <DepartmentCategory category="其他" :department="getOtherDepartment" @departmentType="getDepartmentType"></DepartmentCategory>
      </div>
      <div>
        <SpecialistDoctorItem :doctorItems="getAllDoctorData"></SpecialistDoctorItem>
      </div>  
    </div>
  </div>
</template>

<script>
import Select from "../components/hospitalList/select";
import HospitalSearch from "../components/hospitalList/hospitalSearch";
import ReturnComp from "../components/returnComp/returnComp";
import DepartmentCategory from "../components/SpecialistDetails/departmentCategory";
import SpecialistDoctorItem from "../components/SpecialistDetails/specialistDoctorItem";

export default {
  data() {
    return {
      hospitalData: [],
      hospitalName:"",
      rankingBool: false,
      medicine: [],
      surgical: [],
      otherDepartment: [],
      department: {},
      doctorItemsData: {},
      depType: ""
    };
  },
  components: {
    ReturnComp,
    DepartmentCategory,
    SpecialistDoctorItem
  },

  created() {
    this.axios({
      url: "/reqHospitalData/search",
      method: "get"
    }).then((ok) => {
      let hID = this.$route.params.id;
      this.hospitalData = ok.data.hospital;
      console.log(this.hospitalData);
      for(let i in this.hospitalData){
        // console.log(this.hospitalData[i])
        if(this.hospitalData[i].id==hID){
          this.hospitalName = this.hospitalData[i].hospitalName;
          this.medicine = this.hospitalData[i].administrativeOffice.medicine;
          this.surgical = this.hospitalData[i].administrativeOffice.surgeon;
          this.otherDepartment = this.hospitalData[i].administrativeOffice.otherDepartment;
          this.department = this.hospitalData[i].administrativeOffice;
        }
      } 
    });
  },
  methods: {
    getDepartmentType(val) {
      this.depType = val;
    }
  },
  computed: {
    getMedicineTitle() {
      let medicineTitle = [];
      for (let i in this.medicine) {
        medicineTitle.push(this.medicine[i].title);
      }
      // console.log(medicineTitle);
      return medicineTitle;
    },
    getSurgicalTitle() {
      let medicineTitle = [];
      for (let i in this.surgical) {
        medicineTitle.push(this.surgical[i].title);
      }
      return medicineTitle;
    },
    getOtherDepartment() {
      let medicineTitle = [];
      for (let i in this.otherDepartment) {
        medicineTitle.push(this.otherDepartment[i].title);
      }
      return medicineTitle;
    },
    getAllDoctorData() {
      if (this.depType == "") {
        // 遍历出所有的医生，是个二维数组
        let getDoctor = [];
        for (let i in this.department) {
          for (let j in this.department[i]) {  
            getDoctor.push(this.department[i][j].doctor); 
          }
        }
        // 遍历二维数组，使之变成简单的数组对象
        let allDoctor = [];
        for (let i in getDoctor) {
          for (let j in getDoctor[i]) {
            allDoctor.push(getDoctor[i][j]);
          }
        }
        // console.log(allDoctor);
        return allDoctor;
      } else {
        // 遍历出所有的医生，是个二维数组
        let getDoctor = [];
        for (let i in this.department) {
          for (let j in this.department[i]) {
            if (this.depType == this.department[i][j].title) {
              getDoctor.push(this.department[i][j].doctor);
            }
          }
        }
        // 遍历二维数组，使之变成简单的数组对象
        let allDoctor = [];
        for (let i in getDoctor) {
          for (let j in getDoctor[i]) {
            allDoctor.push(getDoctor[i][j]);
          }
        }
        // console.log(allDoctor);
        return allDoctor;
      }
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

