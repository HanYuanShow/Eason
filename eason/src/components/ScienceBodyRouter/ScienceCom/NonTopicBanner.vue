

<template>
    <div>
        <van-swipe :autoplay="3000" indicator-color="white" class="banner">
            <van-swipe-item><img src="../../../../static/w/ask.png"></van-swipe-item>
            <van-swipe-item><img src="../../../../static/w/b7a.png"></van-swipe-item>
            <van-swipe-item><img src="../../../../static/w/b3v.png"></van-swipe-item>
        </van-swipe>
    </div>
</template>

<script>
export default {
    props:{
        
    }
}
</script>

<style scoped>
    .banner img{
        width:100%;
        height:160px;
    }
</style>


