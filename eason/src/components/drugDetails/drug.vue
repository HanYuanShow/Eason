<template>
    <div class="drug">
        <div class="drugLeft"  @click="clickDrugfun()">
            <div class="left-drug">
                <img :src="url" />
            </div>
            
        </div>
        <div class="drugRright"  @click="clickDrugfun()">
            <span class="span1">{{name}} {{standards}}</span>
            <p>{{content}}</p>
            <span class="span2">￥{{price}}</span>
        </div>
    </div>
</template>
<script>

export default {
    data(){
        return{
            value:""
        }
    },
    props:{
        url:String,
        name:String,
        content:String,
        standards:String,
        price:String
    },
    methods:{
        clickDrugfun(){
            this.$router.push("/shopStore")
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
