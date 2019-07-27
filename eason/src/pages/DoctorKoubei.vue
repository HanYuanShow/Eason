<template>
<!-- 口碑好医生 -->
    <div class="koubeibox">
        <!-- 导航栏 -->
        <van-nav-bar
            title="口碑好医生"
            left-arrow
            @click-left="onClickLeft"
        />
        <!-- 筛选 -->
        <van-dropdown-menu active-color="green">
            <van-dropdown-item v-model="value" :options="option" @change="keshi(option[value].text)"/>
        </van-dropdown-menu>
        <!-- 医生列表 -->
        <div v-if="bool" class="loading">
            <van-loading type="spinner" color="#6bce72" />
        </div>
        <Doctorlist4 v-for="(v,i) in newarr" :key="i" :doctor_infor="v" v-else></Doctorlist4>
    </div>
</template>

<script>
import Doctorlist4 from '../components/doctorlist4'
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
        Doctorlist4
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
    position: sticky;
    top:47px;
    height: 35px;
    border-bottom: 1px solid #ececec;
    color: #666666;
    z-index: 2;
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
