<template>
    <div class="onlineDoctor">
        <ul class="doctorList">
            <li class="doctorItem" v-for="(v,i) in doctorItems" :key="i" @click="toDoctorDetail(v.id)">
                <div class="doctorPic"><img :src="v.impSrc" :alt="v.doctorName"></div>
                <div class="doctorIntr">
                    <p class="doctorName"><span>{{v.realaName}}</span><span>{{v.office}}</span><span>{{v.title}}</span></p>
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
        doctorItems:Array
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
    font-size: 14px;
    color: #666;
    margin-right: 15px;
}
.doctorName span:first-of-type{
    font-size: 16px;
    font-weight: bold;
    color: #323232;
    margin-right: 15px;
}
.inHospital,.goodAt{
    font-size: 14px;
    color: #999;
}
.inHospital{
    margin: 8px 0;
}
</style>
