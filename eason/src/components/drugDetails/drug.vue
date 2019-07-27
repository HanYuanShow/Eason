<template>
<div>
    <div class="drug" v-for="(v,i) in arr" :key="i" @click="clickDrugfun(v.drugId)">
        <div class="drugLeft"  >
            <div class="left-drug">
                <img :src="v.drugImg" />
            </div>
            
        </div>
        <div class="drugRright">
            <span class="span1">{{v.drugName}} {{v.drugStandard}}</span>
            <p>{{v.drugFunction}}</p>
            <span class="span2">￥{{v.drugPrice}}</span>
        </div>
    </div>
</div>
    
</template>
<script>

export default {
    data(){
        return{
            value:"",
            add:""
        }
    },
    props:{
        arr:"",
        drugId:""
    },
    methods:{
        clickDrugfun(i){
            this.$router.push("/shopStore?drugid="+i)
            console.log(i)
            // this.axios({
            //     url:"http://47.112.208.93:8181/drug/findallbyid?drugid="+i,
            //     method:"get"
            // }).then((ok)=>{
            //     this.add=ok.data;
            //     console.log(this.add)
            // })
        }
    }
    
}
</script>
<style scoped>
.drug{
        border-bottom:1px solid #f4f4f4;
        height:130px;
        display:flex;
        justify-content: space-between;
        align-items: center;
        margin-top:15px;
        padding: 0 16px;
}
.drug img{
   width:90px;
}
.drugLeft{
    width:30%;
}
.left-drug{
    border:1px solid #f4f4f4;
    width:102px;
    height:104px;
    line-height: 104px;
}
.drugRright{
    width:70%;
}
.span1{
    font-weight:600;
    font-size:15px;
    color:#323232;
}
.span2{
    color: red;
    font-size: 12px;

}
.drugRright p{
    color: #bbbbbb;
    font-size: 12px;
}
</style>
