<template>
    <div class="drug-list" @click="fundrug(typeid)"> 
        <img :src="urls" />
        <span>{{title}}</span>
    </div>
</template>
<script>
export default {
    data(){
        return{
            arr:""
        }
    },
    props:{
       urls:String,
        title:String,
         typeid:""
       
    },
    methods: {
        fundrug(i){
            // console.log(i)
            this.$router.push("/drugDetails?typeid="+i)
        }
    },
}
</script>
<style scoped>
.drug-list{
    float:left;
    width:25%;
    
}
.drug-list img{
    width:50px;
    height:50px;
}
.drug-list span{
    display:block;
}
</style>
