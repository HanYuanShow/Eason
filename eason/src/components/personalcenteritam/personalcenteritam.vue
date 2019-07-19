<template>
    <div class="list">
            <div class="leftdiv">
                <div class="titleimg">
                    <img :src="arrb.titleimg1" alt="">    
                </div>
                 <p>{{arrb.text}}</p> 
            </div> 
            <div class="reightdiv">
                    <p>{{arrb.sec}}</p>
                    <div><img :src="arrb.titleimg2" alt=""></div>
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
    },
}
</script>
<style scoped>
.list{
    width: 100%;
    height: 50px;
    display: flex;
    background: white;
    align-items: center;
    justify-content: space-between;
}
.leftdiv{
    display: flex;
    align-items: center;

}
.titleimg{
     width: 40px;
    height: 40px;
    margin-left: 18px;

}
.titleimg img{
    width: 35px;
    height: 35px;
}
.leftdiv p{
    margin-left: 10px;
    font-size: 15px;
    font-weight: 600;
}
.reightdiv{
    margin-right: 15px;
    display: flex;
    align-items: center;
}
.reightdiv img{
    display: block;
    width: 10px;
    height: 20px;
}
.reightdiv p{
    margin-right: 18px;
    color: rgb(191, 189, 189);
    font-size: 15px;
}
</style>
