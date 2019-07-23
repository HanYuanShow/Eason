<template>
        <!-- 医生列表 -->
        <div class="doctorbox" @click="doctor()">
            <div class="headpic"><img src="../../static/images/w/a3c.png" alt=""></div>
            <div class="doctorintro">
                <ul>
                    <li>
                        <h4 class="doctorname">{{doctor_name}}</h4>
                        <span class="doctorkind">{{disease_type}} {{doctor_job}}</span>
                    </li>
                    <li class="doctorhospital">陆军军医大学第一附属医院</li>
                    <li class="detail">湿疹、尿布疹、荨麻疹、痤疮、玫瑰痤疮、脱发、色素斑</li>
                    <li class="line">
                        <span class="label" v-for="(v,i) in label" :key="i">{{v}}</span>
                        
                    </li>
                    <li><span class="doctorprice">￥160元起</span><span class="okok">{{consult_num}}人购买</span> </li>
                </ul>
            </div>
        </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    methods: {
        doctor(){
            this.$router.push("/DetailsOfDoctor")
        }
    },
    props:{
        doctor_name:String,
        disease_type:String,
        doctor_job:String,
        label:Array,
        consult_num:String
    }
}
</script>

<style scoped>
.line{
    border-bottom: 1px solid #f4f4f4;
    line-height: 30px;
    padding-bottom: 5px;
}
.label{
    padding: 2px 5px;
    border: 1px solid #e56430;
    font-size: 12px;
    color: #ec6b43;
    border-radius: 2px;
    margin-right: 5px;
    font-weight: 800;
}
.doctorprice{
    font-size: 14px;
    color: #ec6b43;
    line-height: 45px;
    margin-right: 20px;
    font-weight: 800;
}
.okok{
    font-size: 14px;
    color: #666666;
    font-weight: 800;
}
.doctorhospital{
    font-size: 14px;
    color: #666666;
}
.doctorname{
    float: left;
    margin-right: 20px;
    font-weight: 800;
}
.doctorkind{
    font-size: 14px;
    color: #666666;
    font-weight: 800;
}
.detail{
    font-size: 14px;
    color: #999999;
}
.doctorbox{
    display: flex;
    padding-top: 18px;
    border-bottom: 1px solid #f4f4f4;
    background: #ffffff;
    margin: 0 10px;
}
.doctorbox:last-child{
    border-radius: 0 0 5px 5px;
}
.headpic{
    width: 25%;
    border-radius: 0 0 0 5px;
    text-align: center;
}
.doctorintro{
    line-height: 25px;
    border-radius: 0 0 5px 0;
    padding-right: 10px;
}

</style>
