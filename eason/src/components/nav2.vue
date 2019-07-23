<template>
    <div class="nav">
        <van-nav-bar
            title="益丰大药房"
            left-text="返回"
            right-text=""
            left-arrow
            @click-left="onClickLeft"
            />
    </div>
</template>
<script>
export default {
    data(){
        return{
            title:""
        }
    },
     methods: {
            onClickLeft() {
            // Toast('返回');
             this.$router.go(-1);
            }
        }
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
</style>
