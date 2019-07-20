<template>
    <div class="center">
         <div class="section">
                <span></span>
                <p>
                使用以下方式直接登录
                </p>
                <span></span>          
            </div>

        <ul>
            <li v-for="(v,i) in obj" :key="i"><img :src="v.img" alt=""></li>
        </ul>

        <div class="footer">
           <div class="argin">{{argin}}</div>
           <div class="book" @click="funbook()">{{of}}</div> 
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            obj:[
               {img:"../../static/images/w/awc.png"},
               {img:"../../static/images/w/awd.png"}, 
               {img:"../../static/images/w/awi.png"}, 
                {img:"../../static/images/w/awe.png"},
           ],
           argin:"注册代表阅读并同意",
           of:"《春雨医生用户协议》"
        }
    },
    methods: {
        funbook(){
            this.$router.push({path:"/chunyuxieyi"})
        }
    },
}
</script>
<style scoped>
.section{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: px;
    font-size: 14px;
    color: #828080;
}
.section span{
    margin: 0 15px;
    display: block;
    width: 60px;
    border-top: 1px solid #dad7d7;
}
ul{
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    margin-top: 15px;
}
ul li{
    width: 45px;
    height: 45px;
}
li img{
    width: 100%;
    height: 100%;
}
.footer{
    margin-top: 35%;
    justify-content: center;
    align-items: center;
    height: 70px;
    margin-top: PX;
    height: 20px;
    display: flex;
    /* padding-top: 50px; */
}
.book{
    color: #20c02d;
}
/* .center{ */
    /* height: 180px; */
/* } */
</style>
