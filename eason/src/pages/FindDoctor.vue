<template>
<!-- 找医生 -->
    <div>
        <!-- 导航 -->
        <van-nav-bar
            title="找医生"
            left-arrow
            @click-left="onClickLeft"
        />
        <!-- 搜索栏 -->
        <van-search
            placeholder="输入症状、疾病、医院、科室、医生名"
            background="#f1f1f1"
        />
        <!-- 名医咨询&今日义诊 -->
        <div class="mingyi">
            <ul class="mingyiul">
                <li class="mingyi-li1" @click="FindDoctor()">
                    <div class="leftdiv1"></div>
                    <div class="rightdiv">
                        <p class="zixun">名义咨询</p>
                        <span class="more">更准确 更放心</span>
                    </div>
                </li>
                <li class="mingyi-li2" @click="Diagnose()">
                    <div class="leftdiv2"></div>
                    <div class="rightdiv">
                        <p class="zixun">今日义诊</p>
                        <span class="more">好口碑 真实惠</span>
                    </div>
                </li>
            </ul>
        </div>

        <!-- 按科室找医生 -->
        <p class="keshi">按科室找医生</p>
        <ul>
            <li class="perkeshi" v-for="(v,i) in arr" :key="i" @click="doctorlist(v.keshi,v.id)">
                <img :src="v.imgurl" class="keshipic">
                <span class="keshiname">{{v.keshi}}</span>
            </li>
        </ul>

           <div class="end"></div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            arr:[
                {imgurl:"../../static/images/a/1.png",keshi:"妇科",id:1},
                {imgurl:"../../static/images/a/2.png",keshi:"儿科",id:2},
                {imgurl:"../../static/images/a/3.png",keshi:"皮肤科",id:3},
                {imgurl:"../../static/images/a/4.png",keshi:"内科",id:4},
                {imgurl:"../../static/images/a/5.png",keshi:"男科",id:5},
                {imgurl:"../../static/images/a/6.png",keshi:"产科",id:6},
                {imgurl:"../../static/images/a/7.png",keshi:"外科",id:7},
                {imgurl:"../../static/images/a/8.png",keshi:"中医科",id:8},
                {imgurl:"../../static/images/a/9.png",keshi:"骨伤科",id:9},
                {imgurl:"../../static/images/a/10.png",keshi:"精神心理科",id:10},
                {imgurl:"../../static/images/a/11.png",keshi:"口腔额面科",id:11},
                {imgurl:"../../static/images/a/12.png",keshi:"眼科",id:12},
                {imgurl:"../../static/images/a/13.png",keshi:"耳鼻咽喉科",id:13},
                {imgurl:"../../static/images/a/14.png",keshi:"肿瘤及防治科",id:14},
                {imgurl:"../../static/images/a/15.png",keshi:"整形美容科",id:15},
                {imgurl:"../../static/images/a/16.png",keshi:"报告解读科",id:16},
                {imgurl:"../../static/images/a/17.png",keshi:"营养科",id:17},
            ]
            // arr:[]
        }
    },
    methods: {
    onClickLeft() {
        this.$router.go(-1);
    },
    FindDoctor(){
        this.$router.push("/DoctorConsult");
    },
    Diagnose(){
        this.$router.push("/Diagnose");
    },
    doctorlist(ks,id){
        this.$router.push({
            path:"/DoctorList",
            query:{string:ks,id:id}
        })
    }
  }
}
</script>

<style scoped>
.end{
    position: fixed;
    width: 100%;
    height: 100%;
    bottom: 0;
    background:#f0f0ee;
    z-index: -1;
}
.keshi{
    font-size: 14px;
    font-weight: 800;
    color: #676767;
    line-height: 14px;
    margin: 18px 0 10px 15px;
}
.keshipic{
    width: 30px;
    height: 30px;
    margin-bottom: 10px;
}
.perkeshi{
    width: 25%;
    float: left;
    text-align: center;
    background: #ffffff;
    border-right: 1px solid #f1f1f1;
    border-bottom: 1px solid #f1f1f1;
    box-sizing: border-box;
    padding: 30px 0px 20px;
}
.perkeshi:nth-child(4n){
    border-right: none;
}
.keshiname{
    display: block;
    font-size: 12px;
    color: #808080;
}
.mingyiul{
    display: flex;
}
.zixun{
    font-size: 14px;
    color: #323232;
    font-weight: 800;
    line-height: 14px;
}
.more{
    font-size: 12px;
    color: #999999;
    line-height: 12px;
}
.mingyi-li1{
    width: 50%;
    border-right: 1px solid #e7e7e7;
    display: flex;
    padding-left: 27px;
}
.mingyi-li2{
    width: 50%;
    display: flex;
    padding-left: 27px;
}
.mingyi{
    background: #ffffff;
    border-top: 1px solid #e7e7e7;
    border-bottom: 1px solid #e7e7e7;
    padding: 25px 0px;
}
.leftdiv1{
    width: 35px;
    height: 35px;
    background: url(../../static/images/w/mingyi.jpg) no-repeat;
    background-size: 35px 35px;
    margin-right: 10px;
}
.leftdiv2{
    width: 35px;
    height: 35px;
    background: url(../../static/images/w/aew.png) no-repeat;
    background-size: 35px 35px;
    margin-right: 10px;
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
.van-search__content{
    padding-left: 0;
    border: 1px solid #dbdbdb;
}
.van-search .van-cell{
    padding-left: 20px;
    background: #ffffff;
}

</style>
