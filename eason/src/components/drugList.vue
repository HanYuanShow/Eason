<template>
    <div class="drug-list">
        <img :src="url" />
        <span>{{title}}</span>
    </div>
</template>
<script>
export default {
    props:{
        url:String,
        title:String
    }
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
