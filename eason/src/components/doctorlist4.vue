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
                    <li class="line">
                        <span class="label">{{doctor_infor.hospiTaltype}}</span>
                        <span class="label">{{doctor_infor.workTime}}</span>
                    </li>
                    <li class="detail">{{doctor_infor.adept}}</li>
                    <li class="jiage">
                        <span class="doctorprice">￥{{doctor_infor.printreferint}}元起</span>
                        <span class="yuanjia">原价:{{doctor_infor.phonereferint}}元</span>
                        <span class="okok">还剩{{doctor_infor.degreeint}}个机会</span>

                    </li>
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
        doctor_infor: Object
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
.line{
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
.jiage{
    position: relative;
    display: block;
}
.doctorprice{
    font-size: 14px;
    color: #ec6b43;
    line-height: 45px;
    margin-right: 5px;
    font-weight: 800;
}
.yuanjia{
    font-size: 12px;
    color: #999999;
    text-decoration-line: line-through;
}
.okok{
    font-size: 12px;
    line-height: 12px;
    color: #ffffff;
    background: #6bce72;
    padding: 3px 5px;
    border-radius: 2px;
    position: absolute;
    right: 0;
    top: 30%;

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
    border-bottom: 1px solid #f4f4f4;
    width: 100%;
    height: 24px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding-bottom: 5px;
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
