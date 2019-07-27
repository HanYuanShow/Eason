<template>
<div class="adds">
    <div class="address">
        <div class="addressGo" @click="addressfun()" >
            <img src="../../static/images/w/agf.png"/>
            <span>返回</span>
        </div>
        <div class="addressGet">
            <span>新建</span>
            <span>收货信息</span>
        </div>
    </div>
    <div class="buildLink">
        
        <div class="buildAdress">
            <span>收货人</span>
            <input  class="receiver" type="text" placeholder="请输入收货人信息">
        </div>
        <div class="buildAdress">
            <span>手机号码</span>
            <input  class="receiver" type="text" placeholder="请输入电话号码">
        </div>
        <div class="city">
            <span>所在城市</span>
            <img src="../../static/images/w/ajr.png" @click="fun()"/>
        </div>
        <div v-if="citybool">
            <van-area :area-list="areaList" value="110101" />
        </div>
        <div class="buildAdress">
            <span>详细地址</span>
            <input  class="receiver" type="text" placeholder="请填写详细收货地址、街道、门牌等">
        </div>
        <div class="admit">
            <div class="default">
                <p>设为默认地址</p>
                <span >注：每次下单时默认选择该地址</span>
            </div>
            <div class="switch" >
                <van-switch
                    v-model="checked"
                    active-color="#07c160"
                    inactive-color="#f1f1f1"
                    />
            </div>
        </div>
         <div class="newbody"></div>
    </div>
    <div class="sure">
        <div class="sureAdsress">
            <p>保存</p>
        </div> 
    </div>
</div>
    
</template>
<script>
export default {
    data() {
    return {
      checked: false,
      citybool:false,
      
  

    }
    
  },

  methods: {
      addressfun(){
          
      },
      fun(){
          this.citybool=!this.citybool
      },
    onInput(checked) {
      Dialog.confirm({
        title: '提醒',
      }).then(() => {
        this.checked = checked;
      });
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
     padding-left:16px;
 }
 .addressGo span{
     font-size: 16px;
    color: #6bce72;
    font-weight:600;
 }
 .addressGet span{
     margin:0 auto;
 }
.buildLink{
    margin-top:63px; 
    height:50px;
}
.buildAdress{
    padding-left:16px;

     line-height:50px;
     background:#ffffff;
    border-bottom: 1px solid #f4f4f4;
}
.buildAdress span{
    font-size:16px;
    color:#999999;
}
.city{
     background:#ffffff;
    border-bottom: 1px solid #f4f4f4;
     line-height:50px;
     padding:0 16px;
    display:flex;
    justify-content: space-between;
    align-items: center;
}
.city span{
     font-size:16px;
    color:#999999;
}
.city img{
    height:15px;
}
.receiver{
    border:0;
    font-size:15px;;
    color:#dbdbdb;
    background-color: transparent;
    margin-left: 10px;
    box-sizing: border-box;
    width: 70%;
    text-align: left;
    /* display: block; */
}

.van-switch{
    background:#f1f1f1;
}
.admit{
    border-top:6px solid #f4f4f4;
     background:#ffffff;
     line-height:50px;
     padding:0 16px;
     display:flex;
}
.default{
    width:80%;
}
.default p{
    color:#323232;
    font-size: 16px;
}
.default span{
    color:#dbdbdb;
    font-size:12px;
   height: 20px;
}
.switch{
    /* float:right; */
    width:20%;
    margin-top: 12px;
}
.newbody{
    height:240px;
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
