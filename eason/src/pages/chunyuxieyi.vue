<template>
<div>
            <div class="header">
                <Installhead :himg="himg" :headtitle="listtitle" :righttitle="headtitle" :dig="home"></Installhead>         
            </div>
            <div class="content">
                <installnav :arrb="arr[0]"></installnav>
            </div>
            <div class="content">
                <installnav :arrb="arr[1]"></installnav>
            </div>
  </div>   
</template>
<script>
import Installhead from "../components/Install/Installhead"
import installnav from "../components/Install/installnav"

export default {
    components:{
        Installhead,
        installnav
    },
    data(){
        return{
            himg:"../../static/images/w/b1a.png",
            listtitle:"用户协议和隐私权政策",
            // home:"X"
            arr:[
                {title:"用户协议" ,imgages:"../../static/images/w/ajr.png"},
                {title:"隐私协议" ,imgages:"../../static/images/w/ajr.png"},

            ]
        }
    },
}
</script>
<style scoped>
.content{
    border-top: 1px solid #e6e5e5;
}
</style>
