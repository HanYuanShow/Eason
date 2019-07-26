<template>
        <!-- 医生列表 -->
        <div class="doctorbox" @click="doctor(newv.id)">
            <div class="headpic"><img :src="newv.impSrc" class="doctorheadpic"></div>
            <div class="doctorintro">
                <ul>
                    <li>
                        <h4 class="doctorname">{{newv.realaName}}</h4>
                        <span class="doctorkind">{{newv.office}} {{newv.title}}</span>
                    </li>
                    <li class="doctorhospital">{{newv.hospital}}</li>
                    <li class="line">{{newv.adept}}</li>
                    <li><span class="doctorprice">￥{{newv.printreferint}}元起</span><span class="okok">可咨询</span> </li>
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
        newv:Object
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
