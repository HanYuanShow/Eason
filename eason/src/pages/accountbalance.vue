<template>
    <div>
      <div class="header">
        <Installhead :himg="himg" :headtitle="listtitle"></Installhead>
      </div> 
      <div class="content" >
        <h4>余额</h4>
        <h1>￥{{userBalance}}</h1>  

        <div class="caozuo">
            <p>提现 ></p>    
            <p>交易明细 ></p>    

        </div>  
      </div> 

    <div class="text">
        <li>重要提醒</li>
        <p>
           {{shuo1}} 
        </p>
        <p>
          {{shuo2}}
          <span>{{kefu}}</span>
          
        </p>
        

        
    </div>

    </div>
</template>
<script>
import Installhead from "../components/Install/Installhead"
export default {
    components:{
        Installhead
    },
    data(){
        return{
           listtitle:"账户余额",
             himg:"../../static/images/w/b1a.png",
             mgs:"../../static/w/b04.png",
             qian:"0.00",
             shuo1:"1.如发生退款，退款方式将与您的支付方式保持一致。比如支付方式为春雨账户余额的仍退款至余额，如用户使用余额+第三方支付的方式付款，退款时，款项将分别退回到上述各个支付渠道。",
            shuo2:"2.若退款后您的支付账号未收到退款，请于30分钟后查看，支付宝、微信绑定的银行卡退款记录根据银行不同会有1-2天延迟，请您知悉。如遇弁常情况，请",
            kefu:"联系春雨客服",
            userBalance:"",
            }

    },
    created() {
        let id = localStorage.getItem("userId");
        if(id==null){
            this.$router.push("/logon")
        }else{
                 this.userBalance = localStorage.getItem('userBalance')
        }
    
    },

}
</script>

<style scoped>
.header{
    border-bottom: 1px solid #ccc9c9;
    
}
.content{
    margin: 20px auto;
    width:88%;
    height: 180px;
    background: url("../../static/images/w/b04.png")no-repeat center top;
    background-size: 100% 100%;

}
h4{
    width: 60%;
    height: 40px;
    line-height: 40px;
    padding-top: 20px;
    padding-left: 20px;
    font-size: 18px;
    color: white;
    font-weight: 100;

}
h1{
    font-weight: 100;
    color: white;


}
.caozuo{
    display: flex;
    padding-top: 40px;
    padding-bottom: 15px;
    justify-content: space-between;
     font-size: 17px;
     color: white;
}
.caozuo p:nth-child(1){
    margin-left: 10px;
   
}
.caozuo p:nth-child(2){
    margin-right: 10px;
}
.text{
    width: 90%;
    margin: 25px auto;
    font-size: 16px;
    line-height: 22px;
    color: #939191;
}
li{
    line-height: 30px;
    margin-bottom: 10px;
    
}
.text p{
    font-size: 16px;
}
.text p span{
    color: #dc6d13ea;
}
</style>

