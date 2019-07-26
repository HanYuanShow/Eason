<template>
    <div class="returnComp">
        <div class="backbtn">
            <img class="back" @click="goBack()" src="../../../static/w/a8e.png" alt="">
            <img class="returnHome" @click="toHome()" src="../../../static/w/a63.png" alt="">
        </div>
        <span>{{routerTips}}</span>
        <img class="share" src="../../../static/w/a7s.png" alt="">
    </div>
</template>
<script>
export default {
    props:{
        routerTips:String
    },
    methods: {
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
<<<<<<< HEAD
.shareTit{
    font-size: 14px;
    text-align: center;
    padding: 15px;
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
=======
>>>>>>> 3ccce16b71ab4f2a3b844b46a62cee9838c2a305
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
.returnComp img{
    height: 18px;
}
.back{
    margin-right: 10px;
}
</style>
