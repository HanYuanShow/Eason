<template>
    <div class="drug-box">
        <div class="drug-con">
             <img :src="url" />
             <div class="drugP">
                    <p>{{medicineBriefa}}</p>
                    <p>{{medicineBriefb}}</p>
             </div>
            
            <span>￥{{price}}</span>
        </div>
       
    </div>
</template>
<script>
export default {
    props:{
        url:String,
        medicineBriefa:String,
        medicineBriefb:String,
        price:String
    }
}
</script>
<style scoped>
.drug-box{
      border:1px solid #f4f4f4;
    height:240px;
    margin:12px;
    text-align:center;
}
.drug-con{
    width:50%;
    text-align:center;
}

.drug-con p{
    font-size:13px;
    color:#1a1a1a;
}
.drug-con span{
    color:#ec6b43;
    font-size:12px;
}
.drug-con img{
    width:130px;
    height:72px;
    display:inline-block;
}
</style>
