<template>
    <div class="onlineDoctor">
        <div class="online-title">
            <h3>在线医生</h3>
            <a href="#" @click="toDoctorList(onlineDoctor[0].hospital)">更多</a>
        </div>
        <ul class="doctorList">
            <li class="doctorItem" v-for="(v,i) in onlineDoctor" :key="i" @click="toDoctorDetail(v.id)">
                <div class="doctorPic"><img :src="v.impSrc" :alt="v.realaName"></div>
                <div class="doctorIntr">
                    <p class="doctorName"><span>{{v.realaName}}</span><span>{{v.title}}</span></p>
                    <p class="inHospital">{{v.hospital}}</p>
                    <p class="goodAt">{{v.adept|goodAtFilter}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    props:{
        onlineDoctor:Array
    },
    filters:{
        goodAtFilter(val){
            if(val.length>35){
                return val.substring(0,35)+"..."
            }else{
                return val
            }
        }
    },
    methods: {
        toDoctorDetail(id){
            this.$router.push("/DetailsOfDoctor/"+id);
        },
        toDoctorList(hospital){
            console.log(hospital)
          
            this.$router.push({path:"/DoctorList",query:{value:hospital}
        })

        }
    },
}
</script>
<style scoped>
.onlineDoctor{
    background: #fff;
    overflow: hidden;
    margin-bottom: 10px;
}
.online-title{
    padding: 15px;
    overflow: hidden;
}
.online-title h3,.online-title a{
    font-weight: normal;
    font-size: 16px;
    color: #666;
    float: left;
}
.online-title a{
    float:right;
}
.doctorList{
    padding: 0 15px;
}
.doctorItem{
    overflow: hidden;
    padding: 15px 0;
    border-bottom: 1px solid #E7E7E7;
}
.doctorItem:last-of-type{
    border-bottom: none;
}
.doctorPic{
    float: left;
    width: 20%;
}
.doctorIntr{
    float:right;
    width: 80%;
}
.doctorPic img{
    width: 60px;
    height: 60px;
    border: 1px solid #E7E7E7;
    border-radius: 30px;
}
.doctorName span{
    font-size: 16px;
    color: #323232;
}
.doctorName span:last-of-type{
    font-size: 14px;
    margin-left: 15px;
}
.inHospital,.goodAt{
    font-size: 14px;
    color: #999;
}
.inHospital{
    margin: 8px 0;
}
</style>
