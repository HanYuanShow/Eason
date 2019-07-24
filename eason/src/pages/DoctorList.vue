<template>
<!-- 医生列表 -->
    <div class="doctorlist">
        <!-- 导航栏 -->
        <div class="nav">
            <img src="../../static/images/a/a8e.png" alt="" class="leftarrow" @click="onClickLeft()">
            <input type="text" placeholder="搜医生、症状、疾病、医院、科室" class="navtxt">
        </div>
        <!-- 筛选 -->
        <van-dropdown-menu active-color="green">
            <van-dropdown-item v-model="value1" :options="option1"  @change="keshi(option1[value1].text)"/>
            <van-dropdown-item v-model="value2" :options="option2" />
        </van-dropdown-menu>
        <!-- 医生列表 -->
        <Doctorlist3 v-for="(v,i) in sarr" 
        :key="i" 
        :doctor_name="v.realaName" 
        :disease_type="v.office" 
        :doctor_job="v.title"
        :doctor_hospital="v.hospital"
        :good_at="v.adept"
        :doctor_label="v.hospiTaltype"
        :doctor_label2="v.workTime"
        :label="v.doctor_label"
        :doctor_price="v.printreferint"
        :consult_num="v.peopleNumint"
        :doctor_id="v.id"
        ></Doctorlist3>
    </div>
</template>
                
<script>
import Doctorlist3 from '../components/doctorlist3'
export default {
    data() {
        return {
        value1: 0,
        value2: 'a',
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
            { text: '全部地区', value: 'a' },
            { text: '北京', value: 'b' },
            { text: '上海', value: 'c' },
            { text: '广东', value: 'd' },
            { text: '深圳', value: 'e' },
            { text: '安徽', value: 'f' },
            { text: '重庆', value: 'g' },
            { text: '福建', value: 'h' },
            { text: '甘肃', value: 'i' },
            { text: '广西', value: 'j' },
            { text: '陕西', value: 'k' },
            { text: '河北', value: 'l' },
            { text: '河南', value: 'm' },
            { text: '黑龙江', value: 'n' },
            { text: '内蒙古', value: 'o' },
            { text: '山西', value: 'p' }
        ],
            newarr:[],
            sarr:[],
            ks:""
        }
    },
    created() {
        this.ks=this.$route.query.string;
        this.axios({
            url:"http://47.112.208.93:8181/Doctorin/findall?string="+this.ks,
            method:"get"
        }).then((ok)=>{
            this.value1=this.$route.query.id;
            
            this.sarr=ok.data;
            // var newdata=data.filter((v,i)=>{
            //     if(v.office==this.ks){
            //         return v;
            //     }
            // })
            // this.sarr=newdata;
            
    
        },
    // created() {
    //     this.axios({
    //         url:"/liuxiaojie",
    //         method:"get"
    //     }).then((ok)=>{
    //         this.newarr=ok.data[0].doctor;
    //         this.value1=this.$route.query.id;
    //         this.ks=this.$route.query.keshi;
    //         var data=ok.data[0].doctor;
    //         var newdata=data.filter((v,i)=>{
    //             if(v.disease_type==this.ks){
    //                 return v;
    //             }
    //         })
    //         this.sarr=newdata; 
    )},
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
        Doctorlist3
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
}
.doctorlist{
    background: #ffffff;
}
</style>
