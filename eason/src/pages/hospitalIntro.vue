<template>
    <div class="hospitalIntr">
        <ReturnComp :routerTips="hospitalName" class="returnbar"></ReturnComp>
        <div class="hospitalIntrCon">
            <PromptingMessage></PromptingMessage>
            <HospitalIntroComp titleCon="医院介绍" :introCon="loadmore"></HospitalIntroComp>
            <div slot="morebtn" class="loadmore" @click="isloadMore()">{{loadBtn}}</div>
            <HospitalIntroComp titleCon="地址及行车路线" :introCon="detailAddress"></HospitalIntroComp>
            <div slot="morebtn" class="loadmore" @click="location()">在地图上打开</div>
            <div slot="moreCon" class="carLines" v-html="carLines"></div>
            <HospitalIntroComp titleCon="电话" :introCon="contactWay"></HospitalIntroComp>
        </div>
    </div>
</template>
<script>
import PromptingMessage from '../components/hospitalDetail/PromptingMessage'
import HospitalIntroComp from '../components/hospitalDetail/hospitalIntroComp'
import ReturnComp from "../components/returnComp/returnComp";
export default {
    data() {
        return {
            id:0,
            allData:[],
            hospitalName:"",
            HospitalIntroData:"", //医院介绍数据
            loadBtn:"",
            contactWay:"", //联系方式数据
            isTrue:false,
            detailAddress:"",
            carLines:"",
            city:"",
            keyword:""
        }
    },
    props:{
        // contactWay:String  

    },
    components:{
        PromptingMessage,
        HospitalIntroComp,
        ReturnComp
    },
    created() {
        this.id = this.$route.params.clickId;//获取传过来的id
        console.log(this.id)
        this.axios({
            url:"http://47.95.140.83:8181/hospital/findHospitalById/"+this.id,  //"/reqHospitalData/hospitalIntro?id="+this.id
            method:"get"
        }).then((ok)=>{
            this.allData = ok.data;//获取页面所需所有的数据
            console.log(this.allData)
            this.HospitalIntroData = this.allData.info;
            this.hospitalName = this.allData.name;
            this.contactWay = this.allData.phone;
            this.detailAddress = this.allData.detailAddress;
            this.city = this.allData.address;
            this.keyword = this.allData.name;
            this.carLines = this.allData.site;
            
        })
    },
    computed: {
        loadmore(){
            if(this.isTrue==true){
                this.loadBtn="收 起";
                return this.HospitalIntroData;
            }else{
                this.loadBtn="展开全部";
                return this.HospitalIntroData.substring(0,140)+"...";
            }
        }
    },
    methods: {
        isloadMore(){
            this.isTrue = !this.isTrue;
        },
        location(){
            // console.log(this.keyword)
            this.$router.push("/location/"+this.city+"/"+this.keyword);
        }
    },
}
</script>
<style scoped>
.hospitalIntrCon{
    margin-top: 50px;
}
.returnbar {
  position: fixed;
  top: 0;
  z-index: 999;
}
.loadmore{
    font-size: 14px;
    color: #999;
    text-align: center;
    background: #E7E7E7;
    padding: 4px 0;
    border-radius: 2px;
    margin: 0 15px 15px;
}
.carLines{
    font-size: 14px;
    color: #666;
    line-height: 24px;
    padding: 4px 0;
    border-radius: 2px;
    margin: 0 15px 15px;
}
</style>
