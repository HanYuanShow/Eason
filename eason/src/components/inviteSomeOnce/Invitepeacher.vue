<template>
    <div class="ipt">
        <div class="content">
            <div class="top">
                <div class="img">
                    <img :src="imgs" alt="">
                </div>
                <div class="text">
                   {{title}}
                </div>  
            </div>
            <div class="bottom">
               <input type="button" value="去 邀 请"> 
            </div>   

        </div>  
    </div>
</template>
<script>
export default {
    data(){
        return{
           title:"成功邀请一位好友首次登录春雨小程序可领取50金币，每日最多领150金币" 
        }
    },
    props:{
        imgs:String,
    },
}
</script>
<style scoped>
.ipt{
    width: 100%;
    height: 140px;
    background: rgb(253, 168, 55);
}
.content{
    width: 98%;
    height: 140px;
    margin:0 auto;
}
.top{
    display: flex;
    align-items: center;
    padding-top: 15px;
}
.img{
    margin-left: 20px;
  background: white;
  width: 60px;
  height: 60px; 
  border-radius: 50% 
}

input{
    width: 160px;
    height: 40px;
    border-radius: 20px;
    border: none;
    color: rgb(253, 168, 55);
    text-align: center;
    line-height: 40px;
    font-size: 16px;
    background: white;
    display: block;
    margin:5px auto;
}
.text{
    font-size: 14px;
    margin-right: 20px;
    margin-left: 15px;
    color:white;
}
</style>
