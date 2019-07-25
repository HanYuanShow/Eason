<template>
<!-- 医生简介 -->
    <div class="doctorintroduce">
        <!-- 导航 -->
        <van-nav-bar
            title="标题"
            left-text="返回"
            left-arrow
            @click-left="onClickLeft"
        />
        <!-- 头像、姓名、科室、所属医院 -->
        <div class="doctor">
            <div class="doctorpic">
                <img :src="this.newarr.impSrc" class="doctorheadpic">
            </div>
            <div class="doctorright">
                <p class="doctorname">{{this.newarr.realaName}}</p>
                <p class="doctortype">{{this.newarr.office}} {{this.newarr.title}}</p>
                <p class="doctorhospital">{{this.newarr.hospital}}</p>
            </div>
        </div>
        
        <div class="doctorintro">
            <!-- 擅长及诊所介绍 -->
            <div>
                <p>擅长及诊所介绍</p>
                <span>{{this.newarr.adept==null?'暂无':this.newarr.adept}}</span>
            </div>
            <!-- 医学教育背景介绍 -->
            <!-- <div>
                <p>医学教育背景介绍</p>
                <span>{{bool?this.newarr.backyard:'暂无'}}</span>
            </div> -->
            <!-- 学术研究成果、获奖介绍 -->
            <div>
                <p>学术研究成果、获奖介绍</p>
                <span>{{this.newarr.honor==null?'暂无':this.newarr.honor}}</span>
            </div>
            <!-- 医生寄语 -->
            <div>
                <p>医生寄语</p>
                <span>{{this.newarr.sendWord==null?'暂无':this.newarr.sendWord}}</span>
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
    data() {
        return {
            newid:'',
            newarr:[],
            bool:true
        }
    },
    created() {
        this.newarr=this.$route.query.newarr;
    },
    methods: {
        onClickLeft(){
            this.$router.go(-1);
        }
    }
}
</script>

<style scoped>
.doctorheadpic{
    width: 75px;
    height: 75px;
}
.doctorintroduce{
    background: #ffffff;
}
.doctorintro p{
    font-size: 14px;
    font-weight: 800;
    color: #323232;
    line-height: 32px;
    text-indent: 15px;
    border-bottom: 1px solid #f4f4f4;
}
.doctorintro span{
    display: block;
    font-size: 14px;
    color: #666666;
    padding: 15px 15px 20px;
    line-height: 22px;
}
.van-icon-arrow-left:before {
    font-size: 25px;
    color: #6bce72;
    font-weight: 800;
}
.van-nav-bar__text{
    color: #6bce72;
    font-size: 16px;
    font-weight: 800;
}
.van-nav-bar__title{
    font-weight: 800;
}
.van-nav-bar{
    border-bottom: 1px solid #dbdbdb;
}
.doctor{
    display: flex;
    padding: 25px 15px;
    border-bottom: 10px solid #f4f4f4;
}
.doctorname{
    font-size: 16px;
    color: #323232;
    font-weight: 800;
    line-height: 16px;
}
.doctortype{
    font-size: 12px;
    color: #666666;
    line-height: 35px;
}
.doctorhospital{
    font-size: 12px;
    color: #666666;
    line-height: 12px;
}

.doctorpic{
    width: 25%;
}
.doctorpic img{
    width: 60px;
    height: 60px;
}
</style>
