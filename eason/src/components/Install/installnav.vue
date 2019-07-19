<template>
    <div class="intallnav">
        <div class="left">
            {{arrb.title}}
        </div>
        <div class="reight">
            <p>
                {{arrb.action}}
            </p>
            <img :src="arrb.imgages" alt="">
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    props:{
        arrb:"",
    }
}
</script>
<style scoped>
 .intallnav{
     width: 100%;
     height: 50px;
    background: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
 }
 .left{
     margin-left: 15px;
     font-size: 16px;
 }   
 .reight{
     margin-right: 17px;
     display: flex;
     align-items: center;
 }
 .reight img{
     width: 12px;
     height: 24px;
 }
 .reight p{
     margin-right: 15px;
     font-size: 16px;
     color: #a2a1a2;
 }
</style>
