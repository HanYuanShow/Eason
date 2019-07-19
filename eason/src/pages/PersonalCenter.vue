<template>
    <div>
       <div class="head">
           <div class="firstdiv">
                <div class="header">
                    <img :src="imgs" alt="" @click="func()">
                </div>  
                <div class="center">
                    <div class="centerleft" @click="funa()"  >
                        <div class="toukuang" @click="funh()">
                           <img :src="imgs1" alt="">
                        </div>
                           
                        <span>登录/注册</span>
                   </div>
                   
                    <div class="qiandao">
                        <!-- 签到 -->
                    </div>
                </div>
                <div class="foot">
                    <p>
                        <span>0.00</span>
                        <span>账户余额(元)</span>
                    </p>
                    <p>
                        <span>0</span>
                        <span>优惠券(张)</span>
                    </p>
                    <p>
                        <span>0</span>
                        <span>金币</span>
                    </p>

                </div>
           </div>
       </div>
        <div class="content" @click="fund()">
            <personalcenteritam :arrb='obj[0]'></personalcenteritam>
        </div>
        <div class="content" @click="fune()">
            <personalcenteritam :arrb='obj[1]'></personalcenteritam>
        </div>
        <div class="content1" @click="funb()">
            <personalcenteritam :arrb='obj[2]'></personalcenteritam>
        </div>
        <div class="content1" >
                <personalcenteritam :arrb='obj[3]'></personalcenteritam> 
         </div>
        <div class="content1" @click="funf()">
            <personalcenteritam :arrb='obj[4]'></personalcenteritam>
        </div>
        <div class="content2" @click="fung()">
            <personalcenteritam :arrb='obj[5]'></personalcenteritam>
        </div>
       



<div class="zyc">

</div>


    </div>
</template>
<script>
import personalcenteritam from "../components/personalcenteritam/personalcenteritam"
export default {
    components:{
        personalcenteritam
    },
    data(){
        return {
            imgs:"../../static/images/w/b63.png",
            imgs1:"../../static/images/w/ab7.png",
            obj:[
                {titleimg1:"../../static/images/w/awp.png",text:'健康档案',titleimg2:"../../static/images/w/b2o.png"},
                {titleimg1:"../../static/images/w/awq.png",text:'我的收藏',titleimg2:"../../static/images/w/b2o.png"},
                {titleimg1:"../../static/images/w/b3n.png",text:'设置与帮助',titleimg2:"../../static/images/w/b2o.png"},
                {titleimg1:"../../static/images/w/asn.png",text:'春雨客服',titleimg2:"../../static/images/w/b2o.png"},
                {titleimg1:"../../static/images/w/awt.png",text:'意见反馈',titleimg2:"../../static/images/w/b2o.png"},
                {titleimg1:"../../static/images/w/aso.png",text:'邀请好友',titleimg2:"../../static/images/w/b2o.png",sec:"得奖励"}
            ]
        }
    },
    methods: {
        funa(){
          this.$router.push({path:'/PersonalInformation'})  
        },
        funb(){
            this.$router.push({path:'/Install'})
        },
        func(){
            this.$router.push({path:'/MessageCenter'}) 
        },
        fund(){
            this.$router.push({path:"/HealthRecord"})
        },
        fune(){
            this.$router.push({path:"/MyCollect"})
        },
        funf(){
            this.$router.push({path:"/Opinion"})
        },
        fung(){
            this.$router.push({path:"/InviteSomeOne"})
        },
         funh(){
            this.$router.push({path:"/logon"})
        },
    },
    
}
</script>
<style scoped>
.head{
    width: 100%;
    height:230px;
    background: #6bce72;
}
.header{
    /* padding-top: 20px; */
    width: 100%;
    height: 60px;
 display: flex;
 justify-content: flex-end;
 align-items: flex-end;
 

}
.header img{
    width: 31px;
    height: 31px;
    display: block;
    margin-right: 20px; 

}
.center{
    width: 100%;
    height: 85px;
    display:flex;
    align-items: center;
    justify-content: space-between;
}
.centerleft{
    display: flex;
    align-items: center;
    
}
.toukuang{
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background: white;
    text-align: center;
    line-height: 60px;
    margin-left: 15px;
}
.toukuang img{
    width: 100%;
    height: 100%;
    border-radius: 50%;
}
.centerleft span{
    display: block;
    margin-left: 15px;
    font-size: 17px;
    color: white;
}

.foot{
    width: 100%;
    height: 85px;
    display: flex;
}
.foot p{
    width: 33%;
    text-align: center;
    font-size: 16px;
    /* height: 100%; */
}
p span{
    display:block;
    width: 100%;
    height: 50%;
    color: white;
}
.content{
    margin-bottom: 15px;
}
.content1{
    border-bottom: 0.9px solid #f8f6f6
}
</style>
