<template>
    <div class="quan">
        <div class="header">
          <Installhead :himg="himg" :headtitle="listtitle" :righttitle="headtitle"></Installhead> 
        </div>
        <div class="content">
            <MmessageCenterNav :arrb="obj"></MmessageCenterNav>
        </div>
        <div class="text">
            <div class="textcenter">
                内容
            </div>
            <p>时间</p>
        </div>
    </div>
</template>
<script>
import Installhead from "../components/Install/Installhead"
import MmessageCenterNav from "../components/MessageCenter/MmessageCenterNav"

export default {
    components:{
        Installhead,
        MmessageCenterNav,
    },
    data(){
        return{
            himg:"../../static/images/w/b1a.png",
            listtitle:"消息中心",
            headtitle:"设为已读",
            obj:[
                {images:"../../static/images/w/awp.png" ,title:"春雨公告"},
                {images:"../../static/images/w/awp.png" ,title:"消息互动"},
                {images:"../../static/images/w/au5.png" ,title:"为您推荐"},

            ],
            
        }
    },
       created() {
          let id = localStorage.getItem("userId");
        if(id==null){
            this.$router.push("/logon")
        }
    },
}
</script>
<style scoped>
.quan{
      position: fixed;
        width: 100%;
        height: 100%;
        top: 0px;
        background-color: #f7f7f7;
}
.header{
    border-bottom: 1px solid #b9bab9;
}
.text{
    width: 100%;
    height: px;
    background: white;
    margin-top: 15px;
}
.textcenter{
    text-align: center;
    padding-top: 15px;
    color:#b9bab9;
}
p{
    /* width: 100%; */
    height: 40px;
    padding-left: 15px;
    color:#b9bab9;

}
</style>


