<template>
    <div class="hospitalIntr">
        <PromptingMessage></PromptingMessage>
        <HospitalIntroComp titleCon="医院介绍" :introCon="loadmore"></HospitalIntroComp>
        <div slot="morebtn" class="loadmore" @click="isloadMore()">{{loadBtn}}</div>
        <HospitalIntroComp titleCon="地址及行车路线" :introCon="detailAddress"></HospitalIntroComp>
        <div slot="morebtn" class="loadmore" @click="location()">在地图上打开</div>
        <div slot="moreCon" class="carLines" v-html="carLines"></div>
        <HospitalIntroComp titleCon="电话" :introCon="contactWay"></HospitalIntroComp>
    </div>
</template>
<script>
import PromptingMessage from '../components/hospitalDetail/PromptingMessage'
import HospitalIntroComp from '../components/hospitalDetail/hospitalIntroComp'

export default {
    data() {
        return {
            id:0,
            allData:{},
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
        HospitalIntroComp
    },
    created() {
        this.id = this.$route.params.clickId;//获取传过来的id
        // console.log(this.id)
        this.axios({
            url:"/reqHospitalData/hospitalIntro/",  //"/reqHospitalData/hospitalIntro?id="+this.id
            method:"get"
        }).then((ok)=>{
            this.allData = ok.data;//获取页面所需所有的数据
            this.HospitalIntroData = this.allData.HospitalIntroduction;
            this.contactWay = this.allData.contactWay;
            this.detailAddress = this.allData.detailAddress;
            this.city = this.allData.address;
            this.keyword = this.allData.hospitalName;
            this.carLines = this.allData.carLines;
            // console.log(this.allData)
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
