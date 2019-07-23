<template>
    <div style="margin:50px">
      
     <van-goods-action>
          <van-goods-action-icon
            :info=newInfo
            icon="cart-o"
            text="购物车"
             @click="onClickIcon" 
          />
         <van-popup
            v-model="show"
            round
            position="bottom"
            :style="{ height: '20%' }"
          >

          <van-card
                price="2.00"
                desc="描述信息"  
                title="商品标题"
                thumb="../../static/images/r/drug.png"
              >
              <div>
                <span>购买数量</span>
              </div>
                <div slot="footer">
                   <span class="buy">购买数量</span>
                 <van-stepper v-model="value" integer />
                  <p class="ok" @click="okfun()">确定</p>
                </div>
               
          </van-card>
          </van-popup>
          <van-goods-action-button
            type="warning"
            text="加入购物车"
             @click="onClickButton"
          />
    </van-goods-action>
    </div>
  </template>

  
<script>

export default {
  data() {
    return {
          show: false,
            value: 1
    }
  },
    methods: {
    test() {
      console.log(this.newInfo)
    },
    onClickIcon() {
     this.$router.push("/cart")

    },
    onClickButton() {
      this.$store.commit("cartMutation",this.$store.state.info++),
      this.show=!this.show
    },
    butfun1(){
      this.cartbool=false;
    },
    okfun(){
      this.show=!this.show;
    },
        showPopup() {
      this.show = true;
    }
  },
  computed:{
    newInfo(){
      return this.$store.state.info
    }
  },
}
</script>
<style scoped>
.buy{
  float: left;
    font-size: 16px;
    color: #666666;
}
.van-popup--bottom{
  height:28%!important
}
.ok{
  margin-top:10px;
  width:100%;
  height:50px;
  background:#ec6b43;
  text-align: center;
  font-size: 14px;
  color:#ffffff;
  line-height: 50px;
}
</style>
