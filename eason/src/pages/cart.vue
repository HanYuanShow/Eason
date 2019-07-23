<template>
    <div>
        <van-nav-bar
            title="购物车"
            left-text="返回"
            right-text=""
            left-arrow
            @click-left="onClickLeft"
            />
        <van-card
                price="2.00"
                desc="描述信息"  
                title="商品标题"
                thumb="../../static/images/r/drug.png"
                
              >
              
                <div slot="footer">
                 <van-stepper v-model="value" integer />
                 <van-checkbox v-model="checked"></van-checkbox>
                </div>
          </van-card>
          <van-submit-bar
                :price="3050"
                button-text="提交订单"
                @submit="onSubmit"
                >
                <van-checkbox v-model="checked">全选</van-checkbox>
        </van-submit-bar>
    </div>
</template>
<script>
export default {
    data() {
    return {
         checked:false,
         value:1,
         radio: 0,
         bool:false
        }
    },
    methods: {
    onClickLeft(){
        this.$router.go(-1)
    },
    butfun1(){
      this.cartbool=false
      
    },
    butfun2(){

    },
    onSubmit(){
        this.$router.push("/address")
    },
    fun(){
       this.bool=!this.bool
    }
    },
}
</script>
<style scoped>
 .van-nav-bar {
    background-color:#fbfbfb;
    }
    .van-nav-bar .van-icon {
        color:#6bce72;
        font-weight: 600;
    }
    .van-nav-bar__text{
       color:#6bce72;
         font-weight: 600;
         font-size: 16px;
    }
    .van-nav-bar__title{
        color: #343434;
        font-weight: 600
    }
    /* 购物车 */
    .van-card__title{
        margin-top:20px;
    }
    .van-card__price{
        margin-top: 30px;
    }
</style>
