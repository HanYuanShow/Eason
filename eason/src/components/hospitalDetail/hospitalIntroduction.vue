<template>
    <div class="hospitalIntr">
        <div class="title">
            <h3>医院介绍</h3>
        </div>
        <div class="intr" v-html="introFilter"></div>
        <a href="#" class="moreBtn" @click="toDetailIntro(id)">查看详细介绍>></a>
    </div>
</template>
<script>
export default {
    props:{
        hospitalIntro:String,
        id:Number
    },
    computed: {
        introFilter(){
            if(this.hospitalIntro.length<0){
                return this.hospitalIntro="暂无数据。。。"
            }else if(this.hospitalIntro.length>140){
                return this.hospitalIntro.substring(0,140)+"..."
            }    
        }
    },
    methods: {
        toDetailIntro(clickId){
            console.log(clickId)
            this.$router.push("/hospitalIntro/"+clickId)
        }
    },
}
</script>
<style scoped>
.hospitalIntr{
    background: #fff;
    overflow: hidden;
    margin-bottom: 10px;
}
.title{
    padding: 15px;
}
.title h3{
    font-weight: normal;
    font-size: 16px;
    color: #666;
}
.intr{
    line-height: 24px;
    font-size: 14px;
    color: #323232;
    padding: 0 15px;
}
.moreBtn{
    margin-top: 15px;
    color: #39D167;
    font-size: 14px;
    display: inline-block;
    padding: 4px 15px;
}
</style>
