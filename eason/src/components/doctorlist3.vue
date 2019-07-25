<template>
        <!-- 医生列表 -->
        <div class="doctorbox" @click="doctor(doctor_infor.id,doctor_infor)">
            <div class="headpic"><img :src="doctor_infor.impSrc" class="doctorheadpic"></div>
            <div class="doctorintro">
                <ul>
                    <li>
                        <h4 class="doctorname">{{doctor_infor.realaName}}</h4>
                        <span class="doctorkind">{{doctor_infor.office}} {{doctor_infor.title}}</span>
                    </li>
                    <li class="doctorhospital">{{doctor_infor.hospital}}</li>
                    <li class="detail">{{doctor_infor.adept}}</li>
                    <li class="line">
                        <span class="label">{{doctor_infor.hospiTaltype}}</span>
                        <span class="label">{{doctor_infor.workTime}}</span>
                    </li>
                    <li><span class="doctorprice">￥{{doctor_infor.printreferint}}元起</span><span class="okok">{{doctor_infor.peopleNumint}}人购买</span> </li>
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
        doctor(id){
            this.$router.push("/DetailsOfDoctor/"+id)
        }
    },
    props:{
        doctor_infor: Object,
        // doctor_name:String,
        // disease_type:String,
        // doctor_job:String,
        // doctor_label:String,
        // doctor_label2:String,
        // doctor_hospital:String,
        // good_at:String,
        // doctor_price: Number,
        // consult_num: Number,
        // doctor_id: Number,
        // imgsrc:String
    }
}
</script>

<style scoped>
.doctorheadpic{
    width: 75px;
    height: 75px;
}
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
    width: 75%;
    line-height: 25px;
    border-radius: 0 0 5px 0;
    padding-right: 10px;
}

</style>
