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
            <van-swipe indicator-color="white" :loop="false">
                <van-swipe-item>
                    <div class="swipes">
                        <ul class="swipesul">
                            <li :class="{newswipesli:newindex==i}" class="swipesli" v-for="(v,i) in arr" :key="i" @click="doctorlist(v.keshi,i)">
                                <img :src="v.imgurl" class="keshipic">
                                <span class="keshiname">{{v.keshi}}</span>
                            </li>
                        </ul>
                    </div>
                </van-swipe-item>
                <van-swipe-item>
                    <div class="swipes">
                        <ul class="swipesul">
                            <li :class="{newswipesli:newindex==i}" class="swipesli" v-for="(v,i) in arr1" :key="i" @click="doctorlist1(v.keshi,i)">
                                <img :src="v.imgurl" class="keshipic">
                                <span class="keshiname">{{v.keshi}}</span>
                            </li>
                        </ul>
                    </div>
                </van-swipe-item>
                <van-swipe-item>
                    <div class="swipes">
                        <ul class="swipesul">
                            <li :class="{newswipesli:newindex==i}" class="swipesli" v-for="(v,i) in arr2" :key="i" @click="doctorlist2(v.keshi,i)">
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
            <Doctortitle :title="keshi"></Doctortitle>
            <Doctorlist v-for="(v,i) in sarr" :key="i" :doctor_name="v.doctor_name" :disease_type="v.disease_type" :doctor_job="v.doctor_job"></Doctorlist> 
        </div>
           <div class="end"></div>
    </div>
</template>

<script>
import Doctortitle from '../components/doctortitle'
import Doctorlist from '../components/doctorlist'
export default {
    data() {
        return {
            arr:[
                {imgurl:"../../static/images/a/s1.png",keshi:"皮肤科"},
                {imgurl:"../../static/images/a/s2.png",keshi:"儿科"},
                {imgurl:"../../static/images/a/s3.png",keshi:"妇科"},
                {imgurl:"../../static/images/a/s4.png",keshi:"产科"},
                {imgurl:"../../static/images/a/s5.png",keshi:"内科"},
                {imgurl:"../../static/images/a/s6.png",keshi:"外科"},
                {imgurl:"../../static/images/a/s7.png",keshi:"男科"},
                {imgurl:"../../static/images/a/s8.png",keshi:"口腔额面科"},
                ],

            arr1:[
                {imgurl:"../../static/images/a/s9.png",keshi:"骨伤科"},
                {imgurl:"../../static/images/a/s10.png",keshi:"眼科"},
                {imgurl:"../../static/images/a/s11.png",keshi:"普外科"},
                {imgurl:"../../static/images/a/s12.png",keshi:"甲状腺乳腺外科"},
                {imgurl:"../../static/images/a/s13.png",keshi:"性病科"},
                {imgurl:"../../static/images/a/s14.png",keshi:"神经病科"},
                {imgurl:"../../static/images/a/s15.png",keshi:"消化内科"},
                {imgurl:"../../static/images/a/s16.png",keshi:"呼吸内科"},
                ],

            arr2:[
                {imgurl:"../../static/images/a/s17.png",keshi:"精神心理科"},
                {imgurl:"../../static/images/a/s18.png",keshi:"耳鼻咽喉科"},
                {imgurl:"../../static/images/a/s19.png",keshi:"感染科"},
                {imgurl:"../../static/images/a/s20.png",keshi:"报告解读科"},
                {imgurl:"../../static/images/a/s21.png",keshi:"肿瘤及防治科"},
                {imgurl:"../../static/images/a/s22.png",keshi:"整形美容科"},
                {imgurl:"../../static/images/a/s23.png",keshi:"中医科"},
                {imgurl:"../../static/images/a/s24.png",keshi:"营养科"}
                ],
            keshi:"",
            newindex: 0,
            newarr:[],
            sarr:[]
        }
    },
    created() {
        this.keshi=this.arr[0].keshi;
        this.axios({
            url:"/liuxiaojie",
            method:"get"
        }).then((ok)=>{
            this.newarr=ok.data[0].doctor;
        })
    },
    components:{
        Doctortitle,
        Doctorlist
    },
    methods: {
        doctorlist(ks,i){
            this.keshi=ks;
            this.newindex=i;
            let newdata=[];
            for(let i=0;i<this.newarr.length;i++){
                if(this.newarr[i].disease_type==ks){
                    newdata.push(this.newarr[i]);
                    this.sarr=newdata;
                } 
            }
            console.log(this.sarr);
            
        },
        doctorlist1(ks,i){
            this.keshi=ks;
            this.newindex=i;
        },
        doctorlist2(ks,i){
            this.keshi=ks;
            this.newindex=i;
        },
        onClickLeft(){
            this.$router.go(-1);
        }
    },
//     beforeCreate() {
//        document.querySelector('body').setAttribute('style', 'background:#2e303d')
//   }
}
</script>

<style scoped>
.end{
    position: fixed;
    width: 100%;
    height: 100%;
    bottom: 0;
   background:#2e303d;
    z-index: -1;
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
    padding: 15px 20px 35px;
    
}
.swipesli{
    float: left;
    width: 25%;
    height: 84px;
    text-align: center;
    list-style: none;
    /* background: #3a3a41;
    border-radius: 7px; */
}
.newswipesli{
    float: left;
    width: 25%;
    height: 84px;
    text-align: center;
    list-style: none;
    background: #3a3a41 url(../../static/images/a/ok.png) no-repeat 63px 5px;
    background-size: 15px;
    border-radius: 7px;
}
.keshipic{
    width: 40px;
    height: 40px;
    margin: 10px 0 5px;
}
.keshiname{
    display: block;
    font-size: 12px;
    color: #a4a4a6;
}

</style>
