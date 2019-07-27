<template>
<!-- 医生列表 -->
    <div class="doctorlist">
        <!-- 导航栏 -->
        <div class="nav">
            <img src="../../static/images/a/a8e.png" alt="" class="leftarrow" @click="onClickLeft()">
            <input type="text" placeholder="搜医生、症状、疾病、医院、科室" class="navtxt" v-model="value" @keyup.enter="search(value)">
        </div>
        <!-- 筛选 -->
        <van-dropdown-menu active-color="green">
            <van-dropdown-item v-model="value1" :options="option1" @change="keshi(option1[value1].text)"/>
            <van-dropdown-item v-model="value2" :options="option2" @change="region(option2[value2].text)"/>
        </van-dropdown-menu>
        <!-- 医生列表 -->
        <div v-if="bool" class="loading">
            <van-loading type="spinner" color="#6bce72" />
        </div>
        <Doctorlist3 v-for="(v,i) in sarr" :key="i" :doctor_infor="v" v-else></Doctorlist3>
    </div>
</template>
                
<script>
import Doctorlist3 from '../components/doctorlist3'
export default {
    data() {
        return {
        value1: 0,
        value2: 0,
        option1: [
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
        option2: [
            { text: '全部地区', value: 0 },
            { text: '北京', value: 1 },
            { text: '上海', value: 2 },
            { text: '广东', value: 3 },
            { text: '深圳', value: 4 },
            { text: '安徽', value: 5 },
            { text: '重庆', value: 6 },
            { text: '福建', value: 7 },
            { text: '甘肃', value: 8 },
            { text: '广西', value: 9 },
            { text: '陕西', value: 10 },
            { text: '河北', value: 11 },
            { text: '河南', value: 12 },
            { text: '黑龙江', value: 13 },
            { text: '内蒙古', value: 14 },
            { text: '山西', value: 15 }
        ],
            newarr:[],
            sarr:[],
            ks:"",
            name:"",
            value:"",
            bool:true
        }
    },
    created() {
        this.value1=this.$route.query.id;
        this.ks=this.$route.query.string;
        this.axios({
            url:"http://47.95.140.83:8181/Doctorin/findall?string="+this.ks,
            method:"get"
        }).then((ok)=>{
            this.sarr=ok.data;
            if(this.sarr==''){
                this.bool=true
            }else{
                this.bool=false
            }
        })
        // ----------------------
        this.name=this.$route.query.value;
        this.axios({
        url:"http://47.95.140.83:8181/Doctorin/findall?string="+this.name,
        method:"get"
        }).then((ok)=>{
            this.sarr=ok.data;
            if(this.sarr==''){
                this.bool=true
            }else{
                this.bool=false
            }
        })
        // ----------------------
    },
    methods: {
        keshi(ks){
           this.axios({
                url:"http://47.95.140.83:8181/Doctorin/findall?string="+ks,
                method:"get"
            }).then((ok)=>{
                this.sarr=ok.data;
                if(this.sarr==''){
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
                    this.sarr=ok.data;
                    if(this.sarr==''){
                        this.bool=true
                    }else{
                        this.bool=false
                    }
                })
            }
        },
        region(re){
           this.axios({
                url:"http://47.95.140.83:8181/Doctorin/findall?string="+re,
                method:"get"
            }).then((ok)=>{
                this.sarr=ok.data;
                if(this.sarr==''){
                    this.bool=true
                }else{
                    this.bool=false
                }
            })
            if(re=="全部地区"){
                this.axios({
                url:"http://47.95.140.83:8181/Doctorin/load",
                method:"get"
                }).then((ok)=>{
                    this.sarr=ok.data;
                    if(this.sarr==''){
                        this.bool=true
                    }else{
                        this.bool=false
                    }
                })
            }
        },
        onClickLeft(){
            this.$router.go(-1);
        },
        search(value){
            this.axios({
            url:"http://47.95.140.83:8181/Doctorin/findall?string="+value,
            method:"get"
            }).then((ok)=>{
                this.sarr=ok.data;
                if(this.sarr==''){
                    this.bool=true
                }else{
                    this.bool=false
                }
            })
        }
    },
    components:{
        Doctorlist3
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
    top: 0;
    z-index: 2;
    border-bottom: 1px solid #e7e7e7;
    color: #666666;
    height: 35px;
}
input::-webkit-input-placeholder{
    font-size: 14px;
    color: #b6b6bb;
}
.nav{
    background: #ffffff;
    height: 40px;
    padding: 10px 20px 0;
    border-bottom: 1px solid #b2b2b2;
    
}
.leftarrow{
    width: 10px;
    height: 20px;
    vertical-align: middle;
    margin-right: 7px;
}
.navtxt{
    border-radius: 15px;
    width: 310px;
    vertical-align: middle;
    background: #e9e9e9 url(../../static/images/a/aik.png) no-repeat;
    background-size: 18px 18px;
    text-indent: 36px;
    border: none;
    height: 30px;
    background-position: 10px 6px;
    line-height: 30px;
    font-size: 14px;
}
.doctorlist{
    background: #ffffff;
}
</style>
