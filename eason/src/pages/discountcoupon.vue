<template>
    <div class="quan">
       <div class="header">
           <Installhead :himg="himg" :headtitle="listtitle"></Installhead>
        </div> 
        
        <div class="content1" @click="funa()">
            <Installnav :arrb="obj[0]"></Installnav>
        </div>
        
        <div class="no">
            <div class="img">
                <img :src="imgs" alt="">
            </div>
            <p>{{you}}</p>
        </div>
    </div>
</template>
<script>
import Installhead from "../components/Install/Installhead"
import Installnav from "../components/Install/installnav"

export default {
    components:{
        Installhead,
         Installnav
        
    },
    data(){
        return{
            imgs:"../../static/w/ay9.png",
            himg:"../../static/images/w/b1a.png",
            you:"您还没有优惠券",
            listtitle:"我的优惠券",
             obj:[
                {title:"我的服务优惠券",action:"去兑换" ,imgages:"../../static/images/w/b2o.png"},]
        }
    },
    methods: {
        funa(){
            this.$router.push({path:"/Exchangecouponcode"})
        }
    },
}
</script>
<style scoped>
.quan{
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    background: #faf9f9;
}
.content1{
    margin-top: 15px;
}
.no{
    width: 130px;
    height: 100px;
    margin: 50% auto;
}
.img{
    width: 75px;
    height: 50px;
    margin-left: 25px;
}
img{
    width: 100%;
    height: 100%;
}
.no p{
    font-size: 15px;
    color: darkgray;
    margin-top: 10px;
    margin-left: 10px;
}
</style>
