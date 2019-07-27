<template>
    <div class="buyMedicines">
        <div class="seek-medicine">
            <Nav1>{{title}}</Nav1>
            <div class="seek-input">
                  <!-- <input type="text" name="search" placeholder="请输入药品名"/> -->
                  <van-search placeholder="请输入药品名" v-model="value" />
            </div>
          
          
        </div>
        <!-- 科类 -->
        <div class="con">
            <DrugList  class="cop" v-for="(v,i) in allDrugType" :key="i" :typeid="v.typeId" :urls="v.typeImg" :title="v.typeName"></DrugList>
        </div>
        <!-- 基本药品介绍 -->
        <div class="drug-cons">
              <div class="drug-left">
                  <!-- 通过遍历获取数据 -->
                <Medicine class="drugItrm" v-for="(v,i) in allDrugArr" :drugId="v.drugId" :key="i" :drugImg="v.drugImg" :drugName="v.drugName" :drugStandard="v.drugStandard" :drugPrice="v.drugPrice"></Medicine>
            </div>
        </div>
      
    </div>
</template>
<script>
import Nav1 from "../components/nav1"
import DrugList from "../components/drugList"
import Medicine from "../components/medicine"
export default {
      data(){
        return{
            value:"",
            title:"快速购药",
            itemList:{},
            medicineList:[],
            arr:[],
            allDrugArr:[],
            allDrugType:[],
            drugId:""
        }
    },
    components:{
        Nav1,
        DrugList,
        Medicine
    },
    created(){
        this.axios({
            url:"http://47.95.140.83:8181/drug/findall",
            method:"get"
        }).then((ok)=>{
            this.allDrugArr=ok.data.druginfor;
             this.allDrugType=ok.data.drugtype
            console.log(ok.data)
        })
        this.axios({
            url:"/link/data",
            method:"get"
        }).then((ok)=>{
            this.arr=ok.data.buyMedicine[0];
            this.itemList = this.arr.drugList[0];
            this.medicineList=ok.data.medicines;

        })
    },
    
  
}
</script>
<style scoped>
.drugItrm{float: left;}
.buyMedicines{
    overflow: hidden;
}
.seek-input{
    margin-top:26px;
  
  
}
.van-search__content{
     background:#f4f4f4;
     height:50px;
}
.van-cell{
    /* font-size:24px; */
    line-height: 50px;
    color:#d5d5d5;
}
.van-field__left-icon .van-icon{
    font-size: 24px;
    
}
/* 八个科室的样式 */
.cop{
    float: left;
    margin-bottom: 20px;
}
.con{
     border-bottom:6px solid #f1f1f1;
     overflow: hidden;
     padding: 0 21px;
     text-align: center;
     margin: 8px 0;
}
/* 基本药品介绍 */
.drug-cons{
   padding:0 13px;
    overflow: hidden;
}
.drug-left{
    float:left;
    /* width: 50%; */
}
</style>
