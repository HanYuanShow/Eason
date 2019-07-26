<template>
        <!-- 医生列表 -->
        <div class="doctorbox" @click="doctor(doctor_id)">
            <div class="headpic"><img :src="imgsrc" class="doctorheadpic"></div>
            <div class="doctorintro">
                <ul>
                    <li>
                        <h4 class="doctorname">{{doctor_name}}</h4>
                        <span class="doctorkind">{{disease_type}} {{doctor_job}}</span>
                    </li>
                    <li class="doctorhospital">{{doctor_hospital}}</li>
                    <li class="line">{{doctor_adept}}</li>
                    <li><span class="doctorprice">￥{{doctor_printreferint}}元起</span><span class="okok">可咨询</span> </li>
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
        doctor_name:String,
        disease_type:String,
        doctor_job:String,
        imgsrc:String,
        doctor_id: Number,
        doctor_hospital:String,
        doctor_adept:String,
        doctor_printreferint:Number
    }
}
</script>

<style scoped>
.doctorheadpic{
    width: 70px;
    height: 70px;
    border-radius: 50%;
    border: 1px solid #cdcdcd;
}
.doctorprice{
    font-size: 14px;
    color: #ec6b43;
    line-height: 45px;
    margin-right: 20px;
}
.okok{
    font-size: 14px;
    color: #666666;
}
.doctorhospital{
    font-size: 14px;
    color: #323232;
}
.doctorname{
    float: left;
    margin-right: 20px;
}
.doctorkind{
    font-size: 14px;
    color: #323232;
}
.line{
    border-bottom: 1px solid #f4f4f4;
    font-size: 14px;
    color: #999999;
    overflow : hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
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
    width: 75%;
}

</style>
