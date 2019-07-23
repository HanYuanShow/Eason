<template>
    <div class="drug-list" @click="fundrug(title)"> 
        <img :src="urls" />
        <span>{{title}}</span>
    </div>
</template>
<script>
export default {
    props:{
        urls:String,
        title:String
    },
    methods: {
        fundrug(i){
            console.log(i)
            this.$router.push("/drugDetails?title="+i)
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
