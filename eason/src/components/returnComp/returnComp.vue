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
