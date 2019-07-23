<template>
    <div class="drug-box">
        <div class="drug-con" @click="funMedicine()">
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
    },
    methods:{
    funMedicine(){
        this.$router.push("/shopStore");
    }

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
    margin-top: 16px;
    padding-left: 10px
}
.drugP{
     margin-top:14px;
}
.drugP p{
    font-size:16px;
    color:#1a1a1a;
   line-height:36px;
    white-space: nowrap;
    padding-left: 10px
}
.drug-con span{
    color:#f09a7e;
    font-size:16px;
    margin-top:14px;
    display:block
}
</style>
