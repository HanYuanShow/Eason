<template>
    <div>
       <div class="header">
           <Installhead :himg="himg" :headtitle="headtitle"></Installhead>
        </div>  
        <div class="content">
            <Installlist :title="listtitle"></Installlist>
        </div>
        
        <div class="content1">
            <Installnav :arrb="obj[0]"></Installnav>
        </div>
        <div class="content1">
            <Installnav :arrb="obj[1]"></Installnav>
        </div>
        <div class="content1">
            <Installnav :arrb="obj[2]"></Installnav>
        </div>
        <div class="content1">
            <Installnav :arrb="obj[3]"></Installnav>
        </div>
        <div class="content2">
            <Installnav :arrb="obj[4]"></Installnav>
        </div>
        <div class="content">
            <Installnav :arrb="obj[5]"></Installnav>
        </div>
        <div class="content1">
            <Installnav :arrb="obj[6]"></Installnav>
        </div>
        <div class="content4">
            <Installnav :arrb="obj[7]"></Installnav>
        </div>
        <div class="content1">
            <Installnav :arrb="obj[8]"></Installnav>
        </div>

        <input type="button" value="退 出 登 录">
    </div>
</template>
<script>
import Installhead from "../components/Install/Installhead"
import Installlist from "../components/Install/Installlist"
import Installnav from "../components/Install/installnav"

export default {
    components:{
        Installhead,
        Installlist,
        Installnav
    },
    data(){
        return{
            himg:"../../static/images/w/b1a.png",
            listtitle:"计步功能",
            headtitle:"设置与帮助",
            obj:[
                {title:"消息通知" ,imgages:"../../static/images/w/b2o.png"},
                {title:"修改登录密码" ,imgages:"../../static/images/w/b2o.png"},
                {title:"修改绑定手机" ,imgages:"../../static/images/w/b2o.png"},
                {title:"手机隐私密码" ,imgages:"../../static/images/w/b2o.png"},
                {title:"清除缓存" ,imgages:"../../static/images/w/b2o.png"},
                {title:"为春雨打分" ,imgages:"../../static/images/w/b2o.png"},
                {title:"检查更新" ,action:"当前版本:8.6.5",imgages:"../../static/images/w/b2o.png"},
                {title:"帮助" ,imgages:"../../static/images/w/b2o.png"},
                {title:"声明" ,imgages:"../../static/images/w/b2o.png"},


            ],
        }
    },
}
</script>
<style scoped>
.header{
    position: fixed;
    top: 0;
    background: white;
    z-index: 99;
}
.content{
    
    margin-top: 55px;
    border-bottom: 1px solid #ebebeb;
}
 .content1{
    border-bottom: 1px solid #ebebeb;

 }
 .content2{
    margin-top: 15px;
     margin-bottom: 15px;
}
.content3{
    margin-top: 15px;
    border-bottom: 1px solid #ebebeb;

}
.content4{
    margin-top: 15px;
    border-bottom: 1px solid #ebebeb;

}
input{
    width: 300px;
    height: 40px;
    background: rgb(230, 29, 29);
    border: none;
    display: block;
    margin:15px auto;
    color: aliceblue;
}
</style>
