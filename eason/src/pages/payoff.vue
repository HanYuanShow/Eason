<template>
    <div>
       <div class="payoff">
        <div class="payoffleft" @click="payfun()">
            <img src="../../static/images/w/agf.png"/>
        </div>
        <div class="pay">
            <span>订单支付</span>
        </div>
    </div> 
    <div class="server">
         <div class="allpay">
            <p>特色服务</p>
            <span>￥{{14}}</span>
        </div>
        <div class="allpay">
            <p>共需支付</p>
            <span>￥{{14}}</span>
           
        </div>
        <div class="payMode">
            <span>选择支付方式</span>
        </div>
        <div class="payImg">
            <div class="allpayImg">
            <img src="../../static/images/w/b01.png" >
            <div class="payfor">
                <p>支付宝支付</p>
                <span>推荐安装支付宝客户端的用户使用</span>
            </div>
            <div class="payforRight">
               <van-checkbox v-model="checked" checked-color="#07c160"></van-checkbox>
            </div>
        </div>
        <div class="newbody"></div>
        </div>
    </div>
     <div>
     </div>
      <van-button type="warning" size="large" @click="codeFun()">去支付</van-button>
    </div>
</template>
<script>
export default {
    data() {
    return {
      checked: true
    }
    
  },
  methods:{
      codeFun(){
          this.$router.push("/code")
      },
      payfun(){
            this.$router.go(-1);
        }
    },
}
</script>
<style scoped>
.payoff{
     width:100%;
    height:62px;
    position:fixed;
    top:0px;
    border-bottom: 6px solid #f4f4f4;
    line-height: 62px;
    background:#fbfbfb;
 }
 .payoffleft{
    float:left;
    width: 40%;
 }
 .pay{
    float:left;
   
 }
 .pay span{
    font-weight: 600;
     color:#343434;
    font-size: 16px;
 }
 .payoffleft img{
    width: 20px;
    height: 20px;
     padding-left:16px;
     vertical-align: middle;
 }
 .payoffleft span{
     font-size: 16px;
    color: #6bce72;
    font-weight:600;
 }
 .pay span{
     margin:0 auto;
 }
 .server{
    margin-top:63px; 
    height:50px;
}
.allpay{
    padding: 0 16px;
     line-height:50px;
     background:#ffffff;
    border-bottom: 1px solid #f4f4f4;
    display:flex;
    justify-content: space-between;
    align-items: center;
}

.allpay p{
    font-size:16px;
    color:#666666;
}
.allpay span{
    font-size:16px;
    color:#f0965c;
    float: right;
}
.payMode{
     background:#f1f1f1;
     line-height:50px;
     padding:0 16px;
    
}
.payMode span{
     font-size:16px;
    color:#666666;
}
.receiver{
    border:0;
    font-size:15px;;
    color:#dbdbdb;
    background-color: transparent;
    margin-left: 10px;
    box-sizing: border-box;
    /* width: 100%; */
    text-align: left;
    /* display: block; */
}
.payforRight{
    width:10%;
}
.payfor{
    width:90%;
    margin:0 12px;
}
.payImg{
    height:50px;
}
.allpayImg{
    padding: 0 16px;
     line-height:50px;
     background:#ffffff;
    border-bottom: 1px solid #f4f4f4;
    display:flex;
    justify-content: space-between;
    align-items: center;
}
.allpayImg img{
    height:50px;
    width:50px
}
.allpay .payfor p{
     font-size:18px;
    color:#000000;
}
.allpay .payfor span{
    font-size:16px;
    color:#999999;
    height:20px;
}
.newbody{
    height:300px;
    background:#f3f3f3;
}
.van-button{
    position:fixed;
    bottom:0;
    margin:10px auto;
}
</style>
