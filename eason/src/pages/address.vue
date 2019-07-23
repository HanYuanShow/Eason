<template>
<div class="adds">
    <div class="address">
        <div class="addressGo" >
            <img src="../../static/images/w/agf.png" @click="gofun()"/>
            <span @click="gofun()">返回</span>
        </div>
        <div class="addressGet" >
            <span>收货地址</span>
        </div>
    </div>
    <div>
        <div class="buildAdress" @click="addressFun()">
            <img src="../../static/images/w/aj5.png" >
            <span  @click="addressFun()">新建地址</span>
        </div>
        <div class="newAdress"></div>
        <div class="newbody"></div>
    </div>
    <div class="sure">
        <div class="sureAdsress">
            <p>确定</p>
        </div> 
    </div>
</div>
    
</template>
<script>
export default {
    methods:{
        gofun(){
            this.$router.go(-1);
        },
        addressFun(){
            this.$router.push("/newAdress")
        }
    }
}
</script>
<style scoped>
 .address{
     width:100%;
    height:62px;
    position:fixed;
    top:0px;
    border-bottom: 1px solid #f4f4f4;
    line-height: 62px;
    background:#fbfbfb;
 }
 .addressGo{
    float:left;
    width: 40%;
 }
 .addressGet{
    float:left;
 }
 .address img{
    width: 16px;
    height: 16px;
    /* top: 50%; */
    /* position: absolute; */
     padding-left:16px;
  
 }
 .addressGo span{
     font-size: 16px;
    color: #6bce72;
    font-weight:600;
 }
 .addressGet span{
     /* text-align: center; */
     margin:0 auto;

 }
.buildAdress{
    text-align: center;
     background:#fbfbfb;
     border-bottom: 1px solid #f4f4f4;
     height:44px;
     margin-top:63px;
     line-height:44px;
}
.buildAdress img{
    vertical-align: center;
    margin-right:8px;
    width:16px;
    height:16px;
}
.buildAdress span{
    vertical-align: center;
    font-size:16px;
}
.newbody{
    height:480px;
    background:#f3f3f3;
}
.sure{
    height:50px;
    background:#ffffff;
    position:fixed;
    bottom:0;
    margin:10px;
}
.sureAdsress{
    width:350px;
    height:40px;
    line-height: 40px;
    background:#6bce72;
    text-align: center
}
.srue p{
    line-height: 40px;
    color:#fbfdfb;
    font-size: 16px;
}
</style>
