<template>
<!-- 今日义诊 -->
    <div class="koubeibox">
        <!-- 导航栏 -->
        <van-nav-bar
            title="图文义诊"
            left-arrow
            @click-left="onClickLeft"
        />
        <!-- 口碑好医生 -->
        <div class="koubei" @click="doctorkoubei()">
            <div class="koubeipic">
                <img src="../../static/images/a/yizhen.png" alt="">
            </div>
            <div class="koubeiright">
                <p class="gooddoctor">口碑好医生</p>
                <p class="one">￥1元起></p>
                <p class="pricelow">价格超实惠,好评率高</p>
            </div>
        </div>
        <!-- 筛选 -->
        <van-dropdown-menu active-color="#6bce72">
            <van-dropdown-item v-model="value" :options="option" @change="keshi(option[value].text)"/>
        </van-dropdown-menu>
        <!-- 医生列表 -->
        <div v-if="bool" class="loading">
            <van-loading type="spinner" color="#6bce72" />
        </div>
        <Doctorlist2 v-for="(v,i) in newarr" :key="i" :newv="v" v-else></Doctorlist2>
    </div>
</template>

<script>
import Doctorlist2 from '../components/doctorlist2'
export default {
    data() {
        return {
            value: 0,
            option: [
                { text: '全部科室', value: 0 },
                { text: '妇科', value: 1 },
                { text: '儿科', value: 2 },
                { text: '皮肤科', value: 3 },
                { text: '内科', value: 4 },
                { text: '男科', value: 5 },
                { text: '产科', value: 6 },
                { text: '外科', value: 7 },
                { text: '中医科', value: 8 },
                { text: '骨伤科科', value: 9 },
                { text: '精神心理科', value: 10 },
                { text: '口腔额面科', value: 11 },
                { text: '肿瘤及防治科', value: 12 },
                { text: '整形美容科', value: 13 },
                { text: '报告解读科', value: 14 },
                { text: '营养科', value: 15 }
            ],
            newarr:[],
            bool:true
        }
    },
    created() {
        this.axios({
            url:"http://47.95.140.83:8181/Doctorin/load",
            method:"get"
        }).then((ok)=>{
            this.newarr=ok.data;
            if(this.newarr==''){
                this.bool=true
            }else{
                this.bool=false
            }
        })
    },
    methods: {
        doctorkoubei(){
            this.$router.push("/DoctorKoubei")
        },
        keshi(ks){
            this.axios({
                url:"http://47.95.140.83:8181/Doctorin/findall?string="+ks,
                method:"get"
            }).then((ok)=>{
                this.newarr=ok.data;
                if(this.newarr==''){
                    this.bool=true
                }else{
                    this.bool=false
                }
            })

            if(ks=="全部科室"){
                this.axios({
                url:"http://47.95.140.83:8181/Doctorin/load",
                method:"get"
                }).then((ok)=>{
                    this.newarr=ok.data;
                    if(this.newarr==''){
                        this.bool=true
                    }else{
                        this.bool=false
                    }
                })
            }

        },
        onClickLeft(){
            this.$router.go(-1);
        }
    },
    components:{
        Doctorlist2
    }
    
}
</script>

<style scoped>
.loading{
    height: 100px;
    text-align: center;
    padding-top: 50px;
}
.van-dropdown-item--down {
    height: 300px;
    border-bottom: 1px solid #e7e7e7;
    border-radius: 0 0 3px 3px;
}
.van-dropdown-menu{
    height: 35px;
    color: #666666;
}
.gooddoctor{
    font-size: 14px;
    color: #323232;
    font-weight: 800;
    line-height: 14px;
}
.one{
    text-align: right;
    font-size: 12px;
    color: #ec6b43;
    line-height: 12px;
    font-weight: 800;
}
.pricelow{
    font-size: 12px;
    color: #999999;
    line-height: 12px;
}
.koubei{
    display: flex;
    padding: 25px 15px;
    background: #fdfcf9;
    border-bottom: 5px solid #f0f0ee;
}
.koubeipic{
    width: 20%;
}
.koubeipic img{
    width: 60px;
    height: 60px;
}
.koubeiright{
    width: 80%;
    padding-top: 10px;
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
.koubeibox{
    background: #ffffff;
}
</style>
