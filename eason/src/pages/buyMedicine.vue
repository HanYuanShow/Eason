<template>
    <div>
        <div class="seek-medicine">
            <Nav></Nav>
            <div class="seek-input">
                  <!-- <input type="text" name="search" placeholder="请输入药品名"/> -->
                  <van-search placeholder="请输入药品名" v-model="value" />
            </div>
          
        </div>
        <!-- 科类 -->
        <div class="con">
            <DrugList  class="cop" v-for="(v,i) in arr.drugList" :key="i" :url="v.url" :title="v.title"></DrugList>
        </div>
        <!-- 基本药品介绍 -->
        <div clss="drug-cons">
              <div class="drug-left" >
                  <!-- 通过遍历获取数据 -->
                <Medicine v-for="(v,i) in arr.medicine" :key="i" :url="v.url" :medicineBriefa="v.medicineBrief.name" :medicineBriefb="v.medicineBrief.standards" :price="v.price"></Medicine>
            </div>
            <div class="drug-left">
                <Medicine v-for="(v,i) in arr.medicine" :key="i" :url="v.url" :medicineBriefa="v.medicineBrief.name" :medicineBriefb="v.medicineBrief.standards" :price="v.price"></Medicine>
            </div>
        </div>
      
    </div>
</template>
<script>
import Nav from "../components/nav"
import DrugList from "../components/drugList"
import Medicine from "../components/medicine"
export default {
      data(){
        return{
            value:"",
            arr:[]
        }
    },
    components:{
        Nav,
        DrugList,
        Medicine

    },
    created(){
        this.axios({
            url:"/link/data",
            method:"get"
        }).then((ok)=>{
            this.arr=ok.data.buyMedicine[0]
            console.log(this.arr)
        })
    }
  
}
</script>
<style scoped>
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
    /* width: 100%; */
}
.con{
     border-bottom:6px solid #f1f1f1;
     overflow: hidden;
     padding: 0 21px;
     margin:0 auto;
}
/* 基本药品介绍 */
.drug-cons{
   
    overflow: hidden;
}
.drug-left{
    float:left;
     overflow: hidden;
}
</style>
