<template>
    <div>
        <!-- 导航 -->
        <van-nav-bar
            title="名医咨询"
            left-arrow
            @click-left="onClickLeft"
        />
        <!-- 科室分类 轮播图 -->
        <div class="bg"></div>

        <div>
            <van-swipe indicator-color="white">
                <van-swipe-item>
                    <div class="swipes">
                        <ul class="swipesul">
                            <li class="swipesli" v-for="(v,i) in arr" :key="i">
                                <img :src="v.imgurl" class="keshipic">
                                <span class="keshiname">{{v.keshi}}</span>
                            </li>
                        </ul>
                    </div>
                </van-swipe-item>
                <van-swipe-item>
                    <div class="swipes">
                        <ul class="swipesul">
                            <li class="swipesli" v-for="(v,i) in arr" :key="i">
                                <img :src="v.imgurl" class="keshipic">
                                <span class="keshiname">{{v.keshi}}</span>
                            </li>
                        </ul>
                    </div>
                </van-swipe-item>
                <van-swipe-item>
                    <div class="swipes">
                        <ul class="swipesul">
                            <li class="swipesli" v-for="(v,i) in arr" :key="i" @click="doctorlist(v.keshi)">
                                <img :src="v.imgurl" class="keshipic">
                                <span class="keshiname">{{v.keshi}}</span>
                            </li>
                        </ul>
                    </div>
                </van-swipe-item>
            </van-swipe>
        </div>

        <!-- 医生列表 -->
        <div class="doctorlist">
            <p class="doctorlisttitle">妇科</p>
            <DoctorList></Doctorlist>
            
        </div>
    </div>
</template>

<script>
import DoctorList from './DoctorList'
export default {
    data() {
        return {
            arr:[
                {imgurl:"../../static/images/a/k1.png",keshi:"皮肤科"},
                {imgurl:"../../static/images/a/k2.png",keshi:"儿科"},
                {imgurl:"../../static/images/a/k3.png",keshi:"妇科"},
                {imgurl:"../../static/images/a/k4.png",keshi:"产科"},
                {imgurl:"../../static/images/a/k5.png",keshi:"内科"},
                {imgurl:"../../static/images/a/k6.png",keshi:"外科"},
                {imgurl:"../../static/images/a/k7.png",keshi:"男科"},
                {imgurl:"../../static/images/a/k8.png",keshi:"口腔额面科"}
            ],
            
        }
    },
    components:{
        DoctorList
    },
    methods: {
        onClickLeft(){
            this.$router.go(-1);
        },
        doctorlist(i){
            this.$router.push({
                path:"/DoctorList",
                query:{i}
            })
        }
    },
    beforeCreate() {
       document.querySelector('body').setAttribute('style', 'background:#2e303d')
  }
}
</script>

<style scoped>
.doctorlist{
    background: #ffffff;
    margin: 0 10px;
    height: 200px;
}
.doctorlist{
    border-radius: 5px 5px 0 0;
}
.doctorlisttitle{
    border-bottom: 1px solid #f4f4f4;
    font-size: 16px;
    color: #323232;
    text-align: center;
    line-height: 40px;
}
.van-icon-arrow-left:before {
    color: #6bce72;
    font-weight: 800;
    font-size: 25px;
}
.van-nav-bar__title{
    font-weight: 800;
}
.van-nav-bar{
    border-bottom: 1px solid #dbdbdb;
    position:sticky;
    top: 0;

}
.bg{
    background: url(../../static/images/a/bg1.png);
    height: 105px;
    background-size: 100%;
}
.swipes{
    background: #2e303d;
    overflow: hidden;
    padding: 0 20px 35px;
}
.swipesli{
    float: left;
    width: 25%;
    text-align: center;
    margin-top: 30px;
    list-style: none;
}
.keshipic{
    width: 40px;
    height: 40px;
    margin-bottom: 5px;
}
.keshiname{
    display: block;
    font-size: 12px;
    color: #a4a4a6;
}
</style>
