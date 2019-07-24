<template>
    <div>
        <van-nav-bar title="症状自诊" left-text="" left-arrow @click-left="back()" @click-right="search()">
            <van-icon name="search" slot="right"/>
        </van-nav-bar>            
    </div>
    </template>
<script>
export default {
    data() {
        return {
         
        }
    },
    methods: {
        back(){
            this.$router.push('/seek')
        },
        search(){
            this.$router.push("/seek")
        }
    },
     
}
</script>

<style scoped>
    .van-nav-bar .van-icon{
        color: #67c65f;
        font-size: 22px;
    }
    .van-nav-bar__title{
        color: #5c5c5c;
        font-size: 16px;
    }
    .van-tab--active{
        border-right: 1px solid red;
    }
</style>


