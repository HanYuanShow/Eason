<template>
    <div class="quan">
            <div class="header">
            <Installhead :himg="himg" :headtitle="listtitle"></Installhead>            
            </div>
            <div class="content" @click="funa()">
            <Installnav :arrb="arr[0]"></Installnav>
            </div>
            <div class="content1" @click="funb()" >
            <Installnav :arrb="arr[1]"></Installnav>
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
            himg:"../../static/images/w/b1a.png",
            listtitle:"声明",
            arr:[
                {title:"用户协议",imgages:"../../static/images/w/b2o.png"},
                {title:"隐私政策",imgages:"../../static/images/w/b2o.png"},

            ],
            
            
        }
    },
    
    methods: {
        funa(){
             this.$router.push({path:"/useragreement"}) 
        },
        funb(){
            this.$router.push({path:"/PrivacyPolicy"})
        }
     
    },
}
</script>

<style scoped>
.header{
    border-bottom: 1px solid #c9c8c8;
}
.quan{
      position: fixed;
        width: 100%;
        height: 100%;
        top: 0px;
        background-color: #f7f7f7;
}
.content1{
    border-top: 0.5PX solid #dad9d9;
}

</style>
