<template>
    <div class="returnComp">
        <div class="backbtn">
            <img class="back" @click="goBack()" src="../../../static/w/a8e.png" alt="">
            <img class="returnHome" @click="toHome()" src="../../../static/w/a63.png" alt="">
        </div>
        <span>{{routerTips}}</span>
        <!-- 弹出层 -->
        <van-button type="primary" @click="showPopup">
            <img class="share" src="../../../static/w/a7s.png" alt="">
        </van-button>
        <van-popup v-model="show" position="bottom" :style="{ height: '20%' }">
            <p class="shareTit">分享</p>
            <div class="shareIcon">
                <img src="../../../static/w/arp.png" alt="">
                <img src="../../../static/w/ark.png" alt="">
                <img src="../../../static/w/aro.png" alt="">
                <img src="../../../static/w/arq.png" alt="">
            </div>
        </van-popup>    
    </div>
</template>
<script>
export default {
    data() {
        return {
            show: false
        }
    },
    props:{
        routerTips:String
    },
    methods: {
        showPopup() {
            this.show = true;
        },
        goBack(){
           this.$router.go(-1) 
        },
        toHome(){
            this.$router.push("/home")
        }
    },

}
</script>

<style scoped>
.shareTit{
    font-size: 14px;
    text-align: center;
}
.van-button--primary{
    background: none;
    border: none;
}
.shareIcon{
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.shareIcon img{
    width: 48px;
    height: 48px;
}
.returnComp{
    width: 100%;
    height: 50px;
    background: #fff;
    padding: 0 15px;
    border-bottom: 1px solid #ebedf0;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.backbtn img,.share{
    height: 18px;
}
.back{
    margin-right: 10px;
}
</style>
