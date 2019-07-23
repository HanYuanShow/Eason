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
        <Doctorlist2 v-for="(v,i) in sarr" 
        :key="i" 
        :doctor_name="v.doctor_name" 
        :disease_type="v.disease_type" 
        :doctor_job="v.doctor_job"
        ></Doctorlist2>
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
            sarr:[]
        }
    },
    created() {
        this.axios({
            url:"/liuxiaojie",
            method:"get"
        }).then((ok)=>{
            this.newarr=ok.data[0].doctor;

            // 页面初始化显示所有科室医生列表
            this.sarr=this.newarr;
        })
        
    },
    methods: {
        keshi(ks){
            let newdata=[];
            for (let i=0; i<this.newarr.length;i++) {
                if(this.newarr[i].disease_type==ks){
                    newdata.push(this.newarr[i]);
                    this.sarr=newdata;
                }else if(ks=='全部科室'){
                    this.sarr=this.newarr;
                }
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
