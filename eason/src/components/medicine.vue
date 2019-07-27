<template>
    <div class="drug-box" @click="funMedicine(drugId)">
        <div class="drug-con" >
             <img :src="drugImg" />
             <div class="drugP">
                    <p>{{drugName}}</p>
                    <p>{{drugStandard}}</p>
             </div>
            <span>￥{{drugPrice}}</span>
        </div>
       
    </div>
</template>
<script>
export default {
    data(){
       return{
            allDrugArr:[],
       }
    },
    props:{
        drugImg:String,
        drugName:String,
        drugStandard:String,
        drugPrice:String,
        drugId:""
    },
    methods:{
    funMedicine(i){
        this.$router.push("/shopStore?drugid="+i)
        console.log(i)
    }

    }
}
</script>
<style scoped>
.drug-box{
      border:1px solid #f4f4f4;
    height:240px;
    margin:12px;
    text-align:center;
}
.drug-con{
    width:50%;
    text-align:center;
}

.drug-con p{
    font-size:13px;
    color:#1a1a1a;
}
.drug-con span{
    color:#ec6b43;
    font-size:12px;
}
.drug-con img{
    width:130px;
    height:72px;
    display:inline-block;
    margin-top: 16px;
    padding-left: 10px
}
.drugP{
     margin-top:14px;
}
.drugP p{
    font-size:16px;
    color:#1a1a1a;
   line-height:36px;
    white-space: nowrap;
    padding-left: 10px
}
.drug-con span{
    color:#f09a7e;
    font-size:16px;
    margin-top:14px;
    display:block
}
</style>
