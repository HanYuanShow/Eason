<template>
    <div class="quan">
       <div class="header">
           <Installhead :himg="himg" :headtitle="headtitle"></Installhead>
        </div>  
        <div class="content">
            <Installlist :title="listtitle"></Installlist>
        </div>
        
        <div class="content1" @click="funa()">
            <Installnav :arrb="obj[0]"></Installnav>
        </div>
        <div class="content1" @click="funb()">
            <Installnav :arrb="obj[1]"></Installnav>
        </div>
        <div class="content1" @click="func()">
            <Installnav :arrb="obj[2]"></Installnav>
        </div>
        <div class="content1" @click="fund()">
            <Installnav :arrb="obj[3]"></Installnav>
        </div>
        <div class="content2" @click="cleal()">
            <Installnav :arrb="obj[4]"></Installnav>
        </div>
        <div class="content"  @click="dafen()">
            <Installnav :arrb="obj[5]"></Installnav>
        </div>
        <div class="content1"  @click="gengxing()">
            <Installnav :arrb="obj[6]"></Installnav>
        </div>
        <div class="content4" @click="fune()">
            <Installnav :arrb="obj[7]"></Installnav>
        </div>
        <div class="content1"  @click="funf()">
            <Installnav :arrb="obj[8]"></Installnav>
        </div>

        <input type="button" value="退 出 登 录" @click="quit()">
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
    methods: {
        funa(){
           this.$router.push({ path:"/MessageNotification"});
        },
        funb(){
            this.$router.push({path:"/ChangePassword"})
        },
         func(){
            this.$router.push({path:"/ChangePhone"})
        },
         fund(){
            this.$router.push({path:"/LocalPassword"})
        },
        fune(){
            this.$router.push({path:"/help"})
        },
        funf(){
            this.$router.push({path:"/declaraction"})
        },
        cleal(){
            this.$dialog.confirm({
             title: '',
            message: '确认清除所有缓存？'
            }).then(() => {
                x
            }).catch(() => {
    
                    })    
        },
        dafen(){
            
             this.$dialog.confirm({
             title: '',
            message: '感谢你对春雨的支持，快去为春雨打分吧！'
            }).then(() => {
                x
            }).catch(() => {
    
                    })   
        },
        gengxing(){
             this.$dialog.confirm({
             title: '升级提示',
            message: '我们推出8.7.1新版本，进行更新优化处理，赶快来体验吧'
            }).then(() => {
                x
            }).catch(() => {
    
                    })   
        },
        quit(){
            localStorage.removeItem("userPassword")
            localStorage.setItem("userBalance","0.00")
            localStorage.removeItem("userPhone")
            localStorage.setItem("Goldcoin","0.00")
             localStorage.removeItem("userId")
                localStorage.removeItem("doctorIdList")
             localStorage.setItem("Coupon","0.00")
             localStorage.setItem("userNickname","登录/注册")
             localStorage.removeItem("userImg")
             localStorage.removeItem("loglevel:webpack-dev-server")
        


        this.$router.push({path:"/personalCentter"})
        }
       
    },
}
</script>
<style scoped>
.quan{
      /* position: fixed; */
        width: 100%;
        height: 100%;
        top: 0px;
        background-color: #f7f7f7;
}
.header{
    position: fixed;
    top: 0;
    background: white;
    z-index: 99;
    border-bottom: 1px solid #e7e7e7;
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
